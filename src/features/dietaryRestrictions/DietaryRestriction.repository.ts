import { MVCFetchingError } from "@/libs/errors/MVC-errors"
import { PrismaClient } from "@prisma/client"
import prisma from "@/libs/utils/prisma"

export const fetchAllDietaryRestricions = async () => {


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