import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Worship = ({ data }) => {
  const [content] = data.allMarkdownRemark.nodes
  const images = data.allFile.edges.filter(edge => edge.node.childImageSharp)

  return (
    <Layout>
      <SEO title="Worship Team" />
      <h1>Worship Team</h1>

      {images
        ? images.map(edge => <Image fluid={edge.node.childImageSharp.fluid} />)
        : null}
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
    allMarkdownRemark(filter: {frontmatter: {title: {regex: "/worship/i"}}}) {
      nodes {
        html
      }
    }
    allFile(filter: { relativeDirectory: { eq: "worship-ministry" } }) {
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
