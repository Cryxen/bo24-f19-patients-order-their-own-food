//From: https://github.com/prisma/blogr-nextjs-prisma/blob/final/lib/prisma.ts
import { PrismaClient } from "@prisma/client";
import { globalPrisma } from "./globals";

// Docs about instantiating `PrismaClient` with Next.js:
// https://pris.ly/d/help/next-js-best-practices


let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!globalPrisma.prisma) {
    globalPrisma.prisma = new PrismaClient();
  }
  prisma = globalPrisma.prisma;
}

export default prisma;