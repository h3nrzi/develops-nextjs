import Link from "next/link";

import { Question } from "@/types/Question";
import GlobalTag from "@/components/features/tags/global.tag";
import { getTimestamp } from "@/lib/utils";
import Metric from "@/components/features/metric";

interface Props {
  question: Question;
}

export default function QuestionCard({ question }: Props) {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row">
        {/* Date and Title */}
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(question.createdAt)}
          </span>
          <Link href={`/questions/${question.id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {question.title}
            </h3>
          </Link>
        </div>
        {/* User Actions - If signed in add edit delete actions */}
      </div>

      {/* Tags */}
      <div className="mt-3.5 flex flex-wrap gap-2">
        {question.tags.map((tag) => (
          <GlobalTag key={tag.id} id={tag.id} name={tag.name} />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap">
        <Metric
          title={getTimestamp(question.createdAt)}
          alt="authors"
          isAuthor
          href={`/profile/${question.author.id}`}
          question={question}
          className="body-medium text-dark400_light700"
        />
        <div className="flex gap-5">
          <Metric
            title="پسند"
            alt="upvotes"
            icon="/assets/icons/like.svg"
            question={question}
            className="small-medium text-dark400_light800"
          />
          <Metric
            title="پاسخ"
            alt="message"
            icon="/assets/icons/message.svg"
            question={question}
            className="small-medium text-dark400_light800"
          />
          <Metric
            title="بازدید"
            alt="eye"
            icon="/assets/icons/eye.svg"
            question={question}
            className="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
}
