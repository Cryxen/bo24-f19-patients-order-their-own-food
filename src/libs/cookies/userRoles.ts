"use server"
import { User } from "@/features/users/types"
import { cookies } from "next/headers"

/**
 * Function to save user role to cookie.
 * @param userRole Role of user logging in
 * @returns true if cookie functions properly
 */
export const userRoleSaveToCookie = (userRole: User["role"]): boolean => {
    try {
        cookies().set("role", userRole)
        return true
    } catch (error) {
        console.error("Something went wrong saving role as cookie " + error)
        return false
    }
}

/**
 * Function to retrieve user role already saved in cookie
 * @returns User role saved in cookie
 */
export const userRoleCheckCookie = (): User["role"] => {
    try {
        const userRole = cookies().get("role")
        console.log(userRole)
        if (userRole !== undefined) {
            const { value } = userRole
            console.log(value)
            return value as unknown as User["role"]
        }
        else
            return 'undefined'

    } catch (error) {
        console.error("Something went wrong checking user role in local storage " + error)
        return "undefined"
    }
}

/**
 * Function to delete user role from cookie
 * @returns true if role is deleted
 */
export const userRoleDeleteFromCookie = (): boolean => {
    try {
        cookies().delete("role")
        return true
    } catch (error) {
        console.error("Failed to delete role from local storage")
        return false
    }
}