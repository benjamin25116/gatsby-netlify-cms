import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import SEO from "../components/seo"

const SundaySchool = ({ data }) => {
  const [content] = data.allMarkdownRemark.nodes
  const images = data.allFile.edges.filter(edge => edge.node.childImageSharp)

  return (
    <Layout>
      <SEO title="Sunday School" />
      <h1>Sunday School</h1>
      {images
        ? images.map(edge => <GatsbyImage image={edge.node.childImageSharp.gatsbyImageData} />)
        : null}
      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  );
}

export default SundaySchool

export const pageQuery = graphql`{
  allMarkdownRemark(filter: {frontmatter: {title: {regex: "/sunday school/i"}}}) {
    nodes {
      html
    }
  }
  allFile(filter: {relativeDirectory: {eq: "sunday-school"}}) {
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
