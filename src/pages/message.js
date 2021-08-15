import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const videos = data.allYoutubeVideo.edges

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All Messages" />
        
        <p>
          Something went wrong. Our posts are missing. Would you be so kind to report this to us and check back later please? 
          {/* No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js). */}
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
    <SEO title="All Messages" />
    <section>
      <ul style={{ listStyle: `none` }}>
        {videos.map(video => {
          const title = video.node.title
          if (videos){
            return (
              <li key={video.node.videoId}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <a href={`https://www.youtube.com/watch?v=${video.node.videoId}`}>
                        <span itemProp="headline">{title}</span>
                      </a>
                      
                    </h2>                  
                  </header>
                  <iframe width="560" height="315" 
                  src={`https://www.youtube.com/embed/${video.node.videoId}`} 
                  title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </article>
              </li>
            )
          }
        })}
      </ul>
      <a href='https://www.youtube.com/channel/UCMPRCAVfEvwmpFR5BfGweGQ/videos'>More videos on our YouTube channel</a>
      </section>

      <ul style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          if (post.frontmatter.blog_post) {
            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={"/message" + post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          }
        })}
      </ul>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          blog_post
        }
        html
      }
    }
    allYoutubeVideo {
      edges {
        node {
          title
          thumbnail {
            url
          }
          videoId
        }
      }
    }
  }
`
