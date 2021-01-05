import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const home = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.title === "Home"
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      {/* <Image fluid={data.allImageSharp.edges[0].node.fluid} /> */}
      {/* <pre>{JSON.stringify(data.allImageSharp.edges[0].node.fluid, null, 1)}</pre> */}

      <p
        dangerouslySetInnerHTML={{
          __html: home[0].html,
        }}
        itemProp="write-up"
      />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allImageSharp(
      filter: { fluid: { originalName: { regex: "/thumbnail/gi" } } }
    ) {
      edges {
        node {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          site_page
        }
        html
      }
    }
  }
`
