"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
      content: "",
      tags: [],
    },
  });

  const onSubmit = (values: CreateQuestionInput) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>عنوان سوال</FormLabel>
              <FormControl>
                <Input placeholder="سوال خود را بپرسید..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>محتوای سوال</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="جزئیات سوال خود را شرح دهید..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>تگ‌ها</FormLabel>
              <FormControl>
                <Input
                  placeholder="1,2,3"
                  {...field}
                  value={field.value.join(",")}
                  onChange={(e) =>
                    field.onChange(
                      e.target.value.split(",").map(Number).filter(Boolean),
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">ارسال سوال</Button>
      </form>
    </Form>
  );
}

export default QuestionForm;
