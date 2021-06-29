import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import styled from "styled-components"
import { below } from "../utilities"

const Header = ({ siteTitle, location }) => {
  const MainHeader = styled.header`
    ${props => `background: ${props.theme.colors.header};`};
    ${props => `font-family: ${props.theme.fonts.header};`};
    height: 50px;
    width: 100%;
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

    ${props => `
      background: none;
      color: ${props.theme.colors.accent};
    `};
  `

  const Portfolio = styled(MenuLink)`
    ${props =>
      location.href
        ? `background: ${
            location.href.indexOf("/portfolio/") >= 0
              ? props.theme.colors.accent
              : "none"
          };
      color: ${
        location.href.indexOf("/portfolio/") >= 0
          ? props.theme.colors.emphasis
          : props.theme.colors.accent
      };
      height: 100%;
    `
        : ``};
  `

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

  const handleClick = e => {
    e.preventDefault()
    setShowNav(showNav => !showNav)
  }

  const PortfolioLinks = styled.div`
    height: 100%;
    position: relative;

    transform: translateY(-200px);
    ${props =>
      props.showNav
        ? `
    transform: translateY(0px);
    z-index: 1000;
    `
        : ``}
  `

  const PortfolioLink = styled(MenuLink)`
    ${props => `
      border: 1px solid ${props.theme.colors.secondary};
      border-bottom: none;
      color: ${props.theme.colors.secondary};

      &:last-of-type {
        border-bottom: 1px solid ${props.theme.colors.secondary};;
      }

      &:hover {
      color: ${props.theme.colors.emphasis};
      background: ${props.theme.colors.secondary};
    }    `}
    z-index: 1000;
    background: #ffffff;
    position: relative;
    align-items: center;
    box-sizing: border-box;
  `

  const [showNav, setShowNav] = useState(false)

  return (
    <MainHeader>
      <FlexRowOuter>
        <MenuLink activeClassName="active" to="/" style={{}}>
          Ethan Leners
        </MenuLink>
        <FlexRow>
          <div style={{ height: "100%" }}>
            <Portfolio
              to="/portfolio"
              activeClassName="active"
              onClick={handleClick}
            >
              Portfolio
            </Portfolio>
            <PortfolioLinks showNav={showNav}>
              <PortfolioLink to="/portfolio/friendly/">Friendly</PortfolioLink>
              <PortfolioLink to="/portfolio/notice/">Notice</PortfolioLink>
            </PortfolioLinks>
          </div>

          <MenuLink activeClassName="active" to="/resume/">
            Resume
          </MenuLink>
          {/* <MenuLink activeClassName="active" to="/blogposts/">
            Blog
          </MenuLink> */}
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
