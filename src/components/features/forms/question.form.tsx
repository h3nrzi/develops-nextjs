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
import { Textarea } from "@/components/ui/textarea";
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
        className="flex w-full flex-col gap-10"
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
                  className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  placeholder="سوال خود را بپرسید..."
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                عنوان سوال خود را به صورت واضح و مختصر بنویسید تا دیگران بتوانند
                به راحتی آن را درک کنند.
              </FormDescription>
              <FormMessage className="text-red-400" />
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
              <FormControl>
                <Textarea
                  className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[200px] border"
                  placeholder="جزئیات سوال خود را شرح دهید..."
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                جزئیات کامل سوال خود را توضیح دهید. هرچه توضیحات بیشتر باشد،
                پاسخ بهتری دریافت خواهید کرد.
              </FormDescription>
              <FormMessage className="text-red-400" />
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
              <FormControl>
                <Input
                  placeholder="برای سوال تگ اضافه کنید"
                  {...field}
                  className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  value={field.value.join(",")}
                  onChange={(e) =>
                    field.onChange(
                      e.target.value.split(",").map(Number).filter(Boolean),
                    )
                  }
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                حداقل ۱ و حداکثر ۵ تگ مرتبط با سوال خود انتخاب کنید تا دیگران
                راحتتر آن را پیدا کنند.
              </FormDescription>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <Button type="submit">ارسال سوال</Button>
      </form>
    </Form>
  );
}

export default QuestionForm;
