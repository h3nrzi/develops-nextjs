import { Filter } from "@/types/Filter";

interface Props {
  filters: Filter[];
  className?: string;
  containerClassName?: string;
}

export default function Filter({
  filters,
  className,
  containerClassName,
}: Props) {
  return <div className={`relative ${containerClassName}`}></div>;
}
