import { MVCFetchingError } from "@/libs/errors/MVC-errors";
import { PrismaClient } from "@prisma/client";

import prisma from "@/libs/utils/prisma"


export const fetchAllIntolerance = async () => {
    try {
        const intoleranceFromDb = await prisma.intolerance.findMany()
        return {
            success: true, data: intoleranceFromDb
        }
    } catch (error) {
        return {
            success: false, 
            error: MVCFetchingError('intolerance restrictions', 'repository', error)
        }
    }
}