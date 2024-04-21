export type User = {
    email: string
    name: string
    role: "healthcare" | "kitchen" | "administrator" | "undefined" | "development"
    password: string
}

export const userRoleTypeGuard = (value: any): value is User["role"] => {
    return value === 'undefined' || value === 'healthcare' || value === 'kitchen' || value === 'administrator' || value === 'development'
}

/**
 * A typeguard to check if object is user.
 * @param obj object to typeguard
 * @returns true/false if object is user
 */
export const isUser = (obj: any): obj is User => {
    return (
        typeof obj === 'object' &&
        typeof obj.email === 'string' &&
        typeof obj.name === 'string' &&
        (obj.role === 'healthcare' || obj.role === 'kitchen' || obj.role === 'administrator' || obj.role === 'undefined' || obj.role === 'development') &&
        typeof obj.password === 'string'
    )
}