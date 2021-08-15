import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [home] = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.title === "Home"
  )
  const embed_src = home.frontmatter.embed_src
  const [homeBanner] = data.allFile.edges.filter(
    edge => edge.node.childImageSharp
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />

      
      {homeBanner ? (
        <Image fluid={homeBanner.node.childImageSharp.fluid} />
      ) : null}
      
      {/* Add embedded livestream to homepage. It's a proof of concept to Jonathan. */}
      {embed_src ? (
        {embed_src}
      ) : null}

      <article
        dangerouslySetInnerHTML={{
          __html: home.html,
        }}
        itemProp="write-up"
      ></article>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "home" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
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
          embed_src
        }
        html
      }
    }
  }
`
