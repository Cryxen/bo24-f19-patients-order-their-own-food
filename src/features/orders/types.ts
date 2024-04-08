import { MealPlan } from "../mealPlans/types"

export type Order = {
        id: number,
        size: 0.75 | 1 | 1.25,
        roomNumber: number,
        mealPlanId: number,
        mealPlan: MealPlan
}

export type mealSize = {
        [Key in Order["size"]]: 'liten' | 'medium' | 'stor'
}