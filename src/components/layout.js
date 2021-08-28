import React from "react"
import Header from "./header"
import styled from "styled-components"

const Wrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </Wrapper>
  )
}

export default Layout
