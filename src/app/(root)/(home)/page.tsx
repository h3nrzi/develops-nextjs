import Link from "next/link";

import Filter from "@/components/features/filter";
import LocalSearchbar from "@/components/features/local-searchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">تمام سوالات</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            سوال بپرسید
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="right"
          imgSrc="/assets/icons/search.svg"
          placeholder="سوال مورد نظر خود را جستجو کنید"
          className="flex-1"
        />
        <div>
          <Filter
            filters={HomePageFilters}
            className="min-h-[56px] sm:min-w-[170px]"
            containerClassName="hidden max-md:flex"
          />
        </div>
      </div>
    </>
  );
}
