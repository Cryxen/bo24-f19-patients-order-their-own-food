import { MealPlan } from "../mealPlans/types";
import { Order } from "./types";

export class OrderClass implements Order {
    id: number;
    size: "0.75" | "1" | "1.25";
    mealSize?: string;
    roomNumber: number;
    mealPlanId: number;
    mealPlan: MealPlan;

    constructor(id: number, size: "0.75" | "1" | "1.25", roomNumber: number, mealPlanId: number, mealPlan: MealPlan, mealSize: string) {
        this.id = id,
            this.size = size,
            this.roomNumber = roomNumber,
            this.mealPlanId = mealPlanId,
            this.mealPlan = mealPlan
        // this.mealSize = "WOHO!"
        // switch (this.size) {
        //     case 0.75:
        //         this.mealSize = 'liten'
        //         break;
        //     case 1:
        //         this.mealSize = 'medium'
        //         break;
        //     case 1.25:
        //         this.mealSize = 'stor'
        //         break;
        //     default:
        //         break;
        // }
        let decimalSize = parseFloat(size as unknown as string)
        if (size === "1")
            this.mealSize = 'medium'
        else if (size === "0.75")
            this.mealSize = 'liten'
        else if (size === "1.25")
            this.mealSize = 'stor'
    }
}