import { NextRequest, NextResponse } from "next/server";

import { container, registerModules } from "@/core/container";
import { AppError } from "@/core/errors";
import { QuestionsFactory } from "@/core/modules/questions";
import { ValidationService } from "@/core/services/validation.service";
import { createQuestionSchema } from "@/lib/schemas/question.schema";

registerModules();

export async function GET() {
  try {
    const controller = QuestionsFactory.create();
    const questions = await controller.getQuestions();

    return NextResponse.json({ success: true, data: questions });
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: error.statusCode },
      );
    }

    console.log(error);

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationService =
      container.resolve<ValidationService>("ValidationService");
    const validationResult = validationService.validate(
      createQuestionSchema,
      body,
    );

    if (validationResult.isFailure()) {
      return NextResponse.json(
        {
          success: false,
          error: validationResult.error.message,
        },
        { status: validationResult.error.statusCode },
      );
    }

    const controller = QuestionsFactory.create();
    const question = await controller.createQuestion({
      ...validationResult.value,
      authorId: 1, // TODO: Get from auth context
    });

    return NextResponse.json(
      { success: true, data: question },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: error.statusCode },
      );
    }

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
