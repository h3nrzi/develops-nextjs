import Tag from "@/components/features/tag";

interface PopularTag {
  id: string;
  name: string;
  totalQuestions: number;
}

const popularTags: PopularTag[] = [
  { id: "1", name: "javascript", totalQuestions: 5 },
  { id: "2", name: "typescript", totalQuestions: 15 },
  { id: "3", name: "react", totalQuestions: 2 },
  { id: "4", name: "next.js", totalQuestions: 8 },
  { id: "5", name: "node.js", totalQuestions: 3 },
];

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