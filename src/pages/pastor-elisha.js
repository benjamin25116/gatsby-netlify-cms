import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Elisha = ({ data }) => {
  const [content] = data.allMarkdownRemark.nodes
  const [profilePic] = data.allFile.edges.filter(
    edge => edge.node.childImageSharp
  )
  
  return (
    <Layout>
      <SEO title="Pastor Elisha" />
      <h1>Pastor Elisha Satvinder</h1>
      <p>Senior Pastor</p>
      {profilePic ? (
        <Image fixed={profilePic.node.childImageSharp.fixed} />
      ) : null}
      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  )
}

export default Elisha

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {title: {regex: "/elisha/i"}}}) {
      nodes {
        html
      }
    }
    allFile(filter: { relativeDirectory: { eq: "pastor-elisha" } }) {
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
