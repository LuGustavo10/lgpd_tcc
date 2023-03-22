// Logins validation
import { retrieveData } from '../Controller/readFirebase.js';

export async function validateUserData(email, password) {
    const users = await retrieveData();
    const matchingUser = users.find(user => user.email === email && user.password === password);
    return matchingUser ? matchingUser.id : null;
}

// // Example usage
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#pass');
// const userId = await validateUserData(emailInput.value, passwordInput.value);

// const data = {
//     emailInput: email,
//     passwordInput: password
// }

// export async function validateUserData(data) {


//   const users = await retrieveData(data);
//   const matchingUser = users.find(user => user.email === data(email) && user.password === data(password));
//   return matchingUser ? matchingUser.id : null;
// }
