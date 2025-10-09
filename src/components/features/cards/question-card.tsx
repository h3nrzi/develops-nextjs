import Image from "next/image";
import Link from "next/link";

import { Question } from "@/types/Question";
import { formatNumber } from "@/lib/utils";

import Tag from "../tag";

interface Props {
  question: Question;
}

const getTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / 60000);
  const diffInHours = Math.floor(diffInMs / 3600000);
  const diffInDays = Math.floor(diffInMs / 86400000);
  const diffInMonths = Math.floor(diffInMs / 2592000000);
  const diffInYears = Math.floor(diffInMs / 31536000000);

  if (diffInMinutes < 1) return "just now";
  if (diffInMinutes < 60)
    return `asked ${diffInMinutes} ${diffInMinutes === 1 ? "min" : "mins"} ago`;
  if (diffInHours < 24)
    return `asked ${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
  if (diffInDays < 30)
    return `asked ${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`;
  if (diffInMonths < 12)
    return `asked ${diffInMonths} ${diffInMonths === 1 ? "month" : "months"} ago`;
  return `asked ${diffInYears} ${diffInYears === 1 ? "year" : "years"} ago`;
};

export default function QuestionCard({ question }: Props) {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex flex-col gap-3.5">
          {/* Title */}
          <Link href={`/questions/${question.id}`}>
            <h3 className="h3-semibold text-dark200_light900 line-clamp-2 hover:underline">
              {question.title}
            </h3>
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {question.tags.map((tag) => (
              <Tag
                key={tag.id}
                id={tag.id.toString()}
                name={tag.name}
                showCount={false}
              />
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          {/* Author Info */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1">
              <Image
                src={question.author.picture}
                alt={question.author.name}
                width={20}
                height={20}
                className="rounded-full object-cover"
              />
              <p className="body-medium text-dark400_light700">
                {question.author.name}
              </p>
            </div>
            <p className="small-regular text-dark400_light700">
              • {getTimeAgo(question.createdAt)}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            {/* Votes */}
            <div className="flex items-center gap-0.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M10 6.66667L9.34267 6.55733C9.3268 6.6528 9.3319 6.75057 9.35762 6.84386C9.38334 6.93715 9.42907 7.02373 9.49161 7.09757C9.55416 7.17141 9.63204 7.23075 9.71983 7.27146C9.80762 7.31218 9.90323 7.33329 10 7.33333V6.66667ZM2.66667 6.66667V6C2.48986 6 2.32029 6.07024 2.19526 6.19526C2.07024 6.32029 2 6.48986 2 6.66667H2.66667ZM4 14H11.5733V12.6667H4V14ZM12.3733 6H10V7.33333H12.3733V6ZM10.658 6.776L11.1947 3.55267L9.88 3.33333L9.34267 6.55733L10.658 6.776ZM9.88 2H9.73733V3.33333H9.88V2ZM7.518 3.18733L5.84133 5.70333L6.95067 6.44333L8.628 3.92733L7.518 3.18733ZM5.28667 6H2.66667V7.33333H5.28667V6ZM2 6.66667V12H3.33333V6.66667H2ZM13.5347 12.392L14.3347 8.392L13.028 8.13067L12.228 12.1307L13.5347 12.392ZM5.84133 5.70333C5.78043 5.79461 5.69795 5.86945 5.60119 5.9212C5.50443 5.97295 5.39639 6.00002 5.28667 6V7.33333C5.61591 7.33331 5.94006 7.252 6.23034 7.09663C6.52061 6.94126 6.76805 6.71662 6.95067 6.44267L5.84133 5.70267V5.70333ZM11.1947 3.55267C11.2265 3.36169 11.2164 3.16607 11.165 2.97941C11.1136 2.79274 11.0222 2.6195 10.8971 2.47174C10.772 2.32398 10.6162 2.20524 10.4405 2.12378C10.2649 2.04231 10.0736 2.00007 9.88 2V3.33333L11.1947 3.55267ZM12.3733 7.33333C12.472 7.33329 12.5694 7.35515 12.6586 7.39732C12.7478 7.43949 12.8265 7.50093 12.889 7.57721C12.9516 7.65348 12.9965 7.74269 13.0204 7.8384C13.0443 7.93411 13.0473 8.03393 13.028 8.13067L14.3347 8.392C14.3927 8.1019 14.3856 7.80255 14.3139 7.51552C14.2422 7.22849 14.1078 6.96094 13.9202 6.73214C13.7327 6.50334 13.4967 6.319 13.2294 6.19239C12.962 6.06579 12.6698 6.00008 12.374 6V7.33333H12.3733ZM11.5733 14C12.0357 14 12.4839 13.8398 12.8415 13.5466C13.1991 13.2535 13.444 12.8454 13.5347 12.392L12.228 12.1307C12.1978 12.282 12.116 12.4181 11.9966 12.5158C11.8772 12.6136 11.7276 12.6669 11.5733 12.6667V14ZM9.73733 2C9.29825 1.9999 8.86593 2.10822 8.47877 2.31535C8.09161 2.52248 7.76158 2.82201 7.518 3.18733L8.628 3.92733C8.74972 3.74465 8.91466 3.59486 9.10818 3.49123C9.30171 3.38761 9.51782 3.33337 9.73733 3.33333V2ZM4 12.6667C3.82319 12.6667 3.65362 12.5964 3.5286 12.4714C3.40357 12.3464 3.33333 12.1768 3.33333 12H2C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14V12.6667Z"
                  fill="#1DA1F2"
                />
                <path d="M5.33325 6.66663V13.3333" stroke="#1DA1F2" />
              </svg>
              <p className="small-regular text-dark400_light700">
                {formatNumber(question.upvotes)} Votes
              </p>
            </div>

            {/* Answers */}
            <div className="flex items-center gap-0.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M8.25 12.5C9.09057 12.5 9.91226 12.2507 10.6112 11.7837C11.3101 11.3168 11.8548 10.653 12.1765 9.87641C12.4982 9.09982 12.5823 8.24529 12.4183 7.42087C12.2543 6.59645 11.8496 5.83917 11.2552 5.2448C10.6608 4.65042 9.90355 4.24565 9.07913 4.08166C8.25471 3.91768 7.40018 4.00184 6.6236 4.32351C5.84701 4.64519 5.18325 5.18992 4.71625 5.88883C4.24926 6.58774 4 7.40943 4 8.25C4 8.95267 4.17 9.6152 4.47222 10.1989L4 12.5L6.30114 12.0278C6.88481 12.33 7.54781 12.5 8.25 12.5Z"
                  stroke="#1DA1F2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="small-regular text-dark400_light700">
                {formatNumber(question.answers.length)} Answers
              </p>
            </div>

            {/* Views */}
            <div className="flex items-center gap-0.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M15.47 7.83C14.882 6.30882 13.861 4.99331 12.5334 4.04604C11.2058 3.09878 9.62977 2.56129 8.00003 2.5C6.37029 2.56129 4.79423 3.09878 3.46663 4.04604C2.13904 4.99331 1.11811 6.30882 0.530031 7.83C0.490315 7.93985 0.490315 8.06015 0.530031 8.17C1.11811 9.69118 2.13904 11.0067 3.46663 11.954C4.79423 12.9012 6.37029 13.4387 8.00003 13.5C9.62977 13.4387 11.2058 12.9012 12.5334 11.954C13.861 11.0067 14.882 9.69118 15.47 8.17C15.5097 8.06015 15.5097 7.93985 15.47 7.83ZM8.00003 12.5C5.35003 12.5 2.55003 10.535 1.53503 8C2.55003 5.465 5.35003 3.5 8.00003 3.5C10.65 3.5 13.45 5.465 14.465 8C13.45 10.535 10.65 12.5 8.00003 12.5Z"
                  fill="#1DA1F2"
                />
                <path
                  d="M8 5C7.40666 5 6.82664 5.17595 6.33329 5.50559C5.83994 5.83524 5.45543 6.30377 5.22836 6.85195C5.0013 7.40013 4.94189 8.00333 5.05765 8.58527C5.1734 9.16721 5.45912 9.70176 5.87868 10.1213C6.29824 10.5409 6.83279 10.8266 7.41473 10.9424C7.99667 11.0581 8.59987 10.9987 9.14805 10.7716C9.69623 10.5446 10.1648 10.1601 10.4944 9.66671C10.8241 9.17336 11 8.59334 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79565 5 8 5ZM8 10C7.60444 10 7.21776 9.8827 6.88886 9.66294C6.55996 9.44318 6.30362 9.13082 6.15224 8.76537C6.00087 8.39991 5.96126 7.99778 6.03843 7.60982C6.1156 7.22186 6.30608 6.86549 6.58579 6.58579C6.86549 6.30608 7.22186 6.1156 7.60982 6.03843C7.99778 5.96126 8.39992 6.00087 8.76537 6.15224C9.13082 6.30362 9.44318 6.55996 9.66294 6.88886C9.8827 7.21776 10 7.60444 10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10Z"
                  fill="#1DA1F2"
                />
              </svg>
              <p className="small-regular text-dark400_light700">
                {formatNumber(question.views)} Views
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
