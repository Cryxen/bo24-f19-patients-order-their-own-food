import { MVCFetchingError } from "@/libs/errors/MVC-errors";
import { PrismaClient } from "@prisma/client";
import prisma from "@/libs/utils/prisma"


export const fetchAllDietaryNeeds = async () => {
    try {
        const dietaryNeedsFromDb = await prisma.dietaryNeeds.findMany()
        return {
            success: true, data: dietaryNeedsFromDb
        }
    } catch (error) {
        return {
            success: false,
            error: MVCFetchingError('dietary needs', 'repository', error)
        }
    }
}