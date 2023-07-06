import React, { useState } from 'react';
import './styles/contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');


  const validateForm = () => {
    // Validate name field
    if (!name) {
      setNameError((prevState) => 'Name is required');
    }
    // Validate email field
    if (!email) {
      setEmailError((prevState) =>'Email is required');
    }

    // Validate message field
    if (!message) {
      setMessageError((prevState) => 'Message is required');
    } 
    if(!messageError && !emailError && !nameError){
      return true
    }

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validateForm()){
      return
    }
      const formData = { name, email, message };
  console.log(formData);
    setName("")
    setEmail("")
    setMessage("")
}

  return (
    <div className="contact">
      <h2 className="h2">Contact Me</h2>
      <p>You can reach out to me via email or connect with me on GitHub:</p>
      <ul>
        <li>Email: sewstrait@gmail.com</li>
        <li>
          GitHub: <a href="https://github.com/strait2thepoint">https://github.com/strait2thepoint</a>
        </li>
      </ul>

      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              if (name.trim() === '') {
                setNameError('Name is required');
              } else {
                setNameError('');
              }
            }}
          />
          {nameError && <span className="error">{nameError}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              if (email.trim() === '') {
                setEmailError('Email is required');
              } else {
                setEmailError('');
              }
            }}
          />
          {emailError && <span className="error">{emailError}</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => {
              if (message.trim() === '') {
                setMessageError('Message is required');
              } else {
                setMessageError('');
              }
            }}
          ></textarea>
          {messageError && <span className="error">{messageError}</span>}
        </div>
        <button type="submit" className='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
