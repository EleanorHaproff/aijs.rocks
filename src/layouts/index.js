import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Typography from 'typography'
import styled from 'styled-components'

import Header from '../components/header'
import Sidebar from '../components/sidebar'

import './index.css'
import BgPattern from '../media/bg_pattern.png';

// Customize Typography Plugin
const typography = new Typography({
  baseFontSize: '12px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Space Mono'],

})
typography.toString()
typography.injectStyles()

const AppWrapper = styled.div`
  display:flex;
`
const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 40px;
  height: 100vh;
  overflow: scroll;
  background-image:url('${BgPattern}');
  background-size: 150px;
`
const Layout = ({ children, data }) => (
  <AppWrapper>
    <Sidebar  />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <ContentWrapper>
      {children()}
    </ContentWrapper>
    <Header  />
  </AppWrapper>
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
