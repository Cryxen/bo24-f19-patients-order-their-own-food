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
        console.log(mealPlan.meals[0])
        const responseFromDb = await prisma.mealPlan.create({
            data: {
                meals: {
                    createMany: {
                        data: [{
                            mealIdName: mealPlan.meals[0] as unknown as string
                        }, {
                            mealIdName: mealPlan.meals[1] as unknown as string
                        }
                        ]
                    }
                },
                date: mealPlan.date.toString(),
                imageUrl: mealPlan.imageUrl,
                description: mealPlan.description,
                orders: mealPlan.order
            },
        })
        return { success: true, data: responseFromDb }
    }
    catch (error) {
        return { success: false, error: "Failed to save mealplan to db in repository" + error }
    }
}