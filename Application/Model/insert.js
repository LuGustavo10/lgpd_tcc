// Call the addDataToFirestore function with your data
import { addDataToFirestore } from '../Controller/insertFirebase.js';

// Define a function to handle form submission
export async function submitForm() {
  // Get the data from the form
  const name = document.querySelector('#name').value;
  const last_name = document.querySelector('#last_name').value;
  const email = document.querySelector('#email').value;
  const first = document.querySelector('#pass').value;
  const second = document.querySelector('#c_pass').value;

  // Check if the passwords match
  if (first === second) {
    const password = first;

    // Create a data object
    const data = {
      name: name,
      last_name: last_name,
      email: email,
      password: password
    };

    try {
      // Call the addDataToFirestore function with the data
      await addDataToFirestore(data);
      document.querySelector('form').reset();
      window.location.href = '../../login/html/login.html';
    } catch (error) {
      console.error('Error adding data to Firestore:', error);
    }
  } else {
    console.log("As senhas precisam ser iguais!");
  }
}
