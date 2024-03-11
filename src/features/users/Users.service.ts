import * as usersRepo from './Users.repository'
import { User } from './types';

export const fetchAllUsers = async () => {
  try {
    const usersFromDb = await usersRepo.fetchAllUsers();
    return { success: true, data: usersFromDb.data };
  } catch (error) {
    return { success: false, data: usersFromDb.error };
  }
};

const controllUserNameToPassword = (user: User, email: string, password: string) => {
  if (user.email === email && user.password === password)
    return true
  else
    return false
}

export const fetchUser = async (email, password) => {
  try {
    const userFromDb = await usersRepo.fetchUser(email)
    if (controllUserNameToPassword(userFromDb.data, email, password))
      return { success: true, data: userFromDb.data }
    else
      return { success: false, error: "Failed to match user name and password to db" }
  }
  catch (error) {
    return { success: false, data: usersFromDb.error }
  }
}