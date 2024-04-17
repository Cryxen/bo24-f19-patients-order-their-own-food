import { PrismaClient } from "@prisma/client";
import { PastOrder } from "./types";
import { MVCSavingError } from "@/libs/errors/MVC-errors";

const prisma = new PrismaClient()

export const savePastOrder = async (pastOrder: PastOrder) => {
    try {
        const responseFromDb = await prisma.pastOrder.create({
            data: {
                date: pastOrder.date as string,
                size: pastOrder.size,
                mainDish: pastOrder.mainDish,
                sideDish: pastOrder.sideDish,
                roomNumber: pastOrder.roomNumber
            }
        })
        return { success: true, data: responseFromDb }
    } catch (error) {
        return { success: false, error: MVCSavingError("past order", "repository", error) }
    }
}