import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Beliefs = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout title={siteTitle}>
      <SEO title="Home" />
      <h1>What We Believe</h1>
      <ul>
        <li>In the Triune God the Father, the Son and the Holy Spirit.</li>
        <li>That Jesus Christ is true God and true man.</li>
        <li>That the Holy Spirit is a divine Person.</li>
        <li>
          That the Old and New Testaments are God’s divinely inspired words.
        </li>
        <li>
          That all have sinned and come short of the glory of God and are in
          need ofsalvation.
        </li>
        <li>That salvation has been provided through Jesus Christ for all.</li>
        <li>
          That it is the will of God that every believer be filled with the Holy
          Spirit and lead a holy life.
        </li>
        <li>
          That healing is provided in the redemptive work of Christ and is
          available to every believer.
        </li>
        <li>
          That the Church consists of all those who have received Jesus Christ
          as their personal Saviour.
        </li>
        <li>
          That there shall be a bodily resurrection of the just and the unjust.
        </li>
        <li>In the personal, visible and imminent return of Jesus Christ.</li>
      </ul>
    </Layout>
  )
}

export default Beliefs

export const pageQuery = graphql`
  query {
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
