import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"

const Layout = ({ children, withHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {withHeader && <Header siteTitle={data.site.siteMetadata.title} />}
      <main id="main">
        {children}
        <footer>
          <div className="content">
            <div className="social-parent">
              <div className="social">
                <a href="https://www.linkedin.com/company/seenconnects" target="_blank" rel="noopener noreferrer" className="no-sub"><img alt="" src="/icons/linkedin.png" /></a>
                <a href="https://www.instagram.com/connectscast/" target="_blank" rel="noopener noreferrer" className="no-sub"><img alt="" src="/icons/instagram.png" /></a>
              </div>
              <div className="footer-logo-parent">
                <img src="/icons/logo_with_type.png" alt="" className="footer-logo" />
                <a href="https://seenconnects.com/" className="no-sub"><img alt="" className="footer-logo" src="/icons/connects-logo.png" /></a>
              </div>
            </div>
            <ul className="office-address">
              <li><strong>SEEN Connects</strong>,</li>
              <li>7th Floor the Tea Building,</li>
              <li>56 Shoreditch High Street,</li>
              <li>London,</li>
              <li>E1 6JJ</li>
            </ul>
            {` `}
            Copyright © {new Date().getFullYear()}. <a href="https://seenconnects.com/" target="_blank" rel="noopener noreferrer">SEEN Connects</a>.<br /> <br /> All rights reserved. <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </footer>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  withHeader: PropTypes.bool,
}

Layout.defaultProps = {
  withHeader: true
}

export default Layout
