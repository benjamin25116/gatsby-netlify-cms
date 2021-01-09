import React from "react"
import Logo from "../../content/assets/ncc-logo.svg"

import Menu from "./menu"

const Header = () => {
  return (
    <header>
      <img
        src={Logo}
        alt="Logo of NCC: the words 'New Covenant Community' shaped as a circle."
      />
      <Menu />
    </header>
  )
}

export default Header
