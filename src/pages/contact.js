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
      {/* <article dangerouslySetInnerHTML={{ __html: content.html }}></article> */}
      <article></article>
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
