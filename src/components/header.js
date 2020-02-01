import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { below } from "../utilities"

const Header = ({ siteTitle }) => {
  let location
  try {
    location = window.location.pathname.slice(1)
  } catch {
    console.log("Window not defined")
    location = ""
  }

  const MainHeader = styled.header`
    ${props => `background: ${props.theme.colors.header};`};
    height: 50px;
    width: 100%;
    font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
  `

  const MenuLink = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0;
    padding: 0 20px;
    box-sizing: border-box;

    ${below[600]`
      padding: 0 10px;
    `}
    ${below[500]`
      /* padding: 0 5px; */
    `}
  `

  const EthanName = styled(MenuLink)`
    ${props => `
      background: ${location === "" ? props.theme.colors.accent : "none"};
      color: ${props.theme.colors.text};
      `};
  `

  const Portfolio = styled(MenuLink)`
    ${props => `
      background: ${
        location === "portfolio" ? props.theme.colors.accent : "none"
      };
      color: ${props.theme.colors.text};
    `};
  `

  const Resume = styled(MenuLink)`
    ${props => `
      background: ${location === "resume" ? props.theme.colors.accent : "none"};
      color: ${props.theme.colors.text};
    `};
  `

  // const Blog = styled(MenuLink)`
  //   ${props => `
  //     background: ${location === "blog" ? props.theme.colors.accent : "none"};
  //     color: ${props.theme.colors.text};
  //   `};
  // `

  const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    font-size: 24px;
    ${below[600]`
      font-size: 18px;
    `}
    ${below[400]`
      font-size: 16px;
    `}
  `

  const FlexRowOuter = styled(FlexRow)`
    padding-right: 20px;

    ${below[600]`
      padding-right: 10px;
    `}
    ${below[500]`
      padding-right: 5px;
    `}
  `

  return (
    <MainHeader>
      <FlexRowOuter>
        <EthanName to="/" style={{}}>
          Ethan Leners
        </EthanName>
        <FlexRow>
          <Portfolio to="/portfolio">Portfolio</Portfolio>
          <Resume to="/resume">Resume</Resume>
          {/* <Blog to="/">Blog</Blog> */}
        </FlexRow>
      </FlexRowOuter>
    </MainHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
