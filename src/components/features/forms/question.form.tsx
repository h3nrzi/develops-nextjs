"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Editor } from "@/components/ui/editor";
import {
  createQuestionSchema,
  type CreateQuestionInput,
} from "@/lib/schemas/question.schema";

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
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                عنوان سوال <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  placeholder="سوال خود را بپرسید..."
                  {...field}
                />
              </FormControl>
              <div className="relative mt-2.5">
                <FormDescription className="body-regular text-light-500">
                  عنوان سوال خود را به صورت واضح و مختصر بنویسید تا دیگران
                  بتوانند به راحتی آن را درک کنند.
                </FormDescription>
                <FormMessage className="body-regular absolute inset-0 top-7 text-red-400" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                محتوای سوال <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Editor
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="جزئیات سوال خود را شرح دهید..."
                  className="no-focus paragraph-regular"
                />
              </FormControl>
              <div className="relative mt-2.5">
                <FormDescription className="body-regular text-light-500">
                  جزئیات کامل سوال خود را توضیح دهید. هرچه توضیحات بیشتر باشد،
                  پاسخ بهتری دریافت خواهید کرد.
                </FormDescription>
                <FormMessage className="body-regular absolute inset-0 top-7 text-red-400" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                تگ‌ها <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  placeholder="برای سوال تگ اضافه کنید"
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  value={field.value.join(", ")}
                  onChange={(e) =>
                    field.onChange(
                      e.target.value.split(",").map((tag) => tag.trim()).filter(Boolean),
                    )
                  }
                />
              </FormControl>
              <div className="relative mt-2.5">
                <FormDescription className="body-regular text-light-500">
                  حداقل ۱ و حداکثر ۵ تگ مرتبط با سوال خود انتخاب کنید تا دیگران
                  راحتتر آن را پیدا کنند.
                </FormDescription>
                <FormMessage className="body-regular absolute inset-0 top-7 text-red-400" />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">ارسال سوال</Button>
      </form>
    </Form>
  );
}

export default QuestionForm;
