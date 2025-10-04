import  { useState } from "react";
import './Feedback_form.css' // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
  const { name, value } = event.target;  
  setFormData({
    ...formData,
    [name]: value
  });
};

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirmationMessage =  `
    Name: ${formData.name}
    Email: ${formData.email}
    Feedback: ${formData.feedback}
    `;
    const isConfirmed = window.confirm(`Please confirm your details: \n\n${confirmationMessage}`);

    if(isConfirmed){
      console.log('Submitting feedback', formData);
      setFormData({
        name: '',
        email: '',
        feedback: ''
      })
      alert('Thank you for your valuable message')
    } else{
      console.log("Masa u enter the wrong message oo ")
    }


  }

  return (
    <>
      <nav>Tell Us What You Think</nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We would Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
