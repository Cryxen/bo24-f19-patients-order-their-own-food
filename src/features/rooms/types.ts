import { DietaryNeeds } from "../DietaryNeeds/types"
import { Allergy } from "../allergyRestrictions/types"
import { FoodConsistency } from "../consistencyRestrictions/types"
import { DietaryRestriction } from "../dietaryRestrictions/types"
import { Intolerance } from "../intoleranceRestrictions/types"

export type Room = {
    roomNumber: number
    dietaryRestriction?: DietaryRestriction[]
    consistancyRestriction?: FoodConsistency[]
    allergyRestriction?: Allergy[]
    intoleranceRestriction?: Intolerance[]
    dietaryNeeds?: DietaryNeeds[]
    order?: number[] //TODO: Change to order type later
}