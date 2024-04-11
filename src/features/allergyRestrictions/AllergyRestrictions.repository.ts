import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

export const fetchAllAllergyRestrictions = async () => {
    try {
        const allergyRestrictionsFromDb = await prisma.allergy.findMany()
        return {success: true, data: allergyRestrictionsFromDb}
    } catch (error) {
        return {success: false, error: "Somethign went wrong fetching allergy restrictions from db in repository " + error}
    }
}