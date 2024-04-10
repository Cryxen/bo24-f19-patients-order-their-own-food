import { PrismaClient } from "@prisma/client";
import { PastOrder } from "./types";

const prisma = new PrismaClient()

export const savePastOrder = async (pastOrder: PastOrder) => {
    try {
        const responseFromDb = await prisma.pastOrder.create({
            data: {
                date: pastOrder.date.toDateString(),
                size: pastOrder.size,
                mainDish: pastOrder.mainDish,
                sideDish: pastOrder.sideDish,
                roomNumber: pastOrder.roomNumber
            }
        })
        return {success: true, data: responseFromDb}
    } catch (error) {
        return {success: false, error: "Something went wrong saving past order to db in repository " + error}
    }
}