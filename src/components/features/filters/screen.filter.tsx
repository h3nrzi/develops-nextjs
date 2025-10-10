"use client";

import { HomePageFilters } from "@/constants/filters";
import { Button } from "@/components/ui/button";

export default function ScreenFilter() {
  const active = "newest";

  return (
    <div className="mt-10 hidden flex-wrap gap-3 lg:flex">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 shadow-none ${
            active === filter.value
              ? "dark:primary-gradient bg-primary-100 text-primary-500 dark:text-primary-100"
              : "dark:hover:primary-gradient bg-light-800 text-light-500 hover:bg-primary-100 hover:text-primary-500 dark:bg-dark-300 dark:text-light-800 dark:hover:text-primary-100"
          }`}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
}
