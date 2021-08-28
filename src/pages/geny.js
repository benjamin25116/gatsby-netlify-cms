import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import SEO from "../components/seo"

const GenY = ({ data }) => {
    const [content] = data.allMarkdownRemark.nodes
  const images = data.allFile.edges.filter(edge => edge.node.childImageSharp)

  return (
    <Layout>
      <SEO title="GenY Youth" />
      <h1>GenY Youth</h1>
      {images
        ? images.map(edge => <GatsbyImage image={edge.node.childImageSharp.gatsbyImageData} />)
        : null}
      <article dangerouslySetInnerHTML={{ __html: content.html }}></article>
    </Layout>
  );
}

export default GenY

export const pageQuery = graphql`{
  allMarkdownRemark(filter: {frontmatter: {title: {regex: "/gen/i"}}}) {
    nodes {
      html
      frontmatter {
        title
      }
    }
  }
  allFile(filter: {relativeDirectory: {eq: "geny"}}) {
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
