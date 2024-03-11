// /prisma/seed.js
// fra: https://fullstækk.no/courses/next-mvc-orm/06-seeding

import { User } from "@/features/users/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Users: User[] = [
  { email: "sarah@sunnaas.no", name: "Sarah", role: "healthcare", password: "password" },
];





const createUsers = async () => {
  const userPromises = Users.map(async (user, index) => {
    await prisma.user.upsert({
      where: {email: user.email},
      update: {},
      create: {
        email: user.email,
        Name: user.name,
        Role: user.role,
        Password: user.password
      }
    })
  });
  console.log(userPromises);
  await Promise.all(userPromises);
};

// Seed funksjoner

async function main() {
  console.log(`Start seeding ...`);
  await createUsers();
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });