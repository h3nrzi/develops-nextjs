import { Control } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateQuestionInput } from "@/lib/schemas/question.schema";

interface TitleFieldProps {
  control: Control<CreateQuestionInput>;
}

export function TitleField({ control }: TitleFieldProps) {
  return (
    <FormField
      control={control}
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
              عنوان سوال خود را به صورت واضح و مختصر بنویسید تا دیگران بتوانند
              به راحتی آن را درک کنند.
            </FormDescription>
            <FormMessage className="body-regular absolute inset-0 top-7 text-red-400" />
          </div>
        </FormItem>
      )}
    />
  );
}
