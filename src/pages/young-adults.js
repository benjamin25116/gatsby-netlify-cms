import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const YoungAdults = ({ data }) => {
  const [content] = data.allMarkdownRemark.nodes
  const [image] = data.allFile.edges.filter(edge => edge.node.childImageSharp)

  return (
    <Layout>
      <Seo title="Young Adults" />
      <h1>Young Adults</h1>
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

export default YoungAdults

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { title: { regex: "/young adults/i" } } }
    ) {
      nodes {
        html
      }
    }
    allFile(filter: { relativeDirectory: { eq: "young-adults" } }) {
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
