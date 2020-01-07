import React from "react"
import { graphql } from "gatsby"

import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./insights.module.css";

const InsightsPage = ({ data }) => (
  <Layout withHeader={false}>
    <SEO title="Connects Cast | Welcome to the new wave of influential sound." />
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Insights</h2>
        <p>White papers, insights reports & nuggets of knowledge. If that’s your thing, help yourself! What’s the catch? You’ll need about 15 seconds to fill in the download form. Easy.
          <br /><br /><br /> <strong>Still need convincing?</strong>
        </p>
        <ul className={styles.postsList}>
          <li className={styles.post}>80% of podcast users listen to all or most of the episodes they follow, at an average of seven shows a week.</li>
          <li className={styles.post}>63% of podcast listeners have made a purchase based on something the host has recommended.</li>
          <li className={styles.post}>50% of all homes are podcast fans, meaning that’s over 60 million homes currently a part of the audio interface space.</li>
        </ul>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            content
            image
            title
          }
        }
      }
    }
  }
`;

InsightsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object.isRequired
  }).isRequired
};

export default InsightsPage
