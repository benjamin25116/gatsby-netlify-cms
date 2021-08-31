import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import Seo from "../components/seo"

const Gallery = ({ data }) => {

  return (
    <Layout>
      <Seo title="Gallery" />
      <h1>New Covenant Community Gallery</h1>
      {data.allMarkdownRemark.nodes.map(albumData => (
        <section>
          <h2>{albumData.frontmatter.title}</h2>
          <span>
            {albumData.frontmatter.date} • {albumData.frontmatter.description}
          </span>

          {/* shape of the data is shown below */}
          {/* <pre>
            {JSON.stringify(
              data.allFile.edges.filter(
                edge =>
                  edge.node.relativeDirectory ===
                  albumData.fields.slug.replace(/^\/|\/$/g, "")
              ),
              null,
              2
            )}
          </pre> */}

          {data.allFile.edges
            .filter(
              edge =>
                edge.node.relativeDirectory ===
                albumData.fields.slug.replace(/^\/|\/$/g, "")
            )
            .map(edge => (
              <GatsbyImage image={edge.node.childImageSharp.gatsbyImageData} />
            ))}
        </section>
      ))}
    </Layout>
  );
}

export default Gallery

// export const pageQuery = graphql`
//   query {
//     allFile(filter: { extension: { regex: "/(.*).(png)|(jpg)|(jpeg)/gi" } }) {
//       edges {
//         node {
//           relativeDirectory
//           childImageSharp {
//             fluid {
//               originalName
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//     allMarkdownRemark(filter: { frontmatter: { album: { eq: true } } }) {
//       nodes {
//         frontmatter {
//           title
//           description
//           date(formatString: "DD.MM.YYYY")
//         }
//         fields {
//           slug
//         }
//       }
//     }
//   }
// `
