import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Beliefs = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [content] = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.title === "Beliefs"
  )

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" />
      <section dangerouslySetInnerHTML={{ __html: content.html }}></section>
      <ul></ul>
    </Layout>
  )
}

export default Beliefs

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { site_page: { eq: true } } }) {
      nodes {
        html
        frontmatter {
          title
        }
      }
    }
  }
`
