import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import Seo from "../components/seo"

const Petrina = ({ data }) => {
  const [content] = data.allMarkdownRemark.nodes
  const [profilePic] = data.allFile.edges.filter(
    edge => edge.node.childImageSharp
  )

  return (
    <Layout>
      <Seo title="Petrina Satvinder" />
      <h1>Petrina Satvinder</h1>
      {profilePic ? (
        <GatsbyImage image={profilePic.node.childImageSharp.gatsbyImageData} alt="Petrina Satvinder"/>
      ) : null}
      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  );
}

export default Petrina

export const pageQuery = graphql`{
  allMarkdownRemark(filter: {frontmatter: {title: {regex: "/petrina/i"}}}) {
    nodes {
      html
    }
  }
  allFile(filter: {relativeDirectory: {eq: "petrina"}}) {
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
