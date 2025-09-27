import Image from "next/image";
import Link from "next/link";

const hotQuestions = [
  {
    id: 1,
    title: "چگونه از express به عنوان سرور سفارشی در next.js استفاده کنم؟",
  },
  {
    id: 2,
    title:
      "چگونه پروفایل کاربر منحصر به فرد را با ON CONFLICT در PostgreSQL با استفاده از Drizzle ORM تضمین کنم؟",
  },
  {
    id: 3,
    title:
      "مزایا و معایب استفاده از Server-Side Rendering (SSR) در Next.js چیست؟",
  },
  {
    id: 4,
    title: "بهترین روش برای مدیریت state در React چیست؟",
  },
];

export default function LeftSidebar() {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar max-xl-hidden sticky left-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden">
      <div className="h3-bold text-dark200_light900">سوالات پربازدید</div>
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {hotQuestions.map((question) => {
          return (
            <Link
              href={`/questions/${question.id}`}
              key={question.id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors rotate-180"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
