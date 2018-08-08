import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Tag } from '../globalStyles'
import Logo from '../media/svgs/aiji-logo.svg'
import FooterIcon from '../media/svgs/footer-icon.svg'
import { pageQuery } from '../pages/index'

//* Styles */
const SidebarWrapper = styled.div`
  width: 140px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  text-align: center;
  color: #fdcb25;
  position: fixed;
  left: 0;
  p {
    font-size: 14px;
  }
`
const LogoImg = styled.img`
  width: 76px;
  margin-bottom: 32px;
`
const Hr = styled.hr`
  height: 4px;
  background: #232537;
  width: 40px;
`
const TagsWrapper = styled.ul`
  margin: 0;
  list-style: none;
`
const FooterWrapper = styled.div`
  position: relative;
  :hover p {
    visibility: visiable;
    opacity: 1;
  }
  p {
    opacity: 0;
    position: absolute;
    top: 8px;
    left: 40px;
    width: 328px;
    background: #232537;
    color: #fdcb25;
    border-radius: 4px;
    font-size: 10px;
    padding: 2px 0;
    visibility: none;
    opacity: 0;
    transition: all 0.3s ease-in;
    :hover {
      visibility: visiable;
      opacity: 1;
    }
  }
  a {
    color: #49e1c2;
  }
`
const FooterImg = styled.img`
  width: 32px;
  margin: 0;
`
const Sidebar = () => (
  <SidebarWrapper>
    <div>
      <Link to="/">
        <LogoImg src={Logo} alt="aiji-logo" />
      </Link>
      {/* Will be added later..
      <h4 style={{marginBottom: 8, textAlign:'left'}}>Popular Tags</h4>
      <Hr/>
      <TagsWrapper>
        <Tag><Link to="/">tensorFlow.js</Link></Tag>
        <Tag><Link to="/">magenta.js</Link></Tag>
        <Tag><Link to="/">ml5</Link></Tag>
        <Tag><Link to="/">azure</Link></Tag>
        <Tag><Link to="/">google cloud</Link></Tag>
      </TagsWrapper> */}
      <p>A curated collection of inspirational AI-powered JavaScript apps</p>
    </div>
    <FooterWrapper>
      <FooterImg src={FooterIcon} alt="footer-icon" />
      <p>
        Built by{' '}
        <a target="_blank" href="https://twitter.com/EleanorHaproff">
          Elle
        </a>,{' '}
        <a target="_blank" href="https://twitter.com/jawache">
          Asim
        </a>,{' '}
        <a target="_blank" href="https://twitter.com/osama_jandali">
          Osama
        </a>{' '}
        - hosted on{' '}
        <a
          target="_blank"
          href="https://azure.microsoft.com/free/search/?WT.mc_id=aijsrocks-site-ashussai"
        >
          Azure
        </a>
      </p>
    </FooterWrapper>
  </SidebarWrapper>
)

export default Sidebar
