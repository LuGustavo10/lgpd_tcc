// Call the addDataToFirestore function with your data
import { addDataToFirestore } from '../Controller/insertFirebase.js';

// Add event listener to the submit button
document.querySelector('#submit').addEventListener('click', async (event) => {
  event.preventDefault();

  // Get the data from the form
  const name = document.querySelector('#name').value;
  const age = document.querySelector('#age').value;

  // Create a data object
  const data = {
    name: name,
    age: age
  };

  // Call the addDataToFirestore function with the data
  await addDataToFirestore(data);

  // Reset the form
  document.querySelector('form').reset();
});
