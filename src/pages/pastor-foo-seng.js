import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FooSeng = ({ data }) => {
  const [content] = data.allMarkdownRemark.nodes
  const [profilePic] = data.allFile.edges.filter(
    edge => edge.node.childImageSharp
  )

  return (
    <Layout>
      <SEO title="Pastor Foo Seng" />
      <h1>Pastor Foo Seng</h1>
      <p>Associate Pastor</p>
      {profilePic ? (
        <Image fixed={profilePic.node.childImageSharp.fixed} />
      ) : null}
      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  )
}

export default FooSeng

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {title: {regex: "/foo seng/i"}}}) {
      nodes {
        html
      }
    }
    allFile(filter: { relativeDirectory: { eq: "pastor-foo-seng" } }) {
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
