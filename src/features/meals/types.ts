export type Meal = {
    name: string
    description: string
    category: "red meat" | "fish" | "chicken" | "pasta" |"vegetable" 
    dietaryInfo?: string
    imageUrl?: string
}