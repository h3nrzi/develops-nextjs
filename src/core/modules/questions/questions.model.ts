import { Answer, Question, Tag, User } from "@prisma/client";

import type {
  CreateQuestionInput,
  UpdateQuestionInput,
} from "@/lib/schemas/question.schema";

export type QuestionWithRelations = Question & {
  author: User;
  tags: { tag: Tag }[];
  answers: (Answer & { author: User })[];
};

export interface CreateQuestionDto extends CreateQuestionInput {
  authorId: string;
}

export type UpdateQuestionDto = UpdateQuestionInput;
