import { db } from './connectFirebase.js';
import { collection, doc, updateDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';

export async function getUserFromFirebase(id) {
  try {
    const userRef = doc(db, 'User', id);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return {
        id: userDoc.id,
        ...userDoc.data()
      };
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export async function updateUserInFirebase(id, data) {
  const { name, age } = data;

  try {
    const userRef = doc(collection(db, 'User'), id);
    await updateDoc(userRef, { name, age });
    return 'User updated successfully';
  } catch (error) {
    console.log(error);
    return error.message;
  }
}
