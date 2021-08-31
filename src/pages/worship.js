import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Worship = ({ data }) => {
  const [content] = data.allMarkdownRemark.nodes
  const [image] = data.allFile.edges.filter(edge => edge.node.childImageSharp)

  return (
    <Layout>
      <Seo title="Worship Team" />
      <h1>Worship Team</h1>

      {image ? (
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          alt=""
        />
      ) : null}

      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  )
}

export default Worship

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { title: { regex: "/worship/i" } } }
    ) {
      nodes {
        html
      }
    }
    allFile(filter: { relativeDirectory: { eq: "worship-ministry" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
