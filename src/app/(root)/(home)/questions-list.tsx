import QuestionCard from "@/components/features/cards/question.card";
import NoResult from "@/components/features/no-result";
import { questions } from "@/data/questions";

export default function QuestionsList() {
  return (
    <div className="mt-10 flex w-full flex-col gap-6">
      {questions.length > 0 ? (
        questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))
      ) : (
        <NoResult
          title="هنوز سوالی مطرح نشده است."
          description="اولین نفر باشید که سکوت را بشکند! 🚀 سوالتان را بپرسید و گفتگو را آغاز کنید. ممکن است سوال شما همان چیزی باشد که دیگران به دنبالش هستند. همین حالا شروع کنید! 🎯"
          link="/ask-question"
          linkTitle="طرح سوال"
        />
      )}
    </div>
  );
}
