import { PrismaClient } from "@prisma/client";
import { MealPlan } from "./types";
import { Meal } from "../meals/types";

const prisma = new PrismaClient()

export const fetchAllMealPlans = async () => {
    try {
        const mealPlansFromDb = await prisma.mealPlan.findMany({
            include: {
                meals: {
                    select: {
                        meal: true
                    }
                }
            }
        })
        return { success: true, data: mealPlansFromDb }
    } catch (error) {
        return { success: false, error: "Failed to retrieve meal plans from db" }
    }
}

export const saveMealPlan = async (mealPlan: MealPlan) => {
    try {
        const responseFromDb = await prisma.mealPlan.upsert({
            where: { id: mealPlan.id },
            update: {
                meals: {
                    connect: [ //Help from ChatGPT and Prisma documentation
                        {
                            mealPlanId_mealIdName: {
                                mealPlanId: mealPlan.id as number,
                                mealIdName: mealPlan.meals[0].mealName as string
                            }
                        },
                        {
                            mealPlanId_mealIdName: {
                                mealPlanId: mealPlan.id as number,
                                mealIdName: mealPlan.meals[1].mealName as string
                            },
                        }
                    ]
                },
                date: mealPlan.date.toString(),
                imageUrl: mealPlan.imageUrl,
                description: mealPlan.description,
                orders: mealPlan.order
            },
            create: {
                meals: {
                    connect: [ //Help from ChatGPT and Prisma documentation
                        {
                            mealPlanId_mealIdName: {
                                mealPlanId: mealPlan.id as number,
                                mealIdName: mealPlan.meals[0].mealName as string
                            },
                            mealPlanId_mealIdName: {
                                mealPlanId: mealPlan.id as number,
                                mealIdName: mealPlan.meals[1].mealName as string
                            },
                        }
                    ]
                },
                date: mealPlan.date.toString(),
                imageUrl: mealPlan.imageUrl as string,
                description: mealPlan.description,
                orders: mealPlan.order
            }
        })
        return { success: true, data: responseFromDb }
    }
    catch (error) {
        return { success: false, error: "Failed to save mealplan to db " + error }
    }
}