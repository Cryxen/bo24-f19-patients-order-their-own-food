export type Meal = {
    mealName: string
    description: string
    category: sideDish | mainDish | "undefined"
    dietaryInfo?: string[] | string;
    imageUrl?: string
}

export type sideDish = {
    sideDish: "vegetable"
}

export type mainDish = {
    mainDish: "red meat" | "fish" | "chicken" | "pasta" 
}

export const dietaryRestrictions = ['Red meat', 'Salt', 'Gluten']
