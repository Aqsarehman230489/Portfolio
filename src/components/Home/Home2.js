import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Home2.css'; 

function ContactForm() {
  const [state, handleSubmit] = useForm("xzzpoloz");

  if (state.succeeded) {
    return <p className="success-message">Message Sent!</p>;
  }

  return (
    <div className="contact-container">
      <h2 className="form-heading">Let's work together</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
