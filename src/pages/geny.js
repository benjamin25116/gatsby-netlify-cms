import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GenY = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [content] = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.title === "GenY"
  )

  return (
    <Layout title={siteTitle}>
      <SEO title="GenY Youth" />
      <h1>GenY Youth</h1>
      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  )
}

export default GenY

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
