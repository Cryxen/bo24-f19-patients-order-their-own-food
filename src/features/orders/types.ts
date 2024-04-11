import { MealPlan } from "../mealPlans/types"
import { OrderClass } from "./classes"

export type Order = {
        id: number,
        size: "0.75" | "1" | "1.25",
        roomNumber: number,
        mealPlanId: number,
        mealPlan: MealPlan
}

export type orderSize = {
        sizeNumber: Order["size"]
        sizeName: OrderClass["mealSize"]
}