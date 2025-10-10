import MobileFilter from "@/components/features/filters/mobile.filter";
import LocalSearch from "@/components/features/searches/local.search";
import { HomePageFilters } from "@/constants/filters";

export default function SearchSection() {
  return (
    <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
      <LocalSearch
        route="/"
        iconPosition="right"
        imgSrc="/assets/icons/search.svg"
        placeholder="سوال مورد نظر خود را جستجو کنید"
        className="flex-1"
      />
      <MobileFilter
        filters={HomePageFilters}
        className="min-h-[56px] sm:min-w-[170px]"
        containerClassName="hidden max-lg:flex"
      />
    </div>
  );
}
