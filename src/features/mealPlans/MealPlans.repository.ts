import { PrismaClient } from "@prisma/client";
import { MealPlan } from "./types";
import { Meal } from "../meals/types";
import { MVCDeletingError, MVCFetchingError, MVCSavingError, MVCUpdatingError } from "@/libs/errors/MVC-errors";

import prisma from "@/libs/utils/prisma"


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
        return {
            success: false,
            error: MVCFetchingError("MealPlan", "repository", error)
        }
    }
}

export const fetchMealPlansByDate = async (date: string) => {
    try {
        const mealPlansFromDb = await prisma.mealPlan.findMany({
            where: {
                date: date
            },
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
        return {
            success: false, error: MVCFetchingError("MealPlan", "repository", error)
        }
    }
}

export const saveMealPlan = async (mealPlan: MealPlan) => {
    try {
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
                imageUrl: mealPlan.imageUrl as string,
                description: mealPlan.description,
                orders: mealPlan.order
            },
        })
        return { success: true, data: responseFromDb }
    }
    catch (error) {
        return { success: false, error: MVCSavingError("MealPlan", "repository", error) }
    }
}

export const updateMealPlan = async (mealPlan: MealPlan) => {
    try {
        const responseFromDb = await prisma.mealPlan.update({
            where: { id: mealPlan.id },
            data: {
                meals: {
                    deleteMany: [{ mealPlanId: mealPlan.id }],
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

    } catch (error) {
        return { success: false, error: MVCUpdatingError("MealPlan", "repository", error) }
    }
}

export const deleteMealPlan = async (mealPlanId: number) => {
    try {
        const deleteManyMealsToMealPlan = prisma.mealToMealPlan.deleteMany({
            where: { mealPlanId: mealPlanId }
        })
        const responseFromDb = prisma.mealPlan.delete({
            where: { id: mealPlanId }
        })
        const transaction = await prisma.$transaction([deleteManyMealsToMealPlan, responseFromDb])

        return { success: true, data: transaction }
    } catch (error) {
        return { success: false, error: MVCDeletingError("MealPlan", "repository", error) }
    }

}