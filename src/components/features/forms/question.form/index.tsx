"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  createQuestionSchema,
  type CreateQuestionInput,
} from "@/lib/schemas/question.schema";

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

  const onSubmit = (values: CreateQuestionInput) => {
    console.log(values);
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
        <Button type="submit">ارسال سوال</Button>
      </form>
    </Form>
  );
}

export default QuestionForm;
