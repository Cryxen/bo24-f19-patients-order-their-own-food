import * as mealController from "@/features/meals/Meals.controller"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
    return await mealController.fetchAllMeals(req)
}