import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Petrina = ({ data }) => {
  const [content] = data.allMarkdownRemark.nodes
  const [profilePic] = data.allFile.edges.filter(
    edge => edge.node.childImageSharp
  )

  return (
    <Layout>
      <SEO title="Petrina Satvinder" />
      <h1>Petrina Satvinder</h1>
      {profilePic ? (
        <Image fixed={profilePic.node.childImageSharp.fixed} />
      ) : null}
      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  )
}

export default Petrina

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {title: {regex: "/petrina/i"}}}) {
      nodes {
        html
      }
    }
    allFile(filter: { relativeDirectory: { eq: "petrina" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
