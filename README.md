# Assignment 4 — Forms and Validation

**Name:** Azamat Askar  

## About the Project

This project demonstrates HTML forms, HTML5 validation, and Bootstrap form styling. The design follows my Assignment 3 layout with a dark header, a grey background, and white content blocks.

## Technologies

- HTML5
- CSS3
- Bootstrap 5
- JavaScript

## Part 1. Basic HTML Forms

### Task 0. Simple Contact Form

A basic contact form with Name, Email, Message, and a Submit button. Each field has a label connected to its input using `for` and `id`.

<img width="1544" height="1352" alt="image" src="https://github.com/user-attachments/assets/9b9aee2b-05f5-431c-bee7-5c3f3beecc21" />


### Task 1. HTML5 Validation

This form uses built-in browser validation:

- `required` prevents empty fields.
- `type="email"` checks the email format.
- `minlength` sets the minimum text length.
- `maxlength` limits the maximum text length.

The name must contain 2–50 characters, and the message must contain 10–500 characters.

<img width="1294" height="1118" alt="image" src="https://github.com/user-attachments/assets/eb6d836d-cc86-401c-83a8-13b946ac2418" />
<img width="1254" height="1104" alt="image" src="https://github.com/user-attachments/assets/7804fe51-5dc3-4b4a-ae04-17bf10eeb58f" />


## Part 2. Bootstrap Forms

### Task 2. Bootstrap Form Styling

The contact form uses Bootstrap classes such as `form-label`, `form-control`, and `btn`. The grid classes `row`, `col-12`, and `col-md-6` arrange the fields for different screen sizes.

Placeholders and helper text explain what users should enter.

<img width="1160" height="846" alt="image" src="https://github.com/user-attachments/assets/b1dd7705-0dad-4e54-b161-b653dd62d1c1" />

### Task 3. Bootstrap Validation Styles

JavaScript checks the fields when the user submits the form. It adds `is-valid` to valid fields and `is-invalid` to invalid fields.

Feedback messages appear below the inputs. The form uses `novalidate` to disable browser popups while JavaScript checks HTML5 validation rules.

<img width="1176" height="998" alt="image" src="https://github.com/user-attachments/assets/b66a6820-3529-41d4-b7bb-1c6264c528d6" />
<img width="1116" height="964" alt="image" src="https://github.com/user-attachments/assets/83601b29-eb34-43d5-89d1-d86d24751be9" />
<img width="1138" height="1008" alt="image" src="https://github.com/user-attachments/assets/a069fbed-a3a9-4827-ae57-98b16d60b19d" />


## Part 3. Advanced Form Project

### Task 4. Registration Form

The registration form includes:

- First Name and Last Name
- Email
- Password and Confirm Password
- Gender radio buttons
- Hobbies checkboxes
- Country dropdown
- Register and Reset buttons

The password must contain at least 8 characters. JavaScript checks that both passwords match. All fields are required except hobbies.

Bootstrap Grid makes the layout responsive. The Reset button clears the entered values and validation feedback.

<img width="2238" height="1638" alt="image" src="https://github.com/user-attachments/assets/1d0182e2-4ff5-460f-a6a5-2f800c80afae" />

<img width="2230" height="1632" alt="image" src="https://github.com/user-attachments/assets/30b851f9-0ee8-413f-8121-20d481bc5fe4" />

<img width="1240" height="1800" alt="image" src="https://github.com/user-attachments/assets/794570e1-f71a-4ac5-be77-ffe613371020" />
