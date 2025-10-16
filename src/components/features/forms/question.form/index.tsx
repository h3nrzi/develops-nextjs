"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionState, useEffect, useMemo, startTransition } from "react";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  createQuestionSchema,
  type CreateQuestionInput,
} from "@/lib/schemas/question.schema";
import { createQuestionAction } from "@/lib/actions/question.actions";

import { TitleField } from "./title-field";
import { ExplanationField } from "./explanation-field";
import { TagsField } from "./tags-field";

function QuestionForm() {
  const defaultValues = useMemo(
    () => ({ title: "", explanation: "", tags: [] }),
    [],
  );
  const form = useForm<CreateQuestionInput>({
    resolver: zodResolver(createQuestionSchema),
    defaultValues,
  });

  const initState = { success: false, message: "" };
  const [state, formAction, isPending] = useActionState(
    createQuestionAction,
    initState,
  );

  const onSubmit = (values: CreateQuestionInput) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(values));
    return formData;
  };

  useEffect(() => {
    if (state.success) {
      form.reset();
    }
  }, [state.success, form]);

  return (
    <Form {...form}>
      <form
        action={formAction}
        onSubmit={(e) => {
          e.preventDefault();
          const values = form.getValues();
          form.trigger().then((isValid) => {
            if (isValid) {
              startTransition(() => {
                const formData = new FormData();
                formData.append("data", JSON.stringify(values));
                formAction(formData);
              });
            }
          });
        }}
        className="flex w-full flex-col gap-[4rem]"
      >
        <TitleField control={form.control} />
        <ExplanationField control={form.control} />
        <TagsField form={form} />
        <Button type="submit" disabled={isPending}>
          {isPending ? "در حال ارسال..." : "ارسال سوال"}
        </Button>
        {state.message && (
          <p className={state.success ? "text-green-600" : "text-red-600"}>
            {state.message}
          </p>
        )}
      </form>
    </Form>
  );
}

export default QuestionForm;
