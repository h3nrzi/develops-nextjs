import QuestionForm from "@/components/features/forms/question.form";

function AskQuestionPage() {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">یک سوال بپرسید</h1>
      <div className="mt-9">
        <QuestionForm mode="create" />
      </div>
    </div>
  );
}

export default AskQuestionPage;
