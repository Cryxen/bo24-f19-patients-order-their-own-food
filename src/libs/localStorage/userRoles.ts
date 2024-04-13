import { User } from "@/features/users/types"

/**
 * Function to save user role to local storage.
 * @param userRole Role of user logging in
 * @returns true if localStorage functions properly
 */
export const saveRoleToLocalStorage = (userRole: User["role"]): boolean => {
    try {
        localStorage.setItem("role", userRole)
        return true
    } catch (error) {
        console.error("Something went wrong saving role to local storage " + error)
        return false
    }
}

/**
 * Function to retrieve user role already saved in local storage
 * @returns User role saved in local storage
 */
export const checkUserRoleFromLocalStorage = (): User["role"] => {
    try {
        const userRole = localStorage.getItem("role")
        return userRole as User["role"]
    } catch (error) {
        console.error("Something went wrong checking user role in local storage " + error)
        return "undefined"
    }
}

/**
 * Function to delete user role from local storagef
 * @returns true if role is deleted
 */
export const deleteUserRoleFromLocalStorage = (): boolean => {
    try {
        localStorage.removeItem("role")
        return true
    } catch (error) {
        console.error("Failed to delete role from local storage")
        return false
    }
}