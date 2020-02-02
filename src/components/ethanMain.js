import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { below } from "../utilities"
import { Title1, Text1, Text1List, Card, HigherCard } from "./molecule"

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

  const EthanBackgroundCard = styled(Card)`
    ${below[900]`
      box-shadow: none;
      width: 10%;
      height: 10%;
      display: none;
    `}
    position: absolute;
    width: 90%;
    height: 100%;
    top: -40px;
    left: 10%;
    z-index: -1;
  `

  const EthanMainCard = styled(Card)`
    ${below[900]`
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 3px 10px rgba(0, 0, 0, 0.12), 0px 6px 6px rgba(0, 0, 0, 0.06);
      flex-direction: column;
      margin: 5%;
    `}

    ${below[600]`
      flex-direction: column;
      margin: 30px 1%;
      margin-top: 5%;
      padding: 10px;
    `}

    box-shadow: none;
    padding: 0;
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
      align-items: center;
      width: auto;
      width: 100%;
      padding: 50px 0;
    `}
    ${below[600]`
      flex-direction: column;
      width: 100%;
      padding: 20px 0;
    `}
    width: calc(100% - 300px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 50px 100px;
    box-sizing: border-box;
  `

  const List = styled(HigherCard)`
    ${props => `
      background: ${props.theme.colors.overlay};
      color: ${props.theme.colors.text};
    `}
    font-family: Montserrat, Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    padding: 20px;
    margin: 20px 0 0 0;
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
    <EthanMainCard>
      <EthanBackgroundCard></EthanBackgroundCard>
      <EthanImage fluid={data.placeholderImage.childImageSharp.fluid} />
      <Bio>
        <Title1>I’m Ethan Leners</Title1>
        <TextTitle>UI | UX DESIGNER</TextTitle>
        <TextTitle style={{ paddingBottom: "10px" }}>WRITER</TextTitle>
        <List>
          <Text1List>*long-time people pleaser</Text1List>
          <Text1List>*advocate for accessibility</Text1List>
          <Text1List>*disciple of good design</Text1List>
          <Text1List>*dedicated problem solver</Text1List>
          <Text1List>*habitual list-maker</Text1List>
        </List>
      </Bio>
    </EthanMainCard>
  )
}

export default EthanMain
