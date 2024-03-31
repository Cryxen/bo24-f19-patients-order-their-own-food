// /prisma/seed.js
// fra: https://fullstækk.no/courses/next-mvc-orm/06-seeding

import { Meal } from "@/features/meals/types";
import { Room } from "@/features/rooms/types";
import { User } from "@/features/users/types";
import { Allergy, DietaryNeeds, DietaryRestriction, FoodConsistency, Intolerance, MealPlan, MealToMealPlan, PrismaClient, RoomToDietaryRestrictions, } from "@prisma/client";

const prisma = new PrismaClient();


const DIETARY_RESTRICTIONS = ["Laktoseredusert", "Laktosefri", "Energi og næringstett", "Purinfattig", "Lavkarbo", "Keto diett"]
const CONSISTENCY_RESTRICTIONS = ["IDDSI 4", "IDDSI 5", "IDDSI 6", "Lettygg"]
const ALLERGY_RESTRICTIONS = ["Fisk", "Skalldyr", "Soya", "Bløtdyr", "Nøtter", "Melk", "Selleri", "Sennep", "Lupin", "Sesamfrø", "Løk", "Svoveldioksid og sulfitt", "Egg", "Peanøtt"]
const INTOLERANCE_RESTRICTIONS = ["Gluten", "Kål", "Løk"]
const DIETARY_NEEDS_RESTRICTIONS = ["Halal", "Vegetar", "Vegan", "Pesceterianer", "Ikke Svin", "Rehabeliteringskost"]

const users: User[] = [
  { email: "sarah@sunnaas.no", name: "Sarah", role: "healthcare", password: "password" },
  { email: "karl.gustav@sunnaas.no", name: "Karl Gustav", role: "administrator", password: "password" },
  { email: "carlos@sunnaas.no", name: "Carlos", role: "kitchen", password: "password" },
];

const meals: Meal[] = [
  { mealName: "Stekt kylling", description: "Stekt i smør", category: "chicken" },
  { mealName: "Stekt fisk", description: "Stekt i smør", category: "fish" },
  { mealName: "Stekt biff", description: "Stekt i smør", category: "red meat" },
  { mealName: "Pommes frittes", description: "Frityrstekt i olje", category: "vegetable" },
]

const mealPlans: MealPlan[] = [
  { id: 0, date: Date.now().toString(), description: "Stekt kylling med pommes frittes", imageUrl: 'TODO' },
  { id: 1, date: Date.now().toString(), description: "Stekt fisk med pommes frittes", imageUrl: 'TODO' },
  { id: 2, date: Date.now().toString(), description: "Stekt biff med pommes frittes", imageUrl: 'TODO' }
]

const mealToMealPlans: MealToMealPlan[] = [
  { mealIdName: 'Stekt kylling', mealPlanId: 0 },
  { mealIdName: 'Pommes frittes', mealPlanId: 0 },
  { mealIdName: 'Stekt fisk', mealPlanId: 1 },
  { mealIdName: 'Pommes frittes', mealPlanId: 1 },
  { mealIdName: 'Stekt biff', mealPlanId: 2 },
  { mealIdName: 'Pommes frittes', mealPlanId: 2 }
]

const dietaryRestrictions: DietaryRestriction[] = [
  { dietaryRestriction: DIETARY_RESTRICTIONS[0] },
  { dietaryRestriction: DIETARY_RESTRICTIONS[1] },
  { dietaryRestriction: DIETARY_RESTRICTIONS[2] },
  { dietaryRestriction: DIETARY_RESTRICTIONS[3] },
  { dietaryRestriction: DIETARY_RESTRICTIONS[4] },
  { dietaryRestriction: DIETARY_RESTRICTIONS[5] }
]

const rooms: Room[] = [
  { roomNumber: 1002 },
  { roomNumber: 1003 },
  { roomNumber: 1004 },
  { roomNumber: 1005 }
]

const roomToRestrictions: RoomToDietaryRestrictions[] = [
  { roomNumber: 1002, dietaryRestrictionId: DIETARY_RESTRICTIONS[0] },
  { roomNumber: 1002, dietaryRestrictionId: DIETARY_RESTRICTIONS[1] },
  { roomNumber: 1003, dietaryRestrictionId: DIETARY_RESTRICTIONS[1] },
  { roomNumber: 1004, dietaryRestrictionId: DIETARY_RESTRICTIONS[2] }
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
    const filteredDietaryRestrictionsToCreate = filteredRestrictions.map(el => ({
      dietaryRestrictionId: el.dietaryRestrictionId
    }))
    await prisma.room.upsert({
      where: { roomNumber: room.roomNumber },
      update: {},
      create: {
        roomNumber: room.roomNumber,
        dietaryRestrictions: {
          createMany:
            ({
              data: filteredDietaryRestrictionsToCreate
            })
        }
      }
    })
  })
  await Promise.all(roomPromises)
}

const createRestrictions = async () => {
  const restrictionPromises = dietaryRestrictions.map(async (restriction) => {
    await prisma.dietaryRestriction.upsert({
      where: { dietaryRestriction: restriction.dietaryRestriction },
      update: {},
      create: {
        dietaryRestriction: restriction.dietaryRestriction
      }
    })
  })
  await Promise.all(restrictionPromises)
}

const createConsistencyRestricions = async () => {
  const dataToSave: FoodConsistency[] = CONSISTENCY_RESTRICTIONS.map(el => ({ //Method found with help from ChatGPT
    consistency: el
  }))
  const restrictionDeleteAllPromises = await prisma.foodConsistency.deleteMany({})
  const restrictionPromises = await prisma.foodConsistency.createMany({
    data: dataToSave
  })
  await Promise.all([restrictionDeleteAllPromises, restrictionPromises])
}

const createAllergyRestrictions = async () => {
  const dataToSave: Allergy[] = ALLERGY_RESTRICTIONS.map(el => ({
    allergy: el
  }))
  const allergyDeleteAllPromises = await prisma.allergy.deleteMany({})
  const allergyPromises = await prisma.allergy.createMany({
    data: dataToSave
  })
  await Promise.all([allergyDeleteAllPromises, allergyPromises])
}

const createIntolleranceRestrictions = async () => {
  const dataToSave: Intolerance[] = INTOLERANCE_RESTRICTIONS.map(el => ({
    intolerance: el
  }))
  const intoleranceDeleteAllPromises = await prisma.intolerance.deleteMany({})
  const intolerancePromises = await prisma.intolerance.createMany({
    data: dataToSave
  })
  await Promise.all([intoleranceDeleteAllPromises, intolerancePromises])
}

const createDietaryNeedRestrictions = async () => {
  const dataToSave: DietaryNeeds[] = DIETARY_NEEDS_RESTRICTIONS.map(el => ({
    dietaryNeed: el
  }))
  const dietaryNeedDeleteAllPromises = await prisma.dietaryNeeds.deleteMany({})
  const dietaryNeedPromises = await prisma.dietaryNeeds.createMany({
    data: dataToSave
  })
  await Promise.all([dietaryNeedDeleteAllPromises, dietaryNeedPromises])
}

// Seed funksjoners

async function main() {
  console.log(`Start seeding ...`);
  await createUsers();
  await createMeals();
  await createMealPlans();
  await createRestrictions();
  await createRooms();
  await createConsistencyRestricions();
  await createAllergyRestrictions();
  await createIntolleranceRestrictions();
  await createDietaryNeedRestrictions();
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