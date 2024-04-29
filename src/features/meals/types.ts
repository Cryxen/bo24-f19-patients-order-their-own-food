export const SIDE_DISH = ["vegetable"] as const; //Made with help from chatGPT
export const MAIN_DISH = ["red meat", "fish", "chicken", "pasta"] as const;

export type Meal = {
    mealName: string
    description: string
    category: SideDish | MainDish | "undefined"
    dietaryInfo?: string[];
    imageUrl?: string
    meal?: Meal //Made to reflect DB response.
}

export type SideDish = {
    sideDish: typeof SIDE_DISH[number]
}

export type MainDish = {
    mainDish: typeof MAIN_DISH[number]
}

export const dietaryRestrictions = ['Red meat', 'Salt', 'Gluten']
