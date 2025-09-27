import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "روشن", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "تاریک", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "سیستم", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "خانه",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "انجمن",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "مجموعه‌ها",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "یافتن شغل",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "برچسب‌ها",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "پروفایل",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "پرسش جدید",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
