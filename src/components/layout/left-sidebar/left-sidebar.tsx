import HotQuestionsSection from "./hot-questions-section";
import PopularTagsSection from "./popular-tags-section";

export default function LeftSidebar() {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar max-xl-hidden sticky left-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="flex w-full flex-col gap-[30px]">
        <HotQuestionsSection />
      </div>
      <div className="mt-16">
        <PopularTagsSection />
      </div>
    </section>
  );
}
