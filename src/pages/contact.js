import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const [content] = data.allMarkdownRemark.nodes.filter(
  //   node => node.frontmatter.title === "GenY"
  // )

  return (
    <Layout title={siteTitle}>
      <SEO title="Contact Us" />
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
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <p>
        We'd love to hear from you. Please use the form below to send us your
        enquiry.
      </p>
      <form
        name="Contact Us"
        method="POST"
        action="/contact-thank-you"
        data-netlify="true"
      >
        <label>
          Your Name
          <input type="text" name="name" placeholder="Your Name" />
        </label>
        <br />
        <label>
          Your Email
          <input type="text" name="email" placeholder="Your Email" />
        </label>
        <br />
        <label>
          Subject
          <input type="text" name="subject" placeholder="Subject" />
        </label>
        <br />
        <label>
          Your Message
          <textarea name="message" placeholder="Your message" />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
