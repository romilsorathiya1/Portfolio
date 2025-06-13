import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nu0t1zj",
        "template_z7jvq8l",
        form.current,
        "9lo13fnB2nc7WqAlQ" 
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };
  return (
    <section id='contact' className="contact">
      <h1 className='contact-heading'>Contact</h1>
      <p className='contact-p'>I’d love to hear from you—reach out for any opportunities or questions!</p>
      <ToastContainer />
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <p>Connect With Me 🚀</p>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="contact-email"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="contact-username"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="contact-subject"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="contact-message"
          />    
          <button
            type="submit"
            className="submit-btn"
          >
            Send
          </button>
        </form>
    </section>
  )
}

export default Contact