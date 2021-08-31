import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Beliefs = ({ data }) => {
  const [content] = data.allMarkdownRemark.nodes
  const [image] = data.allFile.edges.filter(edge => edge.node.childImageSharp)

  return (
    <Layout>
      <Seo title="Beliefs" />
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

export default Beliefs

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { title: { regex: "/beliefs/i" } } }
    ) {
      nodes {
        html
        frontmatter {
          title
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "beliefs" } }) {
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
