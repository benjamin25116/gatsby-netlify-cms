import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Worship = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [content] = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.title === "Worship ministry"
  )

  return (
    <Layout title={siteTitle}>
      <SEO title="Worship Team" />
      <h1>Worship Team</h1>

      {data.allFile.edges.map(edge => (
        <Image fluid={edge.node.childImageSharp.fluid} />
      ))}
      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  )
}

export default Worship

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
    allFile(
      filter: {
        name: { regex: "/(worship).*/gi" }
        dir: { regex: "/worship-ministry/gi" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
