import React from "react"
import styled from "styled-components"
import {NavLink} from "./shared/navLink";

const Header = styled.header`
width:100%;
display:flex;
flex-direction:row;
align-items: center;
justify-content: space-between;
margin-bottom:1em;
`

const Logo = styled.div`
  font-size:28px;
  font-weight:700;
`

const Nav = styled.nav`
  display:flex;
  flex-direction:row;
  align-items:center;
`

const Layout = ({ children }) => {
  
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <Header>
        <Logo>{'<kecman/>'}</Logo>
        <Nav>
          <NavLink link="/blog">Blog</NavLink>
          <NavLink link="/projects">Projects</NavLink>
          <NavLink link="/about">About</NavLink>
        </Nav>
      </Header>

      <main style={{
        maxWidth: '680px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
      {children}
      </main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
