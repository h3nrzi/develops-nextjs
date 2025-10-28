import type { QuestionWithRelations } from "@/core/modules/questions/questions.model";
import { authenticatedHttpClient, httpClient } from "@/lib/http-client";
import type {
  CreateQuestionInput,
  UpdateQuestionInput,
} from "@/lib/schemas/question.schema";

class QuestionsService {
  // Public operations - no auth required
  async getAll(): Promise<QuestionWithRelations[]> {
    return httpClient.get<QuestionWithRelations[]>("/api/questions");
  }

  async getById(id: number): Promise<QuestionWithRelations> {
    return httpClient.get<QuestionWithRelations>(`/api/questions/${id}`);
  }

  // Protected operations - auth required
  async create(data: CreateQuestionInput): Promise<QuestionWithRelations> {
    return authenticatedHttpClient.post<QuestionWithRelations>(
      "/api/questions",
      data,
    );
  }

  async update(
    id: number,
    data: UpdateQuestionInput,
  ): Promise<QuestionWithRelations> {
    return authenticatedHttpClient.put<QuestionWithRelations>(
      `/api/questions/${id}`,
      data,
    );
  }

  async delete(id: number): Promise<void> {
    return authenticatedHttpClient.delete<void>(`/api/questions/${id}`);
  }
}

export const questionsService = new QuestionsService();
