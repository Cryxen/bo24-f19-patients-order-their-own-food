import { Restriction } from "../dietaryRestrictions/types"

export type Room = {
    roomNumber: number
    restriction?: Restriction[]
    order?: number[] //TODO: Change to order type later
}