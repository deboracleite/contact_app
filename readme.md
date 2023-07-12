
# Project Setup

1. Extract .zip file
2. Open the project folder in an IDE of your choice
3. Open the terminal inside that project folder and run command `npm install`
4. Make sure you see the `node_modules` folder and `package-lock.json` file in your directory.
5. Run `npx cypress open` to open cypress runner

# Considerations

During testing of the contact management page, I found it to be well-developed and the testing process was engaging. The app provides basic CRUD functionality, allowing users to add, edit, and delete contacts.

As suggestions for improvement and to align more closely with real-world production applications, I would recommend the following:

1. Define acceptance criteria to ensure precise testing scope.

2. Clarify if code modifications are allowed. In real-world scenarios, using the data-cy attribute as a reliable element identifier instead of relying solely on HTML tags can enhance test stability.

3. Check for behaviors such as data loss during the editing process.

4. Implement field validation and provide user feedback for essential fields like email, phone, and name to prevent empty entries.

Overall, I thoroughly enjoyed working on this test as it allowed me to showcase my testing skills and think critically about potential improvements.

# Test Documentation - Contact App

## Test Case 1: Load page 

This test case verifies that the page has been successfully loaded.

### Steps

1. Access the URL: ./contact_app.html.

### Steps of asserts 

1. The page contains the title.
2. Contact list table has only one row. 

## Test Case 2: Add Contact

This test case verifies if a contact is successfully added to the contact list.

**Prerequisites**: 

1. Access the URL: ./contact_app.html.

### Steps

1. Fill in the contact addition form with the necessary information.
2. Click the "Add" button.

### Steps of asserts 

1. Only one row has been added to the table.
2. The entered data matches the data in the table.
3. Entered name matches the regex for the name.
4. Entered phone number matches the regex for the phone number.
5. Entered email matches the regex for the email.
6. The table contains the entered data.

## Test Case 3: Edit Contact

This test case verifies if a contact is successfully edited in the contact list.

**Prerequisites**: 

1. Access the URL: ./contact_app.html.
2. Add the contact.

### Steps

1. Click on the edit button for the chosen user. 
2. Edit user information.
2. Click the "Update" button.

### Steps of asserts 

1. The entered name matches the name in the table.
2. The phone number entered is not in the table.
3. The email entered is not in the table.
4. Entered name matches the regex for the name.


## Test Case 4: Delete Contact

This test case verifies if a contact is successfully deleted to the contact list.

**Prerequisites**: 

1. Access the URL: ./contact_app.html.
2. Add the contact.

### Steps

1. Click on the delete button for the chosen user. 

### Steps of asserts 

1. Contact list table has only one row. 
2. The table no longer contains the deleted contact.




