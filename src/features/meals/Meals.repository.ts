import { Meal } from "@prisma/client"
import { MVCDeletingError, MVCFetchingError, MVCSavingError } from "@/libs/errors/MVC-errors"

import prisma from "@/libs/utils/prisma"


export const fetchAllMeals = async () => {
    try {
        const mealsFromDb = await prisma.meal.findMany()
        return { success: true, data: mealsFromDb }
    }
    catch (error) {
        return { success: false, error: MVCFetchingError("Meal", "repository", error) }
    }
}

export const saveMeal = async (meal: Meal) => {
    try {
        const responseFromDb = await prisma.meal.upsert({
            where: { mealName: meal.mealName },
            update: { //TODO: FIX TS ERROR
                description: meal.description,
                category: meal.category,
                dietaryInfo: meal.dietaryInfo,
                imageUrl: meal.imageUrl
            },
            create: {
                mealName: meal.mealName,
                description: meal.description,
                category: meal.category,
                dietaryInfo: meal.dietaryInfo,
                imageUrl: meal.imageUrl
            }
        })
        return { success: true, data: responseFromDb }
    } catch (error) {
        return { success: false, error: MVCSavingError("Meal", "repository", error) }
    }
}

export const deleteMeal = async (mealName: Meal["mealName"]) => {
    try {
        const responseFromDb = await prisma.meal.delete({
            where: { mealName: mealName }
        })
        return { success: true, data: responseFromDb }

    } catch (error) {
        return { success: false, error: MVCDeletingError("Meal", "repository", error) }
    }
}