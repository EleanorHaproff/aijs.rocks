import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Tag } from '../globalStyles';
import Logo from '../media/svgs/aiji-logo.svg';
import FooterIcon from '../media/svgs/footer-icon.svg';

//* Styles */
const SidebarWrapper = styled.div`
  width:140px;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  padding:40px;
  text-align:center;
  color:#FDCB25;
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
  margin:0;
  list-style:none;
`
const FooterWrapper = styled.div`
  position: relative;
  :hover p{
    visibility: visiable;
    opacity:1;
  }
  p{
    opacity:0;
    position: absolute;
    top: 8px;
    left: 40px;
    width: 328px;
    background: #232537;
    color:#FDCB25;
    border-radius: 4px;
    font-size: 10px;
    padding: 2px 0;
    visibility: none;
    opacity:0;
    transition: all .3s ease-in;
    :hover{
      visibility: visiable;
      opacity:1;
    }
  }
  a{
    color:#49e1c2;
  }
`
const FooterImg = styled.img`
  width: 32px;
  margin:0;
`
const Sidebar = () => (
  <SidebarWrapper>
    <div>
      <LogoImg src={Logo} alt="aiji-logo"/>
      <h4 style={{marginBottom: 8, textAlign:'left'}}>Popular Tags</h4>
      <Hr/>
      <TagsWrapper>
        <Tag><Link to="/">tensorFlow.js</Link></Tag>
        <Tag><Link to="/">magenta.js</Link></Tag>
        <Tag><Link to="/">ml5</Link></Tag>
        <Tag><Link to="/">azure</Link></Tag>
        <Tag><Link to="/">google cloud</Link></Tag>
      </TagsWrapper>
    </div>
    <FooterWrapper>
      <FooterImg src={FooterIcon} alt="footer-icon"/>
      <p>Built by <Link to="/">El</Link>, <Link to="/">Asim</Link>, <Link to="/">Osama</Link>  -  hosted on <Link to="/">Azure</Link></p>
    </FooterWrapper>
  </SidebarWrapper>
)

export default Sidebar
