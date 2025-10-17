"use server";

import {
  createQuestionSchema,
  CreateQuestionInput,
  updateQuestionSchema,
  UpdateQuestionInput,
} from "@/lib/schemas/question.schema";

export async function createQuestion(data: CreateQuestionInput) {
  try {
    // Validate with schema
    const validatedData = createQuestionSchema.parse(data);

    // TODO: Add database logic here
    console.log("Creating question:", validatedData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      type: "create",
      success: true,
      message: "سوال با موفقیت ایجاد شد",
    };
  } catch (error) {
    console.error("Error creating question:", error);
    return {
      type: "create",
      success: false,
      message: "خطا در ایجاد سوال",
    };
  }
}

export async function updateQuestion(
  questionId: string,
  data: UpdateQuestionInput,
) {
  try {
    // Validate with schema
    const validatedData = updateQuestionSchema.parse(data);

    // TODO: Add database logic here
    console.log("Updating question:", questionId, validatedData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      type: "edit",
      success: true,
      message: "سوال با موفقیت بروزرسانی شد",
    };
  } catch (error) {
    console.error("Error updating question:", error);
    return {
      type: "edit",
      success: false,
      message: "خطا در بروزرسانی سوال",
    };
  }
}
