import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import colors from "../utilities/Colors"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Main = styled.main`
    background: #191a2a;
    font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    ${props => `
      color: ${props.theme.colors.text};
      `};
    box-sizing: border-box;
    height: 100%;
  `

  return (
    <ThemeProvider theme={{ colors }}>
      <Main>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </Main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
