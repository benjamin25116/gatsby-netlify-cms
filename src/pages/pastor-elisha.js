import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Elisha = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [content] = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.title === "Pastor Elisha"
  )

  return (
    <Layout title={siteTitle}>
      <SEO title="Pastor Elisha" />
      <h1>Pastor Elisha Satvinder</h1>
      <p>Senior Pastor</p>
      <Image fixed={data.allImageSharp.edges[0].node.fixed} />
      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  )
}

export default Elisha

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
      filter: { fixed: { originalName: { regex: "/elisha/gi" } } }
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
