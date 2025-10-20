import { Question, User, Tag, Answer } from "@prisma/client";

export type QuestionWithRelations = Question & {
  author: User;
  tags: { tag: Tag }[];
  answers: (Answer & { author: User })[];
};

export interface CreateQuestionDto {
  title: string;
  explanation: string;
  tags: string[];
  authorId: number;
}

export interface UpdateQuestionDto {
  title?: string;
  explanation?: string;
  tags?: string[];
}

export type { Question, User, Tag, Answer };
