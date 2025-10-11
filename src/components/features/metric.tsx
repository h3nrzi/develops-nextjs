import Image from "next/image";
import Link from "next/link";

import { Question } from "@/types/Question";
import { formatNumber } from "@/lib/utils/format-number";

interface Props {
  title: string;
  alt: string;
  question: Question;
  isAuthor?: boolean;
  href?: string;
  icon?: string;
  className?: string;
}

interface MetricContentProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  className?: string;
  isAuthor?: boolean;
}

function MetricContent({
  imgUrl,
  alt,
  value,
  title,
  className,
  isAuthor,
}: MetricContentProps) {
  return (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${isAuthor ? "rounded-full" : ""}`}
      />
      <p className={`${className} flex translate-y-[2px] items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );
}

export default function Metric({
  alt,
  question,
  icon,
  title,
  href,
  className,
  isAuthor,
}: Props) {
  const getValue = () => {
    if (isAuthor) return question?.author.name || "";
    if (alt === "upvotes") return formatNumber(question?.upvotes) || 0;
    if (alt === "message") return formatNumber(question?.answers.length) || 0;
    if (alt === "eye") return formatNumber(question?.views) || 0;
    return "";
  };

  return (
    <>
      {isAuthor && href ? (
        <Link href={href} className="flex-center flex-wrap gap-1">
          <MetricContent
            imgUrl={isAuthor ? question?.author.picture || "" : icon || ""}
            alt={alt}
            value={getValue()}
            title={title}
            className={className}
            isAuthor={isAuthor}
          />
        </Link>
      ) : (
        <div className="flex-center flex-wrap gap-1">
          <MetricContent
            imgUrl={isAuthor ? question?.author.picture || "" : icon || ""}
            alt={alt}
            value={getValue()}
            title={title}
            className={className}
            isAuthor={isAuthor}
          />
        </div>
      )}
    </>
  );
}
