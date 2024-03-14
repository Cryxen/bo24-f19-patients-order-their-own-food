export type Meal = {
    mealName: string
    description: string
    category: "red meat" | "fish" | "chicken" | "pasta" |"vegetable" | "undefined"
    dietaryInfo?: string[] | string;
    imageUrl?: string
}

export const dietaryRestrictions = ['Red meat', 'Salt', 'Gluten']