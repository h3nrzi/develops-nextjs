import { Author, Question, QuestionTag } from "@/types/Question";

const tags: QuestionTag[] = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "React" },
  { id: 4, name: "NestJS" },
  { id: 5, name: "Node.js" },
];

const authors: Author[] = [
  {
    id: 1,
    name: "حسین رضایی",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "سارا مجیدی",
    picture: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "داود کریمی",
    picture: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];
export const questions: Question[] = [
  {
    id: 1,
    title:
      "چگونه می‌توانم تزریق وابستگی را در NestJS با ارائه‌دهنده‌های سفارشی مدیریت کنم؟",
    tags: [tags[3], tags[1], tags[4]],
    author: authors[0],
    upvotes: 56,
    views: 1290,
    answers: [
      {
        id: 1,
        author: authors[1],
        content:
          "می‌توانید ارائه‌دهنده‌های سفارشی را با استفاده از سینتکس `useClass` تعریف کنید.",
      },
      {
        id: 2,
        author: authors[2],
        content:
          "استفاده از دکوراتور `@Injectable()` را برای مدیریت بهتر DI در نظر بگیرید.",
      },
    ],
    createdAt: new Date("2025-09-22T10:15:00Z"),
  },
  {
    id: 2,
    title: "تفاوت بین `type` و `interface` در TypeScript چیست؟",
    tags: [tags[1], tags[0]],
    author: authors[1],
    upvotes: 89,
    views: 2000000,
    answers: [
      {
        id: 1,
        author: authors[0],
        content:
          "`type` انعطاف‌پذیرتر است، در حالی که `interface` قابل گسترش است.",
      },
    ],
    createdAt: new Date("2025-09-25T08:30:00Z"),
  },
  {
    id: 3,
    title: "چگونه کامپوننت‌ های React را برای عملکرد بهتر بهینه کنم؟",
    tags: [tags[2], tags[0]],
    author: authors[2],
    upvotes: 42,
    views: 945,
    answers: [],
    createdAt: new Date("2025-10-01T14:20:00Z"),
  },
  {
    id: 4,
    title:
      "چرا هنگام وارد کردن فایل‌های محلی در Node.js خطای 'Cannot find module' دریافت می‌کنم؟",
    tags: [tags[4], tags[0]],
    author: authors[0],
    upvotes: 31,
    views: 778,
    answers: [
      {
        id: 1,
        author: authors[2],
        content:
          "مطمئن شوید که مسیرهای import شما نسبی هستند و در حالت ESM پسوند صحیح را شامل می‌شوند.",
      },
    ],
    createdAt: new Date("2025-10-03T12:10:00Z"),
  },
];
