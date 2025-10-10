import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NoResult({
  title,
  description,
  linkTitle,
  link,
}: {
  title: string;
  description: string;
  linkTitle: string;
  link: string;
}) {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="object-fit-fill block dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="object-fit-fill hidden dark:block"
      />
      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>
      <Link href={link}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 !text-light-900 hover:bg-primary-400">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
}
