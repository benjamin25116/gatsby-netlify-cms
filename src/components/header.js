import React from "react"
import styled from "styled-components"

import Logo from "../../content/assets/ncc-logo.svg"
import Menu from "./menu"

const Navigation = styled.header`
display: flex;
flex-direction: row;
`

const Header = () => {
  return (
    <Navigation>
      <img
        src={Logo}
        alt="New Covenant Community Church logo."
        style={{width: '150px'}}
      />
      <Menu />
    </Navigation>
  )
}

export default Header
