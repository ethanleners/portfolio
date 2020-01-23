import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { below } from "../utilities"
import { Title1, Text1, Text1List } from "./molecule"


const EthanMain = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "EthanLenerspic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 400) {
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

  const List = styled.div`
    ${props => `
      background: ${props.theme.colors.overlay};
      color: ${props.theme.colors.text};
    `}
    font-family: Montserrat, Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    padding: 20px;
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

  const TextTitle = styled(Text1)`
    font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    padding: 5px 0;
  `

  return (
    <Card>
      <EthanImage fluid={data.placeholderImage.childImageSharp.fluid} />
      <Bio>
        <Title1>I’m Ethan Leners</Title1>
        <TextTitle>UI | UX DESIGNER</TextTitle>
        <TextTitle>WRITER</TextTitle>
        <List>
          <Text1List>*long-time people pleaser</Text1List>
          <Text1List>*advocate for accessibility</Text1List>
          <Text1List>*disciple of good design</Text1List>
          <Text1List>*dedicated problem solver</Text1List>
          <Text1List>*habitual list-maker</Text1List>
        </List>
      </Bio>
    </Card>
  )
}

export default EthanMain
