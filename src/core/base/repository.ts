import { PrismaClient } from "@prisma/client";

import { DatabaseError } from "../errors";
import { getPrisma } from "../prisma-client";

export abstract class BaseRepository<T> {
  protected prisma: PrismaClient;

  constructor() {
    this.prisma = getPrisma();
  }

  protected async handleDatabaseOperation<R>(
    operation: () => Promise<R>,
  ): Promise<R> {
    try {
      return await operation();
    } catch (error) {
      throw new DatabaseError(
        error instanceof Error ? error.message : "Unknown database error",
      );
    }
  }
}
