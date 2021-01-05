import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Petrina = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [content] = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.title === "Petrina"
  )

  return (
    <Layout title={siteTitle}>
      <SEO title="Petrina Satvinder" />
      <h1>Petrina Satvinder</h1>
      <Image fixed={data.allImageSharp.edges[0].node.fixed} />
      <main dangerouslySetInnerHTML={{ __html: content.html }}></main>
    </Layout>
  )
}

export default Petrina

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
    allImageSharp(
      filter: { fixed: { originalName: { regex: "/petrina/gi" } } }
    ) {
      edges {
        node {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
