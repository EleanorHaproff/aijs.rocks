import React, {Component} from 'react'
import Link from 'gatsby-link'
import styled, {css} from 'styled-components'
import Headroom from 'react-headroom';

import Logo from '../media/svgs/aiji-logo.svg'

//* Styles */
const HeaderWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-bottom: 1px solid rgb(245, 243, 247);
  padding:16px 32px;
  background:white;
  img{
    height: 40px;
    margin:0;
  }
  i{
    font-size:16px;
    cursor: pointer;
  }
`
const MenuWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  background:white;
  text-align:center;
  position: fixed;
  max-width: 100%;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 10000;
  top: 0;
  padding:16px;
  opacity:0;
  transform: translate3d(0, -110vh, 0);
  transition: all .3s ease-in-out;
  ${props => props.opened && css`
    opacity: 1;
    transform: translate3d(0, 0, 0);
  `}
`
const CloseIcon = styled.span`
  font-size: 16px;
  text-align:right;
  cursor: pointer;
`
const Menu = styled.ul`
  list-style: none;
  font-size:16px;
  font-weight:bold;
  line-height:64px;
`
const SocialMedia = styled.ul`
  list-style: none;
  font-size:22px;
  display:flex;
  justify-content:center;
  li{
    margin:0 8px;
  }
`
class HeaderResponsive extends Component {
  constructor() {
    super();
    this.state = { 
      menuOpened: false
    };
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu = () =>{
    this.setState({menuOpened: !this.state.menuOpened})
  }
  render(){
    return(
      <div>
        <Headroom>
          <HeaderWrapper>
            <img src={Logo} alt="aiji-logo"/>
              <i onClick={this.toggleMenu} className="icon-menu"/>
          </HeaderWrapper>
        </Headroom>
          <MenuWrapper opened={this.state.menuOpened}>
            <div style={{textAlign:'right'}}>
              <CloseIcon onClick={this.toggleMenu}>✖</CloseIcon>
            </div>
            <Menu>
              <li>About</li>
              <li>Inspire</li>
              <li>Submit</li>
            </Menu>
            <SocialMedia>
              <li><a href="//twitter.com"><i className="icon-twitter" /></a></li>
              <li><a href="//github.com"><i className="icon-github" /></a></li>
            </SocialMedia>
            <p>Built by <Link to="/">El</Link>, <Link to="/">Asim</Link>, <Link to="/">Osama</Link>  -  hosted on <Link to="/">Azure</Link></p>
          </MenuWrapper>
      </div>
    )
  }
}
export default HeaderResponsive
