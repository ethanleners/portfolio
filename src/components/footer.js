import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import linkedin from "../images/social_linkedin.svg"
import twitter from "../images/social_twitter.svg"
import email from "../images/social_email.svg"
import instagram from "../images/social_instagram.svg"

const links = {
  linkedin: "https://www.linkedin.com/in/ethanleners",
  twitter: "https://twitter.com/EthanLeners",
  email: "mailto:ethan.leners@gmail.com?subject=Reaching Out from Your Website",
  instagram: "https://www.instagram.com/ethanleners/",
}

const icons = {
  linkedin: linkedin,
  twitter: twitter,
  email: email,
  instagram: instagram,
}

const Footer = () => {
  const MainFooter = styled.footer`
    ${props => `background: ${props.theme.colors.header};`};
    height: 50px;
    margin-top: 100px;
  `

  const A = styled.a`
    ${props => `color: ${props.theme.colors.accent};`};
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
        <SocialLink link="linkedin" />
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
