"use server";

import { authenticatedHttpClient, HttpClientError } from "@/lib/http-client";
import {
  CreateQuestionInput,
  UpdateQuestionInput,
} from "@/lib/schemas/question.schema";

export async function createQuestion(data: CreateQuestionInput) {
  try {
    const result = await authenticatedHttpClient.post("/api/questions", data);

    return {
      type: "create",
      success: true,
      message: "سوال با موفقیت ایجاد شد",
      data: result,
    };
  } catch (error) {
    console.error("Error creating question:", error);

    if (error instanceof HttpClientError) {
      return {
        type: "create",
        success: false,
        message: error.message,
      };
    }

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
    const result = await authenticatedHttpClient.put(
      `/api/questions/${questionId}`,
      data,
    );

    return {
      type: "edit",
      success: true,
      message: "سوال با موفقیت بروزرسانی شد",
      data: result,
    };
  } catch (error) {
    console.error("Error updating question:", error);

    if (error instanceof HttpClientError) {
      return {
        type: "edit",
        success: false,
        message: error.message,
      };
    }

    return {
      type: "edit",
      success: false,
      message: "خطا در بروزرسانی سوال",
    };
  }
}
