import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import Header from "./header"
import "./layout.css"

const EthanMain = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "EthanLenersHeadshot.png" }) {
        childImageSharp {
          fixed(width: 300, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const Card = styled.div`
    ${props => `
      height: 100%;
      background: linear-gradient(90deg, ${props.theme.colors.background} 10%, ${props.theme.colors.overlay} 10%);
      background: ;
      color: ${props.theme.colors.text};
      `}
    margin-top: 80px;
    /* height: 500px; */
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `

  const Bio = styled.div`
    width: calc(100% - 300px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 50px 100px;
    box-sizing: border-box;
  `

  const Intro = styled.div`
    ${props => `
      color: ${props.theme.colors.secondary};
    `}
    font-size: 48px;
    line-height: 70px;
  `

  const Title = styled.div`
    ${props => `
      color: ${props.theme.colors.text};
    `}
    font-size: 24px;
    line-height: 35px;
  `

  const List = styled.ul`
    ${props => `
      background: ${props.theme.colors.overlay};
      color: ${props.theme.colors.text};
      `}
    font-family: Montserrat;
    font-size: 24px;
    line-height: 50px;
    width: 100%;
    padding: 20px;

    li {
      list-style-type: none;
    }
  `

  return (
    <Card>
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      <Bio>
        <Intro>I’m Ethan Leners</Intro>
        <Title>UI | UX DESIGNER</Title>
        <Title>WRITER</Title>
        <List>
          <li>*long-time people pleaser</li>
          <li>*advocate for accessibility</li>
          <li>*disciple of good design</li>
          <li>*dedicated problem solver</li>
          <li>*habitual list-maker</li>
        </List>
      </Bio>
    </Card>
  )
}

export default EthanMain
