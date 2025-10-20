import { PrismaClient } from "@prisma/client";

declare global {
  var __prisma: PrismaClient | undefined;
}

export function getPrisma(): PrismaClient {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  }

  // reuse client in dev to avoid too many instances
  if (!global.__prisma) {
    global.__prisma = new PrismaClient();
  }

  return global.__prisma;
}
