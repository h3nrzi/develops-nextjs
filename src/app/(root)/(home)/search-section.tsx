import Filter from "@/components/features/filter";
import LocalSearchbar from "@/components/features/local-searchbar";
import { HomePageFilters } from "@/constants/filters";

export default function SearchSection() {
  return (
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
  );
}
