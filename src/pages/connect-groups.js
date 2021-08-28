import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ConnectGroups = ({ data }) => {
  const [content] = data.allMarkdownRemark.nodes
  const images = data.allFile.edges.filter(edge => edge.node.childImageSharp)

  return (
    <Layout>
      <SEO title="Connect Groups" />
      <h1>Connect Groups</h1>
      {images
        ? images.map(edge => <Image fluid={edge.node.childImageSharp.fluid} />)
        : null}
      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  )
}

export default ConnectGroups

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {title: {regex: "/connect groups/i"}}}) {
      nodes {
        html
        frontmatter {
          title
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "connect-groups" } }) {
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
