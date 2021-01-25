import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const images = data.allFile.edges.filter(edge => edge.node.childImageSharp)
  const titles = data.allFile.edges.filter(
    edge => edge.node.childImageSharp === null
  )
  return (
    <Layout title={siteTitle}>
      <SEO title="Gallery" />
      <h1>New Covenant Community Gallery</h1>
      Create an array of relativeDirectory names to list down the albums available. Then conditional render each album according to the relativeDirectory of the node. 
      {/* {titles.map(edge => (
        <>
          <h2>{edge.node.childMarkdownRemark.frontmatter.title}</h2>
          <p>{edge.node.childMarkdownRemark.frontmatter.description}</p>
        </>
      ))}

      {images.map(edge => (
        <Image fluid={edge.node.childImageSharp.fluid} />
      ))} */}
      <pre>{JSON.stringify(data.allFile, null, 2)}</pre>
      {/* <Image fixed={data.allImageSharp.edges[0].node.fixed} /> */}
    </Layout>
  )
}

export default Gallery

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { dir: { regex: "/gallery/gi" } }) {
      edges {
        node {
          relativeDirectory
          childMarkdownRemark {
            frontmatter {
              title
              description
              date(formatString: "DD-MMM, YYYY")
            }
          }
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
