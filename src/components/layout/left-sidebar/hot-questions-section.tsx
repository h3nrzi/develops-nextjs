import Image from "next/image";
import Link from "next/link";

import { hotQuestions } from "@/data/hot-questions";

export interface HotQuestion {
  id: string;
  title: string;
}

const QuestionLink = ({ question }: { question: HotQuestion }) => (
  <Link
    href={`/questions/${question.id}`}
    className="flex cursor-pointer items-center justify-between gap-7 transition-opacity hover:opacity-80"
  >
    <p className="body-medium text-dark500_light700">{question.title}</p>
    <Image
      src="/assets/icons/chevron-right.svg"
      alt="مشاهده سوال"
      width={20}
      height={20}
      className="invert-colors flex-shrink-0 rotate-180"
    />
  </Link>
);

export default function HotQuestionsSection() {
  return (
    <>
      <h3 className="h3-bold text-dark200_light900">سوالات پربازدید</h3>
      <div className="flex flex-col gap-4">
        {hotQuestions.map((question) => (
          <QuestionLink key={question.id} question={question} />
        ))}
      </div>
    </>
  );
}
