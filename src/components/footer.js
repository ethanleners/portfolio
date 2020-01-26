import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { below } from "../utilities"

import facebook from "../images/Facebook.svg"
import twitter from "../images/Twitter.svg"
import email from "../images/Email.svg"
import instagram from "../images/Instagram.svg"

const links = {
  facebook: "#",
  twitter: "#",
  email: "#",
  instagram: "#",
}

const icons = {
  facebook: facebook,
  twitter: twitter,
  email: email,
  instagram: instagram,
}

const Footer = () => {
  const MainFooter = styled.footer`
    ${props => `background: ${props.theme.colors.header};`};
    height: 50px;
  `

  const A = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0;
    padding: 0 10px;
    box-sizing: border-box;
  `

  const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    float: right;
    padding-right: 20px;
    font-size: 24px;
  `

  const SocialLink = props => (
    <A href={links[props.link]} rel="noopener norefferer" target="_blank">
      <img src={icons[props.link]} alt={`link to {props.link}`} />
    </A>
  )

  return (
    <MainFooter>
      <FlexRow>
        <SocialLink link="facebook" />
        <SocialLink link="twitter" />
        <SocialLink link="email" />
        <SocialLink link="instagram" />
      </FlexRow>
    </MainFooter>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
