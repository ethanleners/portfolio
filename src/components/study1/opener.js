import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Title1, Title3, Card, Text2, TextEmphasis } from "../molecule"
import { below } from "../../utilities"

const StudyTitle = styled(Title1)`
  margin-top: 40px;
`

const Image = styled.div`
  max-width: 307px;
  width: 100%;
  ${below[900]`
      margin: 0 30px;
    `}
`

const CardFlex = styled(Card)`
  ${below[900]`
flex-direction: column;
align-items: center;
margin: 5%;

${props => `
background: ${props.theme.colors.overlay};
color: ${props.theme.colors.text};
`}
`}

  ${below[600]`
flex-direction: column;
margin: 30px 1%;
padding: 5%;
`}

display: flex;
  flex-direction: row;
  align-items: center;
`

const CardText = styled.div`
  ${below[900]`
flex-direction: column;
width: auto;
padding: 50px 50px;
`}
  ${below[600]`
flex-direction: column;
width: auto;
padding: 10px 10px;
`}
width: calc(100% - 300px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 0 0 40px;
  height: 100%;
  box-sizing: border-box;
`

const Text2List = styled(Text2)`
  ${below[600]`
  padding: 4px 0 0 0;
`}
  padding: 5px 0;
`

const Emphasis = styled(TextEmphasis)`
  ${below[600]`
  padding: 20px 0 0 0;
`}

  padding: 40px 0 0 0;
`

export const Opener = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "friendly2.png" }) {
        childImageSharp {
          fluid(maxWidth: 307) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <StudyTitle>Case Study: Friendly</StudyTitle>
      <CardFlex>
        <Image to="/">
          <Img fluid={data.file.childImageSharp.fluid} />
        </Image>
        <CardText>
          <Title3>What is it?</Title3>
          <Text2>
            Friendly is a social media networking app that offers skill-building
            opportunities to help make deep, lasting friendships.
          </Text2>
          <Title3>My Role:</Title3>
          <Text2List>Lead storyboarding and conducted user research</Text2List>
          <Text2List>
            User Experience Design: creating user flows and wireframes
          </Text2List>
          <Text2List>
            Created high fidelity wireframes to better demonstrate experience
          </Text2List>
          <Emphasis>
            This is a mock project intended to exhibit my design process.
          </Emphasis>
        </CardText>
      </CardFlex>
    </>
  )
}
