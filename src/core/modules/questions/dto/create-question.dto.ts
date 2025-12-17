import type { CreateQuestionInput } from "@/lib/schemas/question.schema";

export interface CreateQuestionDto extends CreateQuestionInput {
  authorId: string;
}
