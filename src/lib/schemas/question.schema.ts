import { z } from "zod";

export const createQuestionSchema = z.object({
  title: z
    .string({ message: "عنوان سوال الزامی است" })
    .min(5, { message: "عنوان سوال باید حداقل ۵ کاراکتر باشد" })
    .max(130, { message: "عنوان سوال نباید بیشتر از ۱۳۰ کاراکتر باشد" }),
  explanation: z
    .string({ message: "محتوای سوال الزامی است" })
    .min(100, { message: "محتوای سوال باید حداقل ۱۰۰ کاراکتر باشد" }),
  tags: z
    .array(
      z
        .string({ message: "شناسه تگ الزامی است" })
        .min(1, { message: "شناسه تگ باید حداقل ۱ کاراکتر باشد" })
        .max(15, { message: "شناسه تگ نباید بیشتر از ۱۵ کاراکتر باشد" }),
    )
    .min(1, { message: "حداقل یک تگ باید انتخاب شود" })
    .max(5, { message: "حداکثر ۵ تگ میتوانید انتخاب کنید" }),
});

export const updateQuestionSchema = z.object({
  title: z
    .string({ message: "عنوان سوال الزامی است" })
    .min(5, { message: "عنوان سوال باید حداقل ۵ کاراکتر باشد" })
    .max(130, { message: "عنوان سوال نباید بیشتر از ۱۳۰ کاراکتر باشد" })
    .optional(),
  explanation: z
    .string({ message: "محتوای سوال الزامی است" })
    .min(100, { message: "محتوای سوال باید حداقل ۱۰۰ کاراکتر باشد" })
    .optional(),
  tags: z
    .array(
      z
        .string({ message: "شناسه تگ الزامی است" })
        .min(1, { message: "شناسه تگ باید حداقل ۱ کاراکتر باشد" })
        .max(15, { message: "شناسه تگ نباید بیشتر از ۱۵ کاراکتر باشد" }),
    )
    .min(1, { message: "حداقل یک تگ باید انتخاب شود" })
    .max(5, { message: "حداکثر ۵ تگ میتوانید انتخاب کنید" })
    .optional(),
});

export type CreateQuestionInput = z.infer<typeof createQuestionSchema>;
export type UpdateQuestionInput = z.infer<typeof updateQuestionSchema>;
