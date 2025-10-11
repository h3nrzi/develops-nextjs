import { z } from "zod";

export const createQuestionSchema = z.object({
  title: z
    .string({ message: "عنوان سوال الزامی است" })
    .min(10, { message: "عنوان سوال باید حداقل ۱۰ کاراکتر باشد" })
    .max(200, { message: "عنوان سوال نباید بیشتر از ۲۰۰ کاراکتر باشد" }),
  content: z
    .string({ message: "محتوای سوال الزامی است" })
    .min(20, { message: "محتوای سوال باید حداقل ۲۰ کاراکتر باشد" }),
  tags: z
    .array(z.number({ message: "شناسه تگ الزامی است" }))
    .min(1, { message: "حداقل یک تگ باید انتخاب شود" })
    .max(5, { message: "حداکثر ۵ تگ میتوانید انتخاب کنید" }),
});

export const updateQuestionSchema = z.object({
  title: z
    .string()
    .min(10, { message: "عنوان سوال باید حداقل ۱۰ کاراکتر باشد" })
    .max(200, { message: "عنوان سوال نباید بیشتر از ۲۰۰ کاراکتر باشد" })
    .optional(),
  content: z
    .string()
    .min(20, { message: "محتوای سوال باید حداقل ۲۰ کاراکتر باشد" })
    .optional(),
  tags: z
    .array(z.number())
    .min(1, { message: "حداقل یک تگ باید انتخاب شود" })
    .max(5, { message: "حداکثر ۵ تگ میتوانید انتخاب کنید" })
    .optional(),
});

export type CreateQuestionInput = z.infer<typeof createQuestionSchema>;
export type UpdateQuestionInput = z.infer<typeof updateQuestionSchema>;
