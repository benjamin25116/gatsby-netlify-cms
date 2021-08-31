import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.blog_post === true
  )
  const videos = data.allYoutubeVideo.edges

  // What to render when no post is found
  if (posts.length === 0) {
    return (
      <Layout>
        <Seo title="All Messages" />

        <p>
          Something went wrong. Our posts are missing. Would you be so kind to
          report this to us and check back later please?
          {/* No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js). */}
        </p>
      </Layout>
    )
  }

  // Getting all videos
  let allVideos

  if (videos) {
    allVideos = videos.map(video => {
      return (
        <article
          key={video.node.videoId}
          className="post-list-item"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h2>
              <a href={`https://www.youtube.com/watch?v=${video.node.videoId}`}>
                <span itemProp="headline">{video.node.title}</span>
              </a>
            </h2>
          </header>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.node.videoId}`}
            title={video.node.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </article>
      )
    })
  }

  // Getting all blog posts
  let allBlogPost
  if (posts) {
    allBlogPost = posts.map(post => {
      const title = post.frontmatter.title || post.fields.slug
      return (
        <article
          key={post.fields.slug}
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
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </article>
      )
    })
  }

  // Rendering it all on page
  return (
    <Layout>
      <Seo title="All Messages" />
      <section>
        <ul style={{ listStyle: `none` }}>{allVideos}</ul>
        <a href="https://www.youtube.com/channel/UCMPRCAVfEvwmpFR5BfGweGQ/videos">
          More videos on our YouTube channel
        </a>
      </section>
      <section>
        <ul style={{ listStyle: `none` }}>{allBlogPost}</ul>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
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
