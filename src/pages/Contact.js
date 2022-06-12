import React from "react";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <form class="contact-form">
        <input type="text" class="contact-form-text" placeholder=" Name" />
        <input
          type="email"
          class="contact-form-text"
          placeholder=" Email"
        />
        <input type="text" class="contact-form-text" placeholder=" Phone" />
        <textarea
          class="contact-form-text"
          placeholder=" Message"
        ></textarea>
        <input type="submit" class="contact-form-btn" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
