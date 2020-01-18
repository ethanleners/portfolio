import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { below } from "../utilities"

const Header = ({ siteTitle }) => {
  const MainHeader = styled.header`
    ${props => `background: ${props.theme.colors.header};`};
    height: 50px;
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
      padding: 0 5px;
    `}
  `

  const EthanName = styled(MenuLink)`
    ${props => `
      background: ${props.theme.colors.accent};
      color: ${props.theme.colors.text};
      `};
  `

  const MenuItem = styled(MenuLink)`
    ${props => `
      color: ${props.theme.colors.text};
    `};
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

  return (
    <MainHeader>
      <FlexRowOuter>
        <EthanName to="/" style={{}}>
          Ethan Leners
        </EthanName>
        <FlexRow>
          <MenuItem to="/">Portfolio</MenuItem>
          <MenuItem to="/">Resume</MenuItem>
          <MenuItem to="/">Blog</MenuItem>
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
