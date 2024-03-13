export type Meal = {
    mealName: string
    description: string
    category: "red meat" | "fish" | "chicken" | "pasta" |"vegetable" 
    dietaryInfo?: string
    imageUrl?: string
}