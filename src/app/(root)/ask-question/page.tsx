import QuestionForm from "@/components/features/forms/question.form";
import { questionsService } from "@/services/questions.service";

async function AskQuestionPage() {
  const questions = await questionsService.getAll().catch(() => []);

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">یک سوال بپرسید</h1>
      <div className="mt-9">
        <QuestionForm mode="create" />
      </div>
      <div className="mt-9">
        {questions.map((question: any, index: number) => (
          <div key={index} className="mb-4 rounded border p-4">
            <h3>{question.title}</h3>
            <p>{question.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AskQuestionPage;
