import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const List = styled.li`
  list-style: none;
  font-weight: ${props => (props.submenu ? "light" : "bold")};
	padding-top: ${props => (props.submenu ? "3px" : "15px")};
	padding-bottom: 3px;
	text-align: center;
  a {
    text-decoration: none;
		color: inherit;
		&:visited{
			color: inherit;
		}
  }
`

const MenuItem = ({ to, label, submenu}) => {
  if (submenu) {
    return (
      <List submenu >
        <Link to={to}>{label}</Link>
      </List>
    )
  }
  return (
    <List >
      <Link to={to}>{label}</Link>
    </List>
  )
}

export default MenuItem
