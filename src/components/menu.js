import React from "react"
import { Link } from "gatsby"
import Dropdown from "./dropdown"

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>
            About Us
            <Dropdown>
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
            </Dropdown>
          </Link>
        </li>
        <li>
          <Link>
            Ministries
            <Dropdown>
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
            </Dropdown>
          </Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link>Contact us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
