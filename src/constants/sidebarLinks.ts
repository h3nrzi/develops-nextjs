import { SidebarLink } from "@/types/SidebarLink";

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
