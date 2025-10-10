import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter as FilterType } from "@/types/Filter";

interface Props {
  filters: FilterType[];
  className?: string;
  containerClassName?: string;
}

export default function MobileFilter({
  filters,
  className,
  containerClassName,
}: Props) {
  return (
    <div className={`relative ${containerClassName}`}>
      <Select>
        <SelectTrigger
          className={`${className} body-regular light-border background-light800_dark300 text-dark500_light700 border px-7 py-2.5`}
        >
          <div className="line-clamp-1 flex-1">
            <SelectValue placeholder="فیلتر براساس ..." />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((filter) => (
              <SelectItem
                key={filter.name}
                value={filter.value}
                className="dark:hover:primary-gradient cursor-pointer bg-light-800 text-light-500 hover:bg-primary-100 hover:text-primary-500 dark:bg-dark-300 dark:text-light-800 dark:hover:text-primary-100"
              >
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
