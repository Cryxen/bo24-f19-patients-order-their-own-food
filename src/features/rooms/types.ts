import { DietaryRestriction } from "../dietaryRestrictions/types"

export type Room = {
    roomNumber: number
    restriction?: DietaryRestriction[]
    order?: number[] //TODO: Change to order type later
}