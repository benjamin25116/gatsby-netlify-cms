import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const GenY = ({ data }) => {
  const [content] = data.allMarkdownRemark.nodes
  const [image] = data.allFile.edges.filter(edge => edge.node.childImageSharp)

  return (
    <Layout>
      <Seo title="GenY Youth" />
      <h1>GenY Youth</h1>
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

export default GenY

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { title: { regex: "/gen/i" } } }) {
      nodes {
        html
        frontmatter {
          title
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "geny" } }) {
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
