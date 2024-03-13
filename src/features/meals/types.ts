export type Meal = {
    mealName: string
    description: string
    category: "red meat" | "fish" | "chicken" | "pasta" |"vegetable" | "undefined"
    dietaryInfo?: string
    imageUrl?: string
}