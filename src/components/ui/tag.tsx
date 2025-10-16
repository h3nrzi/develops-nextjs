import Image from "next/image";

interface TagProps {
  children: React.ReactNode;
  onRemove?: () => void;
}

export function Tag({ children, onRemove }: TagProps) {
  return (
    <span className="text-dark300_light700 inline-flex items-center gap-2 rounded-md bg-light-800 px-2.5 py-1 text-sm dark:bg-dark-300">
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="text-dark400_light500 hover:text-dark300_light700"
        >
          <Image
            src="/assets/icons/close.svg"
            alt="close btn"
            width={12}
            height={12}
            className="cursor-pointer object-contain invert-0 dark:invert"
          />
        </button>
      )}
      {children}
    </span>
  );
}
