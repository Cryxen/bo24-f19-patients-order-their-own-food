import { Meal } from "../meals/types"

export type MealPlan = {
 meal: Meal[]
 date: Date | string
 imageUrl?: string
 description: string   
 order?: undefined //TODO: Implement order type and place here.
}