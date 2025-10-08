import Tag from "@/components/features/tag";
import { popularTags } from "@/data/popular-tags";

export interface PopularTag {
  id: string;
  name: string;
  totalQuestions: number;
}

export default function PopularTagsSection() {
  return (
    <>
      <h3 className="h3-bold text-dark200_light900">برچسب های پراستفاده</h3>
      <div className="mt-7 flex flex-col gap-4">
        {popularTags.map((tag) => (
          <Tag
            key={tag.id}
            id={tag.id}
            name={tag.name}
            totalQuestions={tag.totalQuestions}
            showCount
          />
        ))}
      </div>
    </>
  );
}
