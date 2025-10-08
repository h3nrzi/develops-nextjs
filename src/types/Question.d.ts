import { QuestionTag } from "./QuestionTag";

interface QuestionTag {
  id: number;
  name: string;
}

interface Author {
  id: number;
  name: string;
  picture: string;
}

interface Question {
  id: number;
  title: string;
  tags: QuestionTag[];
  author: Author;
  upvotes: number;
  views: number;
  answers: object[];
  createdAt: Date;
}
