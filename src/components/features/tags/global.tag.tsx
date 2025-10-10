import Link from "next/link";
import React from "react";

import { Badge } from "../../ui/badge";

interface Props {
  id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

export default function GlobalTag({
  id,
  name,
  totalQuestions,
  showCount,
}: Props) {
  return (
    <Link href={`/tags/${id}`} className="flex justify-between">
      {showCount && (
        <p className="small-medium text-dark500_light700 self-center">
          {totalQuestions}
        </p>
      )}
      <Badge className="subtle-medium background-light800_dark300 text-dark500_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>
    </Link>
  );
}
