export const sideDishArray = ["vegetable"] as const; //Made with help from chatGPT
export const mainDishArray = ["red meat", "fish", "chicken", "pasta"] as const;

export type Meal = {
    mealName: string
    description: string
    category: sideDish | mainDish | "undefined"
    dietaryInfo?: string[] | string;
    imageUrl?: string
}

export type sideDish = {
    sideDish: typeof sideDishArray[number]
}

export type mainDish = {
    mainDish: typeof mainDishArray[number]
}

export const dietaryRestrictions = ['Red meat', 'Salt', 'Gluten']
