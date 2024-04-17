import { MVCFetchingError } from '@/libs/errors/MVC-errors';
import * as usersRepo from './Users.repository'
import { User, isUser } from './types';

export const fetchAllUsers = async () => {
  try {
    const usersFromDb = await usersRepo.fetchAllUsers();
    return { success: true, data: usersFromDb.data, error: usersFromDb.error };
  } catch (error) {
    return { success: false, data: MVCFetchingError("users", "service", error) };
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
    if (isUser(userFromDb.data))
      if (controllUserNameToPassword(userFromDb.data, email, password)) //TODO: Fix TS Error
        return { success: true, data: userFromDb.data, error: userFromDb.error }
      else
        return { success: false, error: "Failed to match user name and password to db" }
  }
  catch (error) {
    return { success: false, error: MVCFetchingError("user", "service", error) }
  }
}

export const saveUser = async (user: User) => {
  try {
    const responseFromDb = await usersRepo.saveUser(user)
    return { success: true, data: responseFromDb.data, error: responseFromDb.error }
  }
  catch (error) {
    return { success: false, error: MVCFetchingError("user", "service", error) }
  }
}
