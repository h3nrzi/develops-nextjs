"use client";

import Image from "next/image";

import { Input } from "@/components/ui/input";

export default function GlobalSearch() {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] items-center gap-1 rounded-xl px-4">
        <Input
          type="text"
          placeholder="جستجوی سراسری"
          value="abc"
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none bg-transparent shadow-none outline-none dark:caret-white"
          onChange={() => {}}
        />
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
