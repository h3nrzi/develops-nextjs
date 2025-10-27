import type {
  CreateQuestionDto,
  QuestionWithRelations,
} from "@/core/modules/questions/questions.model";
import { apiClient } from "@/lib/api-client";

class QuestionsService {
  async getAll(): Promise<QuestionWithRelations[]> {
    return apiClient.get<QuestionWithRelations[]>("/api/questions");
  }

  async getById(id: number): Promise<QuestionWithRelations> {
    return apiClient.get<QuestionWithRelations>(`/api/questions/${id}`);
  }

  async create(data: CreateQuestionDto): Promise<QuestionWithRelations> {
    return apiClient.post<QuestionWithRelations>("/api/questions", data);
  }

  async update(
    id: number,
    data: Partial<CreateQuestionDto>,
  ): Promise<QuestionWithRelations> {
    return apiClient.put<QuestionWithRelations>(`/api/questions/${id}`, data);
  }

  async delete(id: number): Promise<void> {
    return apiClient.delete<void>(`/api/questions/${id}`);
  }
}

export const questionsService = new QuestionsService();
