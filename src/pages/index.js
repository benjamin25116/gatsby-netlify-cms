import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Livestream from "../components/livestream"

const Home = ({ data }) => {
  const [home] = data.allMarkdownRemark.nodes
  const [homeBanner] = data.allFile.edges.filter(
    edge => edge.node.childImageSharp
  )

  return (
    <Layout>
      <SEO title="Home" />

      <section className="home--banner">
      {homeBanner ? (
        <Image fluid={homeBanner.node.childImageSharp.fluid} />
        ) : null}
      </section>
      
      <Livestream/>

      <article className="home--writeup"
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
      allFile(filter: {relativeDirectory: {eq: "home"}}) {
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
      allMarkdownRemark(filter: {frontmatter: {title: {regex: "/home/i"}}}) {
        nodes {
          html
        }
      }
  }
`
