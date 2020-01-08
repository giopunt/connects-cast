import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import showdown from 'showdown'

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./insights.module.css";

const converter = new showdown.Converter()

const InsightsPage = ({ data }) =>
  (
    <Layout withHeader={false}>
      <SEO title="Connects Cast | Welcome to the new wave of influential sound." />
      <section className={[styles.section, "insights-page"].join(" ")}>
        <div className={styles.content}>
          <Link to="/" className="no-sub"><img alt="" src="/icons/logo_with_type.png" className="logo" /></Link>
          <h2 className={styles.title}>Insights</h2>
          <p>White papers, insights reports & nuggets of knowledge. If that’s your thing, help yourself! What’s the catch?<br /><br /><br /></p>
          <ul className={styles.postsList}>
            {
              data.allMarkdownRemark.edges.map(({ node }) =>
                (<li key={node.frontmatter.id} className={styles.post}>
                  {node.frontmatter.title}
                  {node.frontmatter.excerpt}
                  <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: converter.makeHtml(node.frontmatter.content) }}
                  />
                </li>))
            }
          </ul>
        </div>
      </section>
    </Layout>
  )

InsightsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object.isRequired
  }).isRequired
};

export default InsightsPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            content
            excerpt
            image
            title
          }
        }
      }
    }
  }
`;

