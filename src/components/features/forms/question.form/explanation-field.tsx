import { Control } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Editor } from "@/components/ui/editor";
import { CreateQuestionInput } from "@/lib/schemas/question.schema";

interface ExplanationFieldProps {
  control: Control<CreateQuestionInput>;
}

export function ExplanationField({ control }: ExplanationFieldProps) {
  return (
    <FormField
      control={control}
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
              className="no-focus paragraph-regular w-full"
            />
          </FormControl>
          <div className="relative mt-2.5">
            <FormDescription className="body-regular text-light-500">
              جزئیات کامل سوال خود را توضیح دهید. هرچه توضیحات بیشتر باشد، پاسخ
              بهتری دریافت خواهید کرد.
            </FormDescription>
            <FormMessage className="body-regular absolute inset-0 top-7 text-red-400" />
          </div>
        </FormItem>
      )}
    />
  );
}
