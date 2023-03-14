import { getFirestore, collection, getDocs, query, where } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';
import { app } from './connectFirebase.js';

async function retrieveData() {
  const db = getFirestore(app);
  const usersRef = collection(db, 'User');
  const q = query(usersRef, where('name', '!=', ''));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}


export { retrieveData };
