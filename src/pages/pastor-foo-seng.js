import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import Seo from "../components/seo"

const FooSeng = ({ data }) => {
  const [content] = data.allMarkdownRemark.nodes
  const [profilePic] = data.allFile.edges.filter(
    edge => edge.node.childImageSharp
  )

  return (
    <Layout>
      <Seo title="Pastor Foo Seng" />
      <h1>Pastor Foo Seng</h1>
      <p>Associate Pastor</p>
      {profilePic ? (
        <GatsbyImage image={profilePic.node.childImageSharp.gatsbyImageData} alt="Pastor Foo Seng"/>
      ) : null}
      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  );
}

export default FooSeng

export const pageQuery = graphql`{
  allMarkdownRemark(filter: {frontmatter: {title: {regex: "/foo seng/i"}}}) {
    nodes {
      html
    }
  }
  allFile(filter: {relativeDirectory: {eq: "pastor-foo-seng"}}) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  }
}
`
