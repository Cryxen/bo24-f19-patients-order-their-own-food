

export const DIETARY_RESTRICTIONS = ['Sukkerfri', 'Lavkarbo', 'Redusert Saltinnhold', 'Keto', 'Diabetisk diett', 'Laktosefri', 'Lavprotein', 'Høyt fiberinnhold']

export type Restriction = {
    dietaryRestriction: typeof DIETARY_RESTRICTIONS[number]
}