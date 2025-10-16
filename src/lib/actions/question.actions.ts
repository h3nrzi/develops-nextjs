"use server";

import {
  createQuestionSchema,
  CreateQuestionInput,
} from "@/lib/schemas/question.schema";

type ActionState = {
  success: boolean;
  message: string;
};

export async function createQuestionAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    const rawData = formData.get("data") as string;
    const data: CreateQuestionInput = JSON.parse(rawData);

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
