import { DeleteUser } from '../Controller/deleteFirebase.js';

export async function deleteUser(id) {
  try {
    const result = await DeleteUser(id);
    return result;
  } catch (error) {
    console.log(error);
    return 'Error deleting user.';
  }
}