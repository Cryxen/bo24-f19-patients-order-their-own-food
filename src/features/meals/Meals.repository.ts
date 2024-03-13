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

export const saveMeal = async (meal: Meal) => {
    try {
        const responseFromDb = await prisma.meal.upsert({
            where: {mealName: meal.mealName},
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
        return {success: true, data: responseFromDb}
    } catch (error) {
        return {success: false, error: "Failed to update or save entry to database."}
    }
}