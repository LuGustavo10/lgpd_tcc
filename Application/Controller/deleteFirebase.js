import { collection, doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';
import { db } from './connectFirebase.js';

export async function DeleteUser(id) {
    try{
        const userRef = doc(collection(db, 'User'), id);
        await deleteDoc(userRef);
        return 'User deleted successfully!'
    } catch (error) {
        return console.log("Error:", error);
    }
}