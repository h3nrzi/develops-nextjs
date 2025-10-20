import { NextRequest, NextResponse } from "next/server";
import { container } from "tsyringe";

import { registerModules } from "@/core/container";
import { AppError, NotFoundError } from "@/core/errors";
import { QuestionsFactory } from "@/core/modules/questions/questions.factory";
import { ValidationService } from "@/core/services/validation.service";
import { updateQuestionSchema } from "@/lib/schemas/question.schema";

registerModules();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: idStr } = await params;
    const id = parseInt(idStr);
    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid question ID" },
        { status: 400 },
      );
    }

    const controller = QuestionsFactory.create();
    const question = await controller.getQuestion(id);

    return NextResponse.json({ success: true, data: question });
  } catch (error) {
    if (error instanceof NotFoundError) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 404 },
      );
    }

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

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: idStr } = await params;
    const id = parseInt(idStr);
    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid question ID" },
        { status: 400 },
      );
    }

    const body = await request.json();
    const validationService =
      container.resolve<ValidationService>("ValidationService");
    const validationResult = validationService.validate(
      updateQuestionSchema,
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
    const question = await controller.updateQuestion(
      id,
      validationResult.value,
    );

    return NextResponse.json({ success: true, data: question });
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: idStr } = await params;
    const id = parseInt(idStr);
    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid question ID" },
        { status: 400 },
      );
    }

    const controller = QuestionsFactory.create();
    await controller.deleteQuestion(id);

    return NextResponse.json({ success: true, message: "Question deleted" });
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
