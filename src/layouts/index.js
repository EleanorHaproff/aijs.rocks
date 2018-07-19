import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Typography from 'typography'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import './index.css'

// Customize Typography Plugin
const typography = new Typography({
  baseFontSize: '12px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Space Mono'],

})
typography.toString()
typography.injectStyles()

const Layout = ({ children, data }) => (
  <div>
    <Sidebar  />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Header  />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
