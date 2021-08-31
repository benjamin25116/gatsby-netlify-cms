import React from "react"
import styled from "styled-components"

import MenuItem from "./menuItem"

const StyledMenu = styled.ul``

const menuItems = [
  // { destination: "/", label: "Home", subMenu: "" },
  {
    // destination: "",
    label: "About",
    subMenu: [
      { destination: "/beliefs", label: "What we Believe" },
      { destination: "/pastor-elisha", label: "Pastor Elisha" },
      { destination: "/petrina", label: "Petrina" },
      { destination: "/pastor-foo-seng", label: "Pastor Foo Seng" },
    ],
  },
  {
    // destination: "",
    label: "Ministries",
    subMenu: [
      { destination: "/worship", label: "Worship Team" },
      { destination: "/sunday-school", label: "Sunday School" },
      { destination: "/geny", label: "Youth" },
      { destination: "/young-adults", label: "Young Adults" },
      { destination: "/connect-groups", label: "Connect Groups" },
    ],
  },
  { destination: "/message", label: "Messages", subMenu: "" },
  { destination: "/contact", label: "Contact", subMenu: "" },
]

const Menu = () => {
  return (
    <StyledMenu>
      {menuItems.map(item => {
        if (item.subMenu === "") {
          return (
            <MenuItem
              key={item.label}
              to={item.destination}
              label={item.label}
            />
          )
        }
        return (
          <>
            <MenuItem key={item.label} label={item.label} />
            {item.subMenu.map(subMenu => {
              return (
                <MenuItem
                  key={subMenu.label}
                  to={subMenu.destination}
                  label={subMenu.label}
                  submenu={true}
                />
              )
            })}
          </>
        )
      })}
    </StyledMenu>
  )
}

export default Menu
