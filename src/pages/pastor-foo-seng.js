import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FooSeng = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [content] = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.title === "Pastor Foo Seng"
  )
  const [profilePic] = data.allFile.edges.filter(
    edge => edge.node.childImageSharp
  )

  return (
    <Layout title={siteTitle}>
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
