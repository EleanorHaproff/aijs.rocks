import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import Typography from 'typography'
import styled from "styled-components";

import Header from "../components/header";
import HeaderResponsive from "../components/header-responsive";
import Sidebar from "../components/sidebar";
import Favicon from "../media/favicons/favicon.ico";

import "./index.scss";
import "../media/icons/style.css";
import BgPattern from "../media/bg_pattern.png";
import Banner from "../media/banner.png";

// Syntax Highlighting
require("prismjs/themes/prism-tomorrow.css");
import "./prism.css";

// Customize Typography Plugin
// const typography = new Typography({
//   baseFontSize: '16px',
//   baseLineHeight: 1.55,
//   headerFontFamily: ['Space Mono', 'monospace'],
//   bodyFontFamily: ['Space Mono', 'monospace'],
// })
// typography.toString()
// var css = typography.toString()
// typography.injectStyles()

//TODO figure some way to turn this into a conditional import
import "./typography.css";

const AppWrapper = styled.div`
  display:flex;
  background-image:url('${BgPattern}');
  background-size: 150px;
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;
const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 40px;
  width: calc(100% - 280px);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
class Layout extends Component {
  constructor() {
    super();
    this.state = {
      width: typeof window !== `undefined` ? window.innerWidth : 1000,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    this.setState({
      width: window.innerWidth,
    });
  }
  render() {
    const { width } = this.state;
    const { description, url, title } = this.props.data.site.siteMetadata;

    const facebookMeta = [
      {
        name: "og:title",
        content: `${title}`,
      },
      {
        name: "og:site_name",
        content: `${title}`,
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "og:url",
        content: `${url}`,
      },
      {
        name: "og:description",
        content: `${description}`,
      },
      {
        name: "og:image",
        content: `${Banner}`,
      },
    ];

    const twitterMeta = [
      {
        name: "twitter:site",
        content: `${url}`,
      },
      {
        name: "twitter:creator",
        content: "Elle Haproff",
      },
      {
        name: "twitter:title",
        content: `${title}`,
      },
      {
        name: "twitter:image",
        content: `${Banner}`,
      },
    ];
    return (
      <AppWrapper>
        {width > 768 ? <Sidebar /> : <HeaderResponsive />}
        <Helmet
          title={title}
          meta={[
            {
              rel: "stylesheet",
              href:
                "https://fonts.googleapis.com/css?family=Space+Mono:400,700",
            },
            {
              name: "description",
              content: `${description}`,
            },
            {
              name: "keywords",
              content:
                "ai, machine learning, javascript, artificial intelligence, neural networks, js, tensorflow.js, posenet, mobilenet, ",
            },
            { property: "theme-color", content: "#fdcb25" },
            ...twitterMeta,
            ...facebookMeta,
          ]}
          link={[
            { rel: "shortcut icon", type: "image/png", href: `${Favicon}` },
          ]}
        />
        <ContentWrapper>{this.props.children()}</ContentWrapper>
        {width > 768 ? <Header /> : null}
      </AppWrapper>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
