import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => {
  const MainHeader = styled.header`
    ${props => `background: ${props.theme.colors.header};`};
    height: 100px;
  `

  const EthanName = styled(Link)`
    ${props => `
      background: ${props.theme.colors.accent};
      color: ${props.theme.colors.text};
      `};
    text-decoration: none;
    font-size: 34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
  `

  const MenuItem = styled(Link)`
    ${props => `
      /* background: ${props.theme.colors.accent}; */
      color: ${props.theme.colors.text};
    `};
    text-decoration: none;
    font-size: 34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
  `

  const Flex1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    font-size: 34px;
    padding-right: 20px;
  `

  const Flex2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    font-size: 34px;
  `

  return (
    <MainHeader>
      <Flex1>
        <EthanName to="/" style={{}}>
          Ethan Leners
        </EthanName>
        <Flex2>
          <MenuItem to="/">Portfolio</MenuItem>
          <MenuItem to="/">Resume</MenuItem>
          <MenuItem to="/">Blog</MenuItem>
        </Flex2>
      </Flex1>
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
