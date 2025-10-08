import { Question } from "@/types/Question";

interface Props {
  question: Question;
}

export default function QuestionCard({ question }: Props) {
  return <div>{question.title}</div>;
}
