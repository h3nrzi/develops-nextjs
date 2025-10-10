import ScreenFilter from "@/components/features/filters/screen.filter";

import PageHeader from "./page-header";
import SearchSection from "./search-section";
import QuestionsList from "./questions-list";

export default function Home() {
  return (
    <>
      <PageHeader />
      <SearchSection />
      <ScreenFilter />
      <QuestionsList />
    </>
  );
}
