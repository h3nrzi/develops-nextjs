import { inject, injectable } from "tsyringe";

import { CacheService } from "../../services/cache.service";
import { Logger } from "../../services/logger.service";

import { QuestionWithRelations } from "./questions.model";
import { QuestionsRepository } from "./questions.repository";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { UpdateQuestionDto } from "./dto/update-question.dto";

@injectable()
export class QuestionsService {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepository: QuestionsRepository,
    @inject("Logger")
    private logger: Logger,
    @inject("CacheService")
    private cache: CacheService,
  ) {}

  async getAllQuestions(): Promise<QuestionWithRelations[]> {
    return this.questionsRepository.findAll();
  }

  async getQuestionById(id: number): Promise<QuestionWithRelations> {
    const cacheKey = `question:${id}`;

    // Try cache first
    const cached = this.cache.get<QuestionWithRelations>(cacheKey);
    if (cached) {
      this.logger.debug(`Cache hit for question ${id}`);
      return cached;
    }

    this.logger.info(`Fetching question ${id} from database`);
    const question = await this.questionsRepository.findById(id);

    // Cache for 5 minutes
    this.cache.set(cacheKey, question, 300);

    // Increment views asynchronously
    this.questionsRepository
      .incrementViews(id)
      .catch((error) =>
        this.logger.error(
          `Failed to increment views for question ${id}`,
          error,
        ),
      );

    return question;
  }

  async createQuestion(
    data: CreateQuestionDto,
  ): Promise<QuestionWithRelations> {
    this.logger.info(`Creating new question: ${data.title}`);
    const question = await this.questionsRepository.create(data);

    // Clear questions list cache
    this.cache.delete("questions:all");

    this.logger.info(`Question created with id: ${question.id}`);
    return question;
  }

  async updateQuestion(
    id: number,
    data: UpdateQuestionDto,
  ): Promise<QuestionWithRelations | null> {
    this.logger.info(`Updating question ${id}`);
    const question = await this.questionsRepository.update(id, data);

    // Clear caches
    this.cache.delete(`question:${id}`);
    this.cache.delete("questions:all");

    return question;
  }

  async deleteQuestion(id: number): Promise<void> {
    this.logger.info(`Deleting question ${id}`);
    await this.questionsRepository.delete(id);

    // Clear caches
    this.cache.delete(`question:${id}`);
    this.cache.delete("questions:all");
  }
}
