"use client";

import Image from "next/image";

import { Input } from "@/components/ui/input";

export default function GlobalSearch() {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden ml-0 mr-auto sm:mr-0">
      <div className="background-light800_darkgradient relative flex min-h-[56px] items-center gap-1 rounded-xl pl-6 pr-4 sm:pl-12 sm:pr-6">
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
