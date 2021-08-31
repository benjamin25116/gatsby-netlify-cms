import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Logo from "../../content/assets/ncc-logo.svg"
import Menu from "./menu"

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  z-index: 1;
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledLogo = styled.img`
  height: 80px;
  width: 80px;
`

const MenuButton = styled.a`
  padding: 30px 20px;
`

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      showMenu: false,
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu,
      }
    })
  }

  render() {
    let menu = this.state.showMenu ? <Menu /> : null

    return (
      <Navigation>
        <NavBar>
          <Link to="/">
            <StyledLogo src={Logo} alt="New Covenant Community Church logo." />
          </Link>
          <MenuButton onClick={this.handleClick}>Menu</MenuButton>
        </NavBar>
        {menu}
      </Navigation>
    )
  }
}

export default Header
