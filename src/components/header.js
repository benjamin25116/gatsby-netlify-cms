import React from "react"
import Logo from "../../content/assets/ncc-logo.svg"

import Menu from "./menu"

const Header = () => {
  return (
    <header>
      <img
        src={Logo}
        alt="New Covenant Community Church logo."
      />
      <Menu />
    </header>
  )
}

export default Header
