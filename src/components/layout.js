import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import colors from "../utilities/Colors"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #191A2A;
}
`

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
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 1.45rem;
  `

  return (
    <ThemeProvider theme={{ colors }}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
