# Simple Web Application with Login, Calculator, and Stopwatch

This project is a single-page web application that includes a login form with validations, a basic calculator, and a stopwatch. It is built using HTML, CSS, and JavaScript with jQuery for form validation and arrow functions.

## Features

### Part A: Login and Calculator

#### 1. **Login Page**:
   - **Fields**:
     - **Email**: Only accepts Northeastern email (`@northeastern.edu`).
     - **Username**
     - **Password**
     - **Confirm Password**
   - **Validation Requirements**:
     - **Null Checks**: All fields must be filled.
     - **Special Character Check**: Checks for special characters in fields.
     - **Length Check**: Each field should have minimum and maximum length requirements.
     - **Email Check**: Only accepts Northeastern email.
   - **Error Messages**:
     - Custom error messages are shown below each field if validation fails.
     - Error messages are highlighted in red and displayed without pop-ups.
   - **Login Button**:
     - Initially disabled until all validations are successfully met.
   - **Redirect on Success**: After successful validation, users are redirected to the Calculator page.

#### 2. **Calculator Page**:
   - **User Information**:
     - Displays the logged-in username at the top of the page.
   - **Calculator Fields**:
     - Two input fields for numbers (Number 1 and Number 2).
     - Four operation buttons: Add, Subtract, Multiply, Divide.
     - **Result**: Displays result in a non-editable field.
   - **Validations**:
     - Fields accept only numeric input, with null checks and special character restrictions.
     - Error messages are displayed below fields, without pop-ups.
   - **Single Arrow Function**:
     - All operations (Add, Subtract, Multiply, Divide) are performed using a single arrow function.

### Part B: Stopwatch

#### **Features**:
   - **Time Display**: A non-editable label displays time in "HH:MM:SS" format, initially showing `00:00:00`.
   - **Date Picker**: Shows current date by default and allows selection of past/future dates.
   - **Buttons**:
     - **Start**: Starts the stopwatch.
     - **Stop**: Pauses the stopwatch.
     - **Reset**: Resets time to `00:00:00`.
   - **Functionality**:
     - Uses async/await, promises, setInterval, and clearInterval to handle the stopwatch timing functionality.

## Usage Instructions

1. **Login Page**:
   - Enter details following the required format.
   - If all validations pass, click the enabled Login button to proceed to the Calculator page.

2. **Calculator Page**:
   - Input values in Number 1 and Number 2 fields.
   - Click on any of the operation buttons to view the result.
   - Validation errors, if any, will display below each input field.

3. **Stopwatch**:
   - Select a date (optional).
   - Click **Start** to begin the stopwatch, **Stop** to pause, and **Reset** to reset the timer.

## Technical Details

- **HTML, CSS, JavaScript**: Used for building the structure and styling.
- **jQuery**: Handles form validation and basic calculator functions.
- **Async, Await, Promises, setInterval, clearInterval**: Implemented in the stopwatch for handling asynchronous timing.

---

This project demonstrates a combination of front-end form handling, basic arithmetic operations, and asynchronous JavaScript timing functions.
