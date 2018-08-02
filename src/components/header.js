import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

//* Styles */
const HeaderWrapper = styled.div`
  background:#232537;
  max-width:140px;
  height:100vh;
  padding:40px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  text-align:center;
  color:#FDCB25;
  position:fixed;
  right:0;
`
const MenuList = styled.ul`
  margin: 0;
  list-style:none i {
    font-size: 20px;
  }
`
const MenuLi = styled.li`
  overflow: hidden;
  margin-bottom: 16px;
  ::after {
    content: ' ';
    border-top: 1px solid #fdcb25;
    width: 0;
    display: inline-block;
    transform: translateX(16px);
    transition: all 0.2s cubic-bezier(0.42, 0.01, 0.23, 1);
    margin-left: 9px;
    width: 15px;
  }
  :hover {
    ::after {
      transform: translateX(0px);
    }
  }
`

const Header = () => (
  <HeaderWrapper>
    <MenuList style={{ textAlign: 'right' }}>
      <MenuLi>
        <Link to="/about">About</Link>
      </MenuLi>
      <MenuLi>
        <Link to="/">Inspire</Link>
      </MenuLi>
      <MenuLi>
        <Link to="/submit">Submit</Link>
      </MenuLi>
    </MenuList>
    <MenuList>
      <li>
        <a href="//twitter.com/AiJavaScript" target="_blank" >
          <i className="icon-twitter" />
        </a>
      </li>
      <li>
        <a href="//github.com/aijavascript/aijs.rocks" target="_blank" >
          <i className="icon-github" />
        </a>
      </li>
    </MenuList>
  </HeaderWrapper>
)

export default Header
