"use client";

import Image from "next/image";

import { Input } from "../../ui/input";

interface Props {
  route: string;
  iconPosition: "left" | "right";
  imgSrc: string;
  placeholder: string;
  className: string;
}

export default function LocalSearch({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  className,
}: Props) {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${className}`}
    >
      {iconPosition === "right" && (
        <Image src={imgSrc} alt="search icon" width={24} height={24} />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none bg-transparent shadow-none outline-none placeholder:text-sm dark:caret-white lg:placeholder:text-base"
      />
      {iconPosition === "left" && (
        <Image src={imgSrc} alt="search icon" width={24} height={24} />
      )}
    </div>
  );
}
