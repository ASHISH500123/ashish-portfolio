import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ashish123",
        "template_dm9ce1a",
        form.current,
        "zBX86UT6Df3BNFkeD"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("EmailJS Error:", error);
          alert("❌ Failed to send message");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>
        I'm currently looking for internships and opportunities.
        Feel free to reach out!
      </p>

      <form ref={form} onSubmit={sendEmail} autoComplete="off">

        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          autoComplete="off"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          autoComplete="off"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          autoComplete="off"
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;