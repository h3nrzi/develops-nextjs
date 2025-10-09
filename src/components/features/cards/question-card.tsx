import { Question } from "@/types/Question";

interface Props {
  question: Question;
}

export default function QuestionCard({ question }: Props) {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      {question.title}
    </div>
  );
}
