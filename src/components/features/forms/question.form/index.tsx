"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { createQuestion, updateQuestion } from "@/lib/actions/question.actions";
import {
  createQuestionSchema,
  type CreateQuestionInput,
} from "@/lib/schemas/question.schema";

import { ExplanationField } from "./explanation-field";
import { TagsField } from "./tags-field";
import { TitleField } from "./title-field";

interface Props {
  mode: "create" | "edit";
  questionId?: string;
  initialValues?: {
    title: string;
    explanation: string;
    tags: string[];
  };
}

function QuestionForm({ mode, questionId, initialValues }: Props) {
  const router = useRouter();

  const form = useForm<CreateQuestionInput>({
    resolver: zodResolver(createQuestionSchema),
    defaultValues: initialValues ?? {
      title: "",
      explanation: "",
      tags: [],
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: CreateQuestionInput) => {
    setIsSubmitting(true);

    try {
      const result =
        mode === "create"
          ? await createQuestion(values)
          : questionId
            ? await updateQuestion(questionId, values)
            : { type: null, success: false, message: "شناسه سوال نامعتبر است" };

      if (!result.success) return toast.error(result.message);

      toast.success(result.message);
      if (mode === "create") router.push("/");
    } catch {
      toast.error("خطا در ارسال سوال");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (initialValues) form.reset(initialValues);
  }, [initialValues, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-[4rem]"
      >
        <TitleField control={form.control} />
        <ExplanationField control={form.control} />
        <TagsField form={form} />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="primary-gradient w-fit !text-light-900"
        >
          {isSubmitting
            ? mode === "create"
              ? "در حال ارسال..."
              : "در حال ویرایش..."
            : mode === "create"
              ? "ارسال سوال"
              : "ویرایش سوال"}
        </Button>
      </form>
    </Form>
  );
}

export default QuestionForm;
