import { MVCFetchingError } from "@/libs/errors/MVC-errors";
import { PrismaClient } from "@prisma/client";
import prisma from "@/libs/utils/prisma"


export const fetchAllConsistencyRestrictions = async () => {
    try {
        const consistencyRestrictionsFromDb = await prisma.foodConsistency.findMany()
        return { success: true, data: consistencyRestrictionsFromDb }
    } catch (error) {
        return {
            success: false, error: MVCFetchingError('consistency restrictions', 'repository', error)
        }
    }
}