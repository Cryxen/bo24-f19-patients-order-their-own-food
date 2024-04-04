import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const fetchAllDietaryNeeds = async () => {
    try {
        const dietaryNeedsFromDb = await prisma.dietaryNeeds.findMany()
        return {
            success: true, data: dietaryNeedsFromDb
        }
    } catch (error) {
        return {
            success: false, error: "Failed to fetch dietary needs from db in repository " + error
        }
    }
}