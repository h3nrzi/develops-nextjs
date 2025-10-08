import Link from "next/link";

import Filter from "@/components/features/filter";
import LocalSearchbar from "@/components/features/local-searchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import HomeFilers from "@/components/features/home-filters";
import { questions } from "@/data/questions";
import NoResult from "@/components/features/no-result";

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
        <Filter
          filters={HomePageFilters}
          className="min-h-[56px] sm:min-w-[170px]"
          containerClassName="hidden max-lg:flex"
        />
      </div>

      <HomeFilers />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => <div key={question.id}>QuestionCard</div>)
        ) : (
          <NoResult
            title="هنوز سوالی مطرح نشده است."
            description="اولین نفر باشید که سکوت را بشکند! 🚀 سوالتان را بپرسید و گفتگو را آغاز کنید. ممکن است سوال شما همان چیزی باشد که دیگران به دنبالش هستند. همین حالا شروع کنید! 🎯"
            link="/ask-question"
            linkTitle="طرح سوال"
          />
        )}
      </div>
    </>
  );
}
