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
      {data.allFile.edges[0] ? (
        <Image fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
      ) : null}
      <pre>{JSON.stringify(data.allMarkdownRemark.nodes[4], null, 1)}</pre>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/rr26dwyhlYc"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5qap5aO4i9A"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <article
        dangerouslySetInnerHTML={{
          __html: home[0].html,
        }}
        itemProp="write-up"
      ></article>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allFile(
      filter: {
        relativePath: { regex: "/home/gi" }
        extension: { regex: "/(.*).(png)|(jpg)|(jpeg)/gi" }
      }
    ) {
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
        }
        html
      }
    }
  }
`
