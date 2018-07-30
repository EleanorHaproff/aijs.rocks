import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Headroom from 'react-headroom'

import Logo from '../media/svgs/aiji-logo.svg'

//* Styles */
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(245, 243, 247);
  padding: 16px 32px;
  background: white;
  img {
    height: 40px;
    margin: 0;
  }
  i {
    font-size: 16px;
  }
`
const MenuWrapper = styled.div`
  background: white;
  position: fixed;
  max-width: 100%;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 10000;
  top: 0;
`
class HeaderResponsive extends Component {
  constructor() {
    super()
    this.state = {
      menuOpened: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu = () => {
    this.setState({ menuOpened: !this.state.menuOpened })
  }
  render() {
    return (
      <div>
        <Headroom>
          <HeaderWrapper>
            <img src={Logo} alt="aiji-logo" />
            <i onClick={this.toggleMenu} className="icon-menu" />
          </HeaderWrapper>
        </Headroom>
        {this.state.menuOpened ? (
          <MenuWrapper>
            <ul>
              <li>About</li>
              <li>Inspire</li>
              <li>Submit</li>
            </ul>
            <hr />
            <ul>
              <li>
                <a href="//twitter.com">
                  <i className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="//github.com">
                  <i className="icon-github" />
                </a>
              </li>
            </ul>
            <hr />
            <p>
              Built by <Link to="/">El</Link>, <Link to="/">Asim</Link>,{' '}
              <Link to="/">Osama</Link> - hosted on <Link to="/">Azure</Link>
            </p>
          </MenuWrapper>
        ) : null}
      </div>
    )
  }
}
export default HeaderResponsive
