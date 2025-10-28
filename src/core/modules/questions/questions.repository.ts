import { injectable } from "tsyringe";

import { BaseRepository } from "../../base/repository";
import { NotFoundError } from "../../errors";

import {
  CreateQuestionDto,
  QuestionWithRelations,
  UpdateQuestionDto,
} from "./questions.model";

@injectable()
export class QuestionsRepository extends BaseRepository<QuestionWithRelations> {
  async findAll(): Promise<QuestionWithRelations[]> {
    return this.prisma.question.findMany({
      include: {
        author: true,
        tags: { include: { tag: true } },
        answers: { include: { author: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async findById(id: number): Promise<QuestionWithRelations> {
    const question = await this.handleDatabaseOperation(() =>
      this.prisma.question.findUnique({
        where: { id },
        include: {
          author: true,
          tags: { include: { tag: true } },
          answers: { include: { author: true } },
        },
      }),
    );

    if (!question) {
      throw new NotFoundError("Question", id);
    }

    return question;
  }

  async create(data: CreateQuestionDto): Promise<QuestionWithRelations> {
    const authorIdNum = data.authorId.length > 10 ? 
      Math.abs(data.authorId.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) :
      parseInt(data.authorId);

    // First ensure user exists
    const user = await this.prisma.user.upsert({
      where: { id: authorIdNum },
      update: {},
      create: {
        id: authorIdNum,
        name: "User",
        picture: "",
      },
    });

    return this.prisma.question.create({
      data: {
        title: data.title,
        content: data.explanation,
        authorId: user.id,
        tags: {
          create: data.tags.map((tagName: string) => ({
            tag: {
              connectOrCreate: {
                where: { name: tagName },
                create: { name: tagName },
              },
            },
          })),
        },
      },
      include: {
        author: true,
        tags: { include: { tag: true } },
        answers: { include: { author: true } },
      },
    });
  }

  async update(
    id: number,
    data: UpdateQuestionDto,
  ): Promise<QuestionWithRelations | null> {
    return this.prisma.question.update({
      where: { id },
      data: {
        ...(data.title && { title: data.title }),
        ...(data.explanation && { content: data.explanation }),
        ...(data.tags && {
          tags: {
            deleteMany: {},
            create: data.tags.map((tagName) => ({
              tag: {
                connectOrCreate: {
                  where: { name: tagName },
                  create: { name: tagName },
                },
              },
            })),
          },
        }),
      },
      include: {
        author: true,
        tags: { include: { tag: true } },
        answers: { include: { author: true } },
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.question.delete({
      where: { id },
    });
  }

  async incrementViews(id: number): Promise<void> {
    await this.prisma.question.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  }
}
