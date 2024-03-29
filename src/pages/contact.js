import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {

  return (
    <Layout>
      <Seo title="Contact Us" />
      <h1>Contact Us</h1>
      <address>
        New Covenant Community 4-2, <br />
        Jalan 14/48a, Sentulraya Boulevard <br />
        51000, Kuala Lumpur, Malaysia.
      </address>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.65321998491!2d101.6897877148705!3d3.18556949768058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc480ed1bf511f%3A0x6b0c2eb036cbfae0!2sNew%20Covenant%20Community%20Church!5e0!3m2!1sen!2smy!4v1610178284532!5m2!1sen!2smy"
        width="400"
        height="300"
        frameborder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        // tabindex="0"
        title="Map to New Covenant Community Church"
      ></iframe>
      <p>
        We'd love to hear from you. Please use the form below to send us your
        enquiry.
      </p>
      <form
        name="contact"
        method="POST"
        action="/contact-thank-you"
        data-netlify="true"
      >
        <input name="form-name" value="contact" type="hidden" />
        <p>
          <label>
            Your Name
            <input type="text" name="name" placeholder="Your Name" />
          </label>
        </p>
        <p>
          <label>
            Your Email
            <input type="text" name="email" placeholder="Your Email" />
          </label>
        </p>
        <p>
          <label>
            Subject
            <input type="text" name="subject" placeholder="Subject" />
          </label>
        </p>
        <p>
          <label>
            Your Message
            <textarea name="message" placeholder="Your message" />
          </label>
        </p>
        <button type="submit">Send</button>
      </form>
    </Layout>
  )
}

export default Contact
