import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Typography from 'typography'
import styled from 'styled-components'

import Header from '../components/header'
import HeaderResponsive from '../components/header-responsive'
import Sidebar from '../components/sidebar'
import MenuResponsive from '../components/menu-responsive'


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
  overflow: scroll;
  background-image:url('${BgPattern}');
  background-size: 150px;
  @media (max-width: 768px) {
    height: initial;
    overflow: initial;
  }
`
class Layout extends Component {
  constructor() {
    super();
    this.state = { 
      width: window.innerWidth,
      menuOpened: false
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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <ContentWrapper>
          {this.props.children()}
        </ContentWrapper>
        {width > 768?<Header  />: <MenuResponsive />}
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
