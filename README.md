# Feedback Form

A simple and interactive feedback form built with React that allows users to submit their feedback with name, email, and message.

## Features

- **User-friendly interface** with clean input fields
- **Form validation** through HTML5 required attributes
- **Confirmation dialog** before submission to verify user details
- **Form reset** after successful submission
- **Responsive design** with custom CSS styling

## How It Works

1. Users fill in their name, email, and feedback message
2. Upon clicking "Submit Feedback", a confirmation dialog appears showing all entered details
3. If confirmed, the feedback is logged to the console and the form resets
4. A success message is displayed thanking the user
5. If cancelled, the form retains the entered data

## Component Structure

### State Management
- Uses React's `useState` hook to manage form data
- Tracks three fields: `name`, `email`, and `feedback`

### Key Functions
- **handleChange**: Updates form state as user types in any input field
- **handleSubmit**: Handles form submission, shows confirmation, and resets form

## Installation & Usage

1. Ensure you have the component file and the CSS file in your project
2. Import the component where needed:
   ```javascript
   import FeedbackForm from './FeedbackForm';
   ```
3. Use it in your application:
   ```javascript
   function App() {
     return <FeedbackForm />;
   }
   ```

## File Structure

```
├── FeedbackForm.jsx      # Main component file
└── Feedback_form.css     # Styling for the form
```

## Technologies Used

- React (Hooks: useState)
- JavaScript (ES6+)
- CSS3

## Future Enhancements

- Add form validation for required fields
- Submit feedback to a backend API
- Add error handling and loading states
- Include rating system (stars or numbers)
- Add character limit display for feedback textarea

