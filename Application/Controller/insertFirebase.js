import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';
import { app } from './connectFirebase.js';

// Create a function to add data to a Firestore collection
async function addDataToFirestore(data) {
  try {
    const db = getFirestore(app);
    const usersCollectionRef = collection(db, 'User');
    await addDoc(usersCollectionRef, data);
    console.log('Data added to Firestore!');
  } catch (error) {
    console.error('Error adding data to Firestore: ', error);
  }
}

export { addDataToFirestore };
