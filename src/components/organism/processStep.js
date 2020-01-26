import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Card,
  Text1,
} from "../molecule"
import { below } from "../../utilities"

import design from "../../images/design.svg"
import experience from "../../images/experience.svg"
import map from "../../images/map.svg"
import user from "../../images/user.svg"

const CardFlex = styled.div`
  ${props => `
    background: ${props.theme.colors.overlay};
    color: ${props.theme.colors.text};
  `}

  ${below[600]`
  flex-direction: column;
    margin: 20px;
    height: auto;

  `}

  margin: 20px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  height: 300px;
`

const CardWrapper = styled.div`
  ${below[900]`
  flex: 0 100%;
  `}
  position: relative;
  flex: 0 50%;
  height: 100%;
`

const ImageCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  margin: 0;
  min-width: 170px;
`

const ImageText = styled(Text1)`
  ${props => `
    color: ${props.theme.colors.text};
  `}
  font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  padding: 15px 0 0 0;
  text-align: center;
`

const Badge = styled.div`
  ${props => `
    background: ${props.theme.colors.accent};
    color: ${props.theme.colors.text};
  `}
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 30px;
  font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
`

export const ProcessStep = props => {
  const StyledImage = styled.img`
    width: 100px;
    height: 100px;
    margin: 10px;
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
    <CardWrapper>
      <Badge>{props.number}</Badge>
      <CardFlex>
        <ImageCard>
          <Image image={props.image} />
          <ImageText>{props.imageText}</ImageText>
        </ImageCard>
        {props.children}
      </CardFlex>
    </CardWrapper>
  )
}
