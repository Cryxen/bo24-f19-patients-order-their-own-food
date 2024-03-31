

export const DIETARY_RESTRICTIONS = ["Laktoseredusert", "Laktosefri", "Energi og næringstett", "Purinfattig", "Lavkarbo", "Keto diett"]

export type DietaryRestriction = {
    dietaryRestriction: typeof DIETARY_RESTRICTIONS[number]
}