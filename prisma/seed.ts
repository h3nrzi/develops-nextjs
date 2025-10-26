import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      name: "حسین رضایی",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "سارا مجیدی",
      picture: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  });

  // Create tags
  const tag1 = await prisma.tag.create({
    data: { name: "JavaScript" },
  });

  const tag2 = await prisma.tag.create({
    data: { name: "TypeScript" },
  });

  const tag3 = await prisma.tag.create({
    data: { name: "React" },
  });

  // Create question
  const question = await prisma.question.create({
    data: {
      title: "چگونه از TypeScript با React استفاده کنم؟",
      content:
        "میخواهم یاد بگیرم که چطور کامپوننتهای React را با TypeScript تایپ کنم.",
      authorId: user1.id,
      tags: {
        create: [{ tagId: tag2.id }, { tagId: tag3.id }],
      },
    },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
