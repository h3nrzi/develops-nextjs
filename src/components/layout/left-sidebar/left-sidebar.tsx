import Image from "next/image";
import Link from "next/link";

import Tag from "@/components/features/tag";

/**
 * Type definitions for sidebar data
 */
interface HotQuestion {
  id: string;
  title: string;
}

interface PopularTag {
  id: string;
  name: string;
  totalQuestions: number;
}

/**
 * Mock data for hot questions - in production, this would come from an API
 */
const hotQuestions: HotQuestion[] = [
  {
    id: "1",
    title: "چگونه از express به عنوان سرور سفارشی در next.js استفاده کنم؟",
  },
  {
    id: "2",
    title:
      "چگونه پروفایل کاربر منحصر به فرد را با ON CONFLICT در PostgreSQL با استفاده از Drizzle ORM تضمین کنم؟",
  },
  {
    id: "3",
    title:
      "مزایا و معایب استفاده از Server-Side Rendering (SSR) در Next.js چیست؟",
  },
  {
    id: "4",
    title: "بهترین روش برای مدیریت state در React چیست؟",
  },
];

/**
 * Mock data for popular tags - in production, this would come from an API
 */
const popularTags: PopularTag[] = [
  { id: "1", name: "javascript", totalQuestions: 5 },
  { id: "2", name: "typescript", totalQuestions: 15 },
  { id: "3", name: "react", totalQuestions: 2 },
  { id: "4", name: "next.js", totalQuestions: 8 },
  { id: "5", name: "node.js", totalQuestions: 3 },
];

/**
 * Renders a question link with title and navigation arrow
 */
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

/**
 * Left sidebar component displaying hot questions and popular tags
 * Sticky positioned sidebar with responsive visibility
 */
export default function LeftSidebar() {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar max-xl-hidden sticky left-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden">
      {/* Hot Questions Section */}
      <div className="flex w-full flex-col gap-[30px]">
        <h3 className="h3-bold text-dark200_light900">سوالات پربازدید</h3>
        <div className="flex flex-col gap-4">
          {hotQuestions.map((question) => (
            <QuestionLink key={question.id} question={question} />
          ))}
        </div>
      </div>

      {/* Popular Tags Section */}
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">برچسب های پراستفاده</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <Tag
              key={tag.id}
              id={tag.id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
}
