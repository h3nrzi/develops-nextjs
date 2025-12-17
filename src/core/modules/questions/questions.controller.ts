import { inject, injectable } from "tsyringe";

import { QuestionWithRelations } from "./questions.model";
import { QuestionsService } from "./questions.service";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { UpdateQuestionDto } from "./dto/update-question.dto";

@injectable()
export class QuestionsController {
  constructor(
    @inject("QuestionsService")
    private questionsService: QuestionsService,
  ) {}

  async getQuestions(): Promise<QuestionWithRelations[]> {
    return this.questionsService.getAllQuestions();
  }

  async getQuestion(id: number): Promise<QuestionWithRelations | null> {
    return this.questionsService.getQuestionById(id);
  }

  async createQuestion(
    data: CreateQuestionDto,
  ): Promise<QuestionWithRelations> {
    return this.questionsService.createQuestion(data);
  }

  async updateQuestion(
    id: number,
    data: UpdateQuestionDto,
  ): Promise<QuestionWithRelations | null> {
    return this.questionsService.updateQuestion(id, data);
  }

  async deleteQuestion(id: number): Promise<void> {
    return this.questionsService.deleteQuestion(id);
  }
}
