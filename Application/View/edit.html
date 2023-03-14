<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" sizes="16x16" href="data:;base64,iVBORw0KGgo=">
  <title>User Data</title>
  <script type="module">import JSON from 'https://cdn.skypack.dev/json3';</script>
</head>
<body>
  <h1>Edit User Data</h1>

  <form id="edit-form" method="post">
    <label for="id">ID:</label>
    <input id="id" type="text" name="id" value="Read-only text" 
    readonly style="background-color: #e9e9e9; cursor: not-allowed;">
    <br><br>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" size="32" ><br><br>

    <label for="age">Age:</label>
    <input type="text" id="age" name="age" size="15"><br><br>
    
    <button type="submit">Save Changes</button>
    <button type="button" id="delete-button">Delete Register</button>

  </form>

  <script type="module">
    import { updateUser, populateFormWithUserData } from '../Model/update.js';
    import { deleteUser } from '../Model/delete.js'
  
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const form = document.querySelector('#edit-form');
    const deleteButton = document.querySelector("#delete-button"); // Get the delete button element
  
    populateFormWithUserData(id); // Populate form with user data
  
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const result = await updateUser(id, formData); // Update data in Firebase
        console.log(`name: ${result.name}, age: ${result.age}`);
        console.log(result); // Log the result of the update
    });

    // Event Listener to "Delete Register" button
    deleteButton.addEventListener("click", async (event) => {
      // event.preventDefault();
      // const deleteData = new DeleteData(event.target);
      const resultDel = await deleteUser(id);
      console.log(resultDel);
      if (resultDel === 'User deleted successfully!') {
        window.close();
      }
      
    });  
  </script>
</body>
</html>
