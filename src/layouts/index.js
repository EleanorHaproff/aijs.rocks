import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Typography from 'typography'
import styled from 'styled-components'

import Header from '../components/header'
import HeaderResponsive from '../components/header-responsive'
import Sidebar from '../components/sidebar'


import './index.css'
import BgPattern from '../media/bg_pattern.png';

// Customize Typography Plugin
const typography = new Typography({
  baseFontSize: '12px',
  baseLineHeight: 1.666,
  headerFontFamily: ["Space Mono", "monospace"],
  bodyFontFamily: ["Space Mono", "monospace"],
})
// var css = typography.toString()
typography.injectStyles()
const AppWrapper = styled.div`
  display:flex;
  background-image:url('${BgPattern}');
  background-size: 150px;
  overflow: auto;
  @media (max-width: 768px) {
    flex-direction:column;
  }
`
const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 40px;
  height: 100vh;
  width: calc(100% - 280px);
  @media (max-width: 768px) {
    width: 100%;
  }
`
class Layout extends Component {
  constructor() {
    super();
    this.state = { 
      width: typeof window !== `undefined`? window.innerWidth: 1000
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }
  render() {
    const {width} = this.state
    return (
      <AppWrapper>
        {width > 768? <Sidebar  />: <HeaderResponsive />}
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Space+Mono:400,700' },
          ]}
        />
        <ContentWrapper>
          {this.props.children()}
        </ContentWrapper>
        {width > 768?<Header  />: null}
      </AppWrapper>
    )}
}

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
