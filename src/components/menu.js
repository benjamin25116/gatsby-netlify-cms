import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"



const MenuList = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;
list-style: none;
a {
  text-decoration: none;
}
li {
  list-style: none;
}
`


const Navigation = styled.nav`
width: 100%`

const Menu = () => {
  return (
    <Navigation>
      <MenuList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>
            About Us
            <ul>
              <li>
                <Link to="/beliefs">What We Believe</Link>
              </li>
              <li>
                <Link to="/pastor-elisha">Pastor Elisha Satvinder</Link>
              </li>
              <li>
                <Link to="/petrina">Petrina Satvinder</Link>
              </li>
              <li>
                <Link to="/pastor-foo-seng">Pastor Foo Seng</Link>
              </li>
            </ul>
          </Link>
        </li>
        <li>
          <Link>
            Ministries
            <ul>
              <li>
                <Link to="/worship">Worship Team</Link>
              </li>
              <li>
                <Link to="/sunday-school">Sunday School</Link>
              </li>
              <li>
                <Link to="/geny">Gen.Y Youth</Link>
              </li>
              <li>
                <Link to="/young-adults">Young Adults</Link>
              </li>
              <li>
                <Link to="/connect-groups">Connect Groups</Link>
              </li>
            </ul>
          </Link>
        </li>
        <li>
          <Link to="/message">Messages</Link>
        </li>
        {/* <li>
          <Link to="/gallery">Gallery</Link>
        </li> */}
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </MenuList>
    </Navigation>
  )
}

export default Menu
