export default function Loading() {
  return (
    <div className="flex-center fixed inset-0 z-50 bg-light-850/80 backdrop-blur-sm dark:bg-dark-200/80">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-light-700 border-t-primary-500 dark:border-dark-400 dark:border-t-primary-500" />
        <p className="text-dark300_light700">در حال بارگذاری...</p>
      </div>
    </div>
  );
}
