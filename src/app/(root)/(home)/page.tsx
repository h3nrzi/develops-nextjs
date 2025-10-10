import HomeFilers from "@/components/features/home-filters";

import PageHeader from "./page-header";
import SearchSection from "./search-section";
import QuestionsList from "./questions-list";

export default function Home() {
  return (
    <>
      <PageHeader />
      <SearchSection />
      <HomeFilers />
      <QuestionsList />
    </>
  );
}
