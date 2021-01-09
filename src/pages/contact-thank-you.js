import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactThankYou = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const [content] = data.allMarkdownRemark.nodes.filter(
  //   node => node.frontmatter.title === "GenY"
  // )

  return (
    <Layout title={siteTitle}>
      <SEO title="Thank You" />
      <h1>Thank You</h1>
      <p>
        Thank you for contacting us! We'll be in touch very soon. Bla bla bla.
      </p>
    </Layout>
  )
}

export default ContactThankYou

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
