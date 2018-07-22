import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Logo from '../media/svgs/aiji-logo.svg'

//* Styles */
const HeaderWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:fixed;
  left:0;
  bottom:0;
  background: #fbfafc;
  width:100%;
  border-bottom: 1px solid rgb(245, 243, 247);
  padding:16px 32px;
`
const Tab = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  img{
      
    height: 32px;
    margin:0;
  }
`
const MenuResponsive = () => (
  <HeaderWrapper>
    <Tab>
      <img src={Logo} alt="aiji-logo"/>
      <span>About</span>
    </Tab>
    <Tab>
      <img src={Logo} alt="aiji-logo"/>
      <span>Inspire</span>
    </Tab>
    <Tab>
      <img src={Logo} alt="aiji-logo"/>
      <span>Submit</span>
    </Tab>
    <Tab>
      <img src={Logo} alt="aiji-logo"/>
      <span>Tags</span>
    </Tab>
  </HeaderWrapper>
)
export default MenuResponsive
