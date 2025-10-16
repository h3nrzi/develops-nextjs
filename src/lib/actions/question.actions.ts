"use server";

import {
  createQuestionSchema,
  CreateQuestionInput,
} from "@/lib/schemas/question.schema";

export async function createQuestion(data: CreateQuestionInput) {
  try {
    // Validate with schema
    const validatedData = createQuestionSchema.parse(data);

    // TODO: Add database logic here
    console.log("Creating question:", validatedData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, message: "سوال با موفقیت ایجاد شد" };
  } catch (error) {
    console.error("Error creating question:", error);
    return { success: false, message: "خطا در ایجاد سوال" };
  }
}
