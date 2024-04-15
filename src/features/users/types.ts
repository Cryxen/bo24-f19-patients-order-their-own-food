export type User = {
    email: string
    name: string
    role: "healthcare" | "kitchen" | "administrator" | "undefined" | "development"
    password: string
}

export const userRoleTypeGuard = (value: any): value is User["role"] => {
    return value === 'undefined' || value === 'healthcare' || value === 'kitchen' || value === 'administrator' || value === 'development'
}
