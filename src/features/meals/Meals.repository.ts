import { PrismaClient } from "@prisma/client"
import { Meal } from "./types"

const prisma = new PrismaClient()

export const fetchAllMeals = async () => {
    try {
        const mealsFromDb = await prisma.meal.findMany()
        return { success: true, data: mealsFromDb }
    }
    catch (error) {
        return { success: false, error: "Failed to retrieve meals from db" }
    }
}

export const saveMeal = async (meal: any) => {
    try {
        const responseFromDb = await prisma.meal.upsert({
            where: { mealName: meal.mealName },
            update: {
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
        return { success: false, error: "Failed to update or save entry to database." }
    }
}

export const deleteMeal = async (mealName: Meal["mealName"]) => {
    try {
        const responseFromDb = await prisma.meal.delete({
            where: { mealName: mealName }
        })
        return { success: true, data: responseFromDb }

    } catch (error) {
        return {success: false, error: "Failed to delete entry with mealname: " + mealName + " from database"}
    }
}