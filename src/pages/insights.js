import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./insights.module.css";

const InsightsPage = ({ data }) =>
  (
    <Layout withHeader={false}>
      <SEO title="Connects Cast | Welcome to the new wave of influential sound." />
      <section className={[styles.section, "insights-page"].join(" ")}>
        <div className={styles.content}>
          <Link to="/" className="no-sub"><img alt="" src="/icons/logo_with_type.png" className="logo" /></Link>
          <h2 className={styles.title}>Insights</h2>
          <p>White papers, insights reports & nuggets of knowledge. If that’s your thing, help yourself!<br /><br /><br /></p>
          <ul className={styles.postsList}>
            {
              data.allMarkdownRemark.edges.map(({ node }) =>
                (<li key={node.frontmatter.id} className={styles.post}>
                  <div
                    className={styles.postImg}
                    style={{ backgroundImage: `url(${node.frontmatter.image})` }}
                  ></div>
                  <div className={styles.postTitle}>
                    {node.frontmatter.title}
                  </div>
                  <div className={styles.postExcerpt}>
                    {node.frontmatter.excerpt}
                  </div>
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

