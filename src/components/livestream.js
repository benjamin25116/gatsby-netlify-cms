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
            <section>
                <h2>Join us Online</h2>
                <iframe
                style={{width: '632px', height: '355px'}}
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