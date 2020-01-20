import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { below } from "../utilities"

const EthanMain = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "EthanLenerspic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Card = styled.div`
    ${props => `
      background: linear-gradient(90deg, ${props.theme.colors.background} 10%, ${props.theme.colors.overlay} 10%);
      color: ${props.theme.colors.text};
      `}

    ${below[900]`
      flex-direction: column;
      margin: 5%;

      ${props => `
        background: linear-gradient(180deg, ${props.theme.colors.background} 10%, ${props.theme.colors.overlay} 10%);
        color: ${props.theme.colors.text};
        `}
    `}

    ${below[600]`
      flex-direction: column;
      margin: 1%;
      padding: 5%;
    `}

    margin-top: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `

  const Bio = styled.div`
    ${below[900]`
      flex-direction: column;
      width: auto;
      padding: 50px 0;
    `}
    ${below[600]`
      flex-direction: column;
      padding: 20px 0;
    `}
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
    ${below[600]`
      font-size: 36px;
      line-height: 55px;
    `}
    font-size: 48px;
    line-height: 70px;
  `

  const Title = styled.div`
    ${props => `
      color: ${props.theme.colors.text};
    `}
    ${below[600]`
      font-size: 16px;
      line-height: 27px;
    `}
    font-size: 24px;
    line-height: 35px;
  `

  const List = styled.ul`
    ${props => `
      background: ${props.theme.colors.overlay};
      color: ${props.theme.colors.text};
    `}
    font-family: Montserrat, Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    padding: 20px;

    li {
      list-style-type: none;
      font-size: 24px;
      line-height: 50px;
      ${below[900]`
        line-height: 30px;
        padding-bottom: 20px;
      `};
      ${below[600]`
        font-size: 16px;
        padding-bottom: 10px;
      `}
    }
  `
  const EthanImage = styled(Img)`
    max-width: 300px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    ${below[600]`
      margin: 20px;
    `}
    ${below[400]`
      margin: 20px 60px;
    `}
  `

  return (
    <Card>
      <EthanImage fluid={data.placeholderImage.childImageSharp.fluid} />
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
