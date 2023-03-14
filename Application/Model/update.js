import { getUserFromFirebase, updateUserInFirebase } from '../Controller/updateFirebase.js';

async function populateFormWithUserData(id) {
  const user = await getUserFromFirebase(id);
  console.log('user:', user); // add this line to log the user data
  const form = document.querySelector('#edit-form');
  const nameInput = document.querySelector('#name');
  const ageInput = document.querySelector('#age');
  const idInput = document.querySelector('#id');

  nameInput.value = user.name;
  ageInput.value = user.age;
  idInput.value = user.id;
}

export async function updateUser(id, formData) {
    
  // Validate form data
  const name = formData.get('name');
  const age = formData.get('age');
  if (!name || !age) {
    throw new Error('Name and age are required');
  }
  if (isNaN(Number(age))) {
    throw new Error('Age must be a number');
  }

  // console.log(`name: ${name}, age: ${age}`);
  // console.log(typeof age);

  // Update user in Firebase database
  const data = { name: name, age: Number(age) };
  await updateUserInFirebase(id, data);
  await populateFormWithUserData(id); // Update form with new data

  return { name, age }; // Return the name and age values
  
}

export default updateUser;
export {populateFormWithUserData}
