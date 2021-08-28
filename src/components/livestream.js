import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Livestream = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark(filter: {frontmatter: {embed_src: {regex: "/youtube/"}}}) {
          edges {
            node {
              frontmatter {
                embed_src
              }
            }
          }
        }
      }      
    `)

    let source = data.allMarkdownRemark.edges[0].node.frontmatter.embed_src

    if (source){
        return (
            <section className="livestream">
                <h2 className="livestream--header">Join us Online</h2>
                <iframe
                className="livestream--video"
                style={{width: "100%", height: "100%"}}
                src={source}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Livestream of Sunday Celebration"
                ></iframe> 
            </section>
        )
    }
}

export default Livestream