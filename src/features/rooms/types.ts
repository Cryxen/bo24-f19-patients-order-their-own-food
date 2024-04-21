import { DietaryNeeds } from "../DietaryNeeds/types"
import { Allergy } from "../allergyRestrictions/types"
import { FoodConsistency } from "../consistencyRestrictions/types"
import { DietaryRestriction } from "../dietaryRestrictions/types"
import { Intolerance } from "../intoleranceRestrictions/types"

export type Room = {
    roomNumber: number
    dietaryRestrictions: DietaryRestriction[]
    consistancyRestrictions: FoodConsistency[]
    allergyRestrictions: Allergy[]
    intoleranceRestrictions: Intolerance[]
    dietaryNeeds: DietaryNeeds[]
    order?: number[] //TODO: Change to order type later
}