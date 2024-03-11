import * as usersRepo from './Users.repository'

export const fetchAllUsers = async () => {
    try {
      const usersFromDb = await usersRepo.fetchAllUsers();
      return { success: true, data: usersFromDb.data };
    } catch (error) {
      return { success: false, data: usersFromDb.error };
    }
  };