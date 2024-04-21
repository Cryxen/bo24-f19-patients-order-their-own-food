import { MVCFetchingError } from "@/libs/errors/MVC-errors"
import { PrismaClient } from "@prisma/client"

export const fetchAllDietaryRestricions = async () => {
    const prisma = new PrismaClient()

    try {
        const DietaryRestrictionsFromDb = await prisma.dietaryRestriction.findMany()
        return ({ success: true, data: DietaryRestrictionsFromDb })
    } catch (error) {
        return ({
            success: false,
            error: MVCFetchingError('dietary restrictions', 'repository', error)
        })
    }
}