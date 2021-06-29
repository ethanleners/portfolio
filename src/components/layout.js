import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { theme } from "../utilities/Theme"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { Location } from "@reach/router"

import EthanMain from "../components/home/ethanMain"
import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};

  .active {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.emphasis};
  }
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
    <ThemeProvider theme={theme}>
      <Location>
        {({ location }) => (
          <>
            <GlobalStyle />
            <Header
              location={location}
              siteTitle={data.site.siteMetadata.title}
            />
            <EthanMain />

            <Main>{children}</Main>
            <Footer />
          </>
        )}
      </Location>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
