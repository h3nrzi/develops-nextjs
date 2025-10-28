import type {
  CreateQuestionDto,
  QuestionWithRelations,
} from "@/core/modules/questions/questions.model";
import { httpClient } from "@/lib/http-client";

class QuestionsService {
  async getAll(): Promise<QuestionWithRelations[]> {
    return httpClient.get<QuestionWithRelations[]>("/api/questions");
  }

  async getById(id: number): Promise<QuestionWithRelations> {
    return httpClient.get<QuestionWithRelations>(`/api/questions/${id}`);
  }

  async create(data: CreateQuestionDto): Promise<QuestionWithRelations> {
    return httpClient.post<QuestionWithRelations>("/api/questions", data);
  }

  async update(
    id: number,
    data: Partial<CreateQuestionDto>,
  ): Promise<QuestionWithRelations> {
    return httpClient.put<QuestionWithRelations>(`/api/questions/${id}`, data);
  }

  async delete(id: number): Promise<void> {
    return httpClient.delete<void>(`/api/questions/${id}`);
  }
}

export const questionsService = new QuestionsService();
