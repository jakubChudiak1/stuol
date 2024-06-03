import React from "react";

const ContactUsForm = () => {
  return (
    <div className="contact-us-form-wrapper">
      <div className="contact-us-form">
        <div className="contact-us-form-content">
          <h1>keep in touch</h1>
          <form action="">
            <input type="text" placeholder="Mail" />
            <button type="button">Yes, Im in!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
