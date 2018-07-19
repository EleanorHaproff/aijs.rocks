import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Logo from '../media/aiji-logo.svg';

//* Styles */
const SidebarWrapper = styled.div`
  // background:#232537;
  width:140px;
  height:100vh;
  position:fixed;
  top:0;
  left:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:40px 0;
  text-align:center;
  color:#FDCB25;
`
const LogoImg = styled.img`
  width: 76px;
`

const Sidebar = () => (
  <SidebarWrapper>
      <LogoImg src={Logo} alt="aiji-logo"/>
      <div>
        <h4>Popular Tags</h4>
      </div>
  </SidebarWrapper>
)

export default Sidebar
