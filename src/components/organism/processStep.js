import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Title2,
  Title3,
  Card,
  Text1,
  Text2,
  Text2List,
  TextEmphasis,
} from "../molecule"
import { below } from "../../utilities"

import design from "../../images/design.svg"
import experience from "../../images/experience.svg"
import map from "../../images/map.svg"
import user from "../../images/user.svg"

const ProcessTitle = styled(Title2)`
  margin-top: 40px;
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

const ImageCard = styled(Card)``;

const TextTitle = styled(Text1)`
  font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  padding: 5px 0;
`

export const ProcessStep = props => {
  const StyledImage = styled.img`
    width: 200px;
  `
  const Image = props => (
    <>
      {props.image === "experience" && (
        <StyledImage src={experience} alt="understand the experience" />
      )}
      {props.image === "user" && (
        <StyledImage src={user} alt="empathize with user" />
      )}
      {props.image === "map" && <StyledImage src={map} alt="map user flows" />}
      {props.image === "design" && (
        <StyledImage src={design} alt="design prototype" />
      )}
    </>
  )

  return (
    <>
      <ProcessTitle>The Process</ProcessTitle>
      <CardFlex>
        <ImageCard>
          <Image image={props.image} />
          <TextTitle>{props.imageText}</TextTitle>
        </ImageCard>
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
        </CardText>
      </CardFlex>
    </>
  )
}
