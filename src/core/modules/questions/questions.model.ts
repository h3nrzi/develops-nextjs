import { Answer, Question, Tag, User } from "@prisma/client";

export type QuestionWithRelations = Question & {
  author: User;
  tags: { tag: Tag }[];
  answers: (Answer & { author: User })[];
};
