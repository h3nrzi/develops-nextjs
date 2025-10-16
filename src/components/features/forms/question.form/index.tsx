"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  createQuestionSchema,
  type CreateQuestionInput,
} from "@/lib/schemas/question.schema";
import { createQuestion } from "@/lib/actions/question.actions";

import { TitleField } from "./title-field";
import { ExplanationField } from "./explanation-field";
import { TagsField } from "./tags-field";

function QuestionForm() {
  const form = useForm<CreateQuestionInput>({
    resolver: zodResolver(createQuestionSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (values: CreateQuestionInput) => {
    setIsSubmitting(true);
    setMessage("");

    try {
      const result = await createQuestion(values);
      if (result.success) {
        form.reset();
        form.clearErrors();
        setMessage(result.message);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage("خطا در ارسال سوال");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-[4rem]"
      >
        <TitleField control={form.control} />
        <ExplanationField control={form.control} />
        <TagsField form={form} />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "در حال ارسال..." : "ارسال سوال"}
        </Button>
        {message && <p className="text-green-600">{message}</p>}
      </form>
    </Form>
  );
}

export default QuestionForm;
