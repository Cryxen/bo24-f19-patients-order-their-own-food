import { Meal } from "../meals/types"

export type MealPlan = {
    //  meals: Meal[]
    meals: Array<{[key: string]: Meal}> | Meal[]
    date: Date | string
    imageUrl?: string
    description: string
    order?: undefined //TODO: Implement order type and place here.
}
