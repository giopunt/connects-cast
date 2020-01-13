import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import showdown from 'showdown'
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const converter = new showdown.Converter()

class PostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle} withHeader={false}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.excerpt}
        />
        <article
          className="insight-content"
        >
          <Link to="/" className="no-sub"><img alt="" src="/icons/logo_with_type.png" className="logo" /></Link>
          <h1 className="post-content-title">{post.frontmatter.title}</h1>

          {post.frontmatter.excerpt && (
            <p class="post-content-excerpt">{post.frontmatter.excerpt}</p>
          )}

          {post.frontmatter.image && (
            <img src={post.frontmatter.image} class="post-content-image" alt={post.frontmatter.title} />
          )}

          {post.frontmatter.image && (
            <div className="post-content-image">
              <Img
                fluid={post.frontmatter.image}
                alt={post.frontmatter.title}
              />
            </div>
          )}

          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: converter.makeHtml(post.frontmatter.content) }}
          />
        </article>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
          site {
          siteMetadata {
          title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug } }) {
          id
      frontmatter {
          content
        excerpt
        image
        title
      }
    }
  }
`
