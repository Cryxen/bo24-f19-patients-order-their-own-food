import * as usersRepo from './Users.repository'
import { User } from './types';

export const fetchAllUsers = async () => {
  try {
    const usersFromDb = await usersRepo.fetchAllUsers();
    return { success: true, data: usersFromDb.data };
  } catch (error) {
    return { success: false, error: "Failed to retrieve users from db in service " + error };
  }
};

const controllUserNameToPassword = (user: User, email: string, password: string) => {
  if (user.email === email && user.password === password)
    return true
  else
    return false
}

export const fetchUser = async (email: string, password: string) => {
  try {
    const userFromDb = await usersRepo.fetchUser(email)
    if (controllUserNameToPassword(userFromDb.data as User, email, password))
      return { success: true, data: userFromDb.data, error: userFromDb.error }
    else
      return { success: false, error: "Failed to match user name and password to db" }
  }
  catch (error) {
    return { success: false, error: "Failed to find user and password in db in service " + error }
  }
}

export const saveUser = async (user: User) => {
  try {
    const responseFromDb = await usersRepo.saveUser(user)
      return { success: true, data: responseFromDb.data, error: responseFromDb.error }
  }
  catch (error) {
    return { success: false, error: "failed to save user to db in service " + error }
  }
}
