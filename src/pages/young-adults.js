import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const YoungAdults = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [content] = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.title === "Young Adults"
  )

  return (
    <Layout title={siteTitle}>
      <SEO title="Young Adults" />
      <h1>Young Adults</h1>
      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  )
}

export default YoungAdults

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
