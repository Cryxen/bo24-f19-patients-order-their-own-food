import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const fetchAllConsistencyRestrictions = async () => {
    try {
        const consistencyRestrictionsFromDb = await prisma.foodConsistency.findMany()
        return {success: true, data: consistencyRestrictionsFromDb}
    } catch (error) {
        return {success: false, error: "Failed to retrieve consistency restrictions from db in repository " + error}
    }
}