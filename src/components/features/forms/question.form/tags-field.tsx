import { KeyboardEvent, useState } from "react";
import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tag } from "@/components/ui/tag";
import { CreateQuestionInput } from "@/lib/schemas/question.schema";

interface TagsFieldProps {
  form: UseFormReturn<CreateQuestionInput>;
}

export function TagsField({ form }: TagsFieldProps) {
  const [tagInput, setTagInput] = useState("");

  const handleTagKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    e.preventDefault();
    const tagValue = tagInput.trim();

    if (!tagValue) return form.trigger();

    if (tagValue.length > 15) {
      return form.setError("tags", {
        type: "validation",
        message: "تگ باید کمتر از ۱۵ کاراکتر باشد",
      });
    }

    const currentTags = form.getValues("tags");
    if (currentTags.includes(tagValue)) return;

    form.setValue("tags", [...currentTags, tagValue]);
    setTagInput("");
    form.clearErrors("tags");
  };

  const removeTag = (tagToRemove: string) => {
    const currentTags = form.getValues("tags");
    form.setValue(
      "tags",
      currentTags.filter((tag) => tag !== tagToRemove),
    );
  };

  return (
    <FormField
      control={form.control}
      name="tags"
      render={({ field }) => (
        <FormItem className="flex w-full flex-col">
          <FormLabel className="paragraph-semibold text-dark400_light800">
            تگ ها <span className="text-primary-500">*</span>
          </FormLabel>
          <FormControl className="mt-3.5">
            <div>
              <Input
                placeholder="برای سوال تگ اضافه کنید"
                className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
              />
              {field.value.length > 0 && (
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {field.value.map((tag) => (
                    <Tag key={tag} onRemove={() => removeTag(tag)}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              )}
            </div>
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
  );
}
