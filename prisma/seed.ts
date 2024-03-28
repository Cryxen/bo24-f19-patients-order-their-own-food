// /prisma/seed.js
// fra: https://fullstækk.no/courses/next-mvc-orm/06-seeding

import { MainDish, SideDish } from "@/features/meals/types";
import { Room } from "@/features/rooms/types";
import { User } from "@/features/users/types";
import { MealPlan, MealToMealPlan, PrismaClient, Restriction, RoomToRestriction, Meal } from "@prisma/client";

const prisma = new PrismaClient();
const date = new Date()

const DIETARY_RESTRICTIONS = ['gluten free', 'no sodium', 'no pork']

const DIETARY_RESTRICTIONS = ['gluten free', 'no sodium', 'no pork']

const users: User[] = [
  { email: "sarah@sunnaas.no", name: "Sarah", role: "healthcare", password: "password" },
  { email: "karl.gustav@sunnaas.no", name: "Karl Gustav", role: "administrator", password: "password" },
  { email: "carlos@sunnaas.no", name: "Carlos", role: "kitchen", password: "password" },
];

const meals: Meal[] = [
  { mealName: "Stekt kylling", description: "Stekt i smør", category: "chicken", dietaryInfo: null, imageUrl: null },
  { mealName: "Stekt fisk", description: "Stekt i smør", category: "fish", dietaryInfo: null, imageUrl: null },
  { mealName: "Stekt biff", description: "Stekt i smør", category: "red meat", dietaryInfo: null, imageUrl: null },
  { mealName: "Pommes frittes", description: "Frityrstekt i olje", category: "vegetable", dietaryInfo: null, imageUrl: null },
]

const mealPlans: MealPlan[] = [
  { id: 0, date: date.toDateString(), description: "Stekt kylling med pommes frittes", imageUrl: 'TODO' },
  { id: 1, date: date.toDateString(), description: "Stekt fisk med pommes frittes", imageUrl: 'TODO' },
  { id: 2, date: date.toDateString(), description: "Stekt biff med pommes frittes", imageUrl: 'TODO' }
]

const mealToMealPlans: MealToMealPlan[] = [
  { mealIdName: 'Stekt kylling', mealPlanId: 0 },
  { mealIdName: 'Pommes frittes', mealPlanId: 0 },
  { mealIdName: 'Stekt fisk', mealPlanId: 1 },
  { mealIdName: 'Pommes frittes', mealPlanId: 1 },
  { mealIdName: 'Stekt biff', mealPlanId: 2 },
  { mealIdName: 'Pommes frittes', mealPlanId: 2 }
]

const dietaryRestrictions: Restriction[] = [
  { dietaryRestriction: DIETARY_RESTRICTIONS[0] },
  { dietaryRestriction: DIETARY_RESTRICTIONS[1] },
  { dietaryRestriction: DIETARY_RESTRICTIONS[2] }
]

const rooms: Room[] = [
  {roomNumber: 1002},
  {roomNumber: 1003},
  {roomNumber: 1004},
  {roomNumber: 1005}
]

const roomToRestrictions: RoomToRestriction[] = [
  {roomNumber: 1002, dietaryRestriction: DIETARY_RESTRICTIONS[0]},
  {roomNumber: 1002, dietaryRestriction: DIETARY_RESTRICTIONS[1]},
  {roomNumber: 1003, dietaryRestriction: DIETARY_RESTRICTIONS[1]},
  {roomNumber: 1004, dietaryRestriction: DIETARY_RESTRICTIONS[2]}
]

// Function to save users to database
const createUsers = async () => {
  const userPromises = users.map(async (user, index) => {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        email: user.email,
        name: user.name,
        role: user.role,
        password: user.password
      }
    })
  });
  console.log(userPromises);
  await Promise.all(userPromises);
};

// Function to save meals to database
const createMeals = async () => {
  const mealPromises = meals.map(async (meal) => {
    await prisma.meal.upsert({
      where: { mealName: meal.mealName },
      update: {},
      create: {
        mealName: meal.mealName,
        description: meal.description,
        category: meal.category,
        dietaryInfo: meal.dietaryInfo as string,
        imageUrl: meal.imageUrl
      }
    })
  });
  await Promise.all(mealPromises)
}

const createMealPlans = async () => {
  const mealPlanPromises = mealPlans.map(async (mealPlan) => {
    const filteredMealPlans = mealToMealPlans.filter(meal => meal.mealPlanId === mealPlan.id)
    console.log(filteredMealPlans)
    await prisma.mealPlan.upsert({
      where: { id: mealPlan.id },
      update: {},
      create: {
        date: mealPlan.date,
        description: mealPlan.description,
        imageUrl: mealPlan.imageUrl,
        meals: {
          create: [ //TODO: Make a more automatic function
            {
              mealIdName: filteredMealPlans[0].mealIdName
            },
            {
              mealIdName: filteredMealPlans[1].mealIdName
            },
          ]
        }
      }
    })
  })
  await Promise.all(mealPlanPromises)
}

const createRooms = async () => {
  const roomPromises = rooms.map(async (room) => {
    const filteredRestrictions = roomToRestrictions.filter(el => el.roomNumber === room.roomNumber)
    const filteredRestrictionsToCreate = filteredRestrictions.map(el => ({
      dietaryRestriction: el.dietaryRestriction
    }))
    await prisma.room.upsert({
      where: {roomNumber: room.roomNumber},
      update: {},
      create: {
        roomNumber: room.roomNumber,
        restrictions: {
          createMany: 
            ({
              data: filteredRestrictionsToCreate
            })
          // [
          //   {dietaryRestriction: filteredRestrictions[0].dietaryRestriction}
          // ]
        }
      }
    })
  })
}

const createRestrictins = async () => {
  const restrictionPromises = dietaryRestrictions.map(async (restriction) => {
    await prisma.restriction.upsert({
      where: { dietaryRestriction: restriction.dietaryRestriction },
      update: {},
      create: {
        dietaryRestriction: restriction.dietaryRestriction
      }
    })
  })
  await Promise.all(restrictionPromises)
}

// Seed funksjoners

async function main() {
  console.log(`Start seeding ...`);
  await createUsers();
  await createMeals();
  await createMealPlans();
  await createRestrictins();
  await createRooms();
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