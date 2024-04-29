import { MVCFetchingError } from "@/libs/errors/MVC-errors";
import { PrismaClient } from "@prisma/client";
import prisma from "@/libs/utils/prisma"


export const fetchAllAllergyRestrictions = async () => {
    try {
        const allergyRestrictionsFromDb = await prisma.allergy.findMany()
        return { success: true, data: allergyRestrictionsFromDb }
    } catch (error) {
        return {
            success: false,
            error: MVCFetchingError('allergy restrictions', 'repository', error)

        }
    }
}