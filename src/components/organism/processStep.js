import React from "react"
import styled from "styled-components"

import { Card, HigherCard, Text1 } from "../molecule"
import { below } from "../../utilities"

import design from "../../images/design.svg"
import experience from "../../images/experience.svg"
import map from "../../images/map.svg"
import user from "../../images/user.svg"

const OuterCardRow = styled(Card)`
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

const ImageCard = styled(HigherCard)`
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

  ${props => `font-family: ${props.theme.fonts.header};`};
  padding: 15px 0 0 0;
  text-align: center;
`

const Badge = styled.div`
  ${props => `
    background: ${props.theme.colors.secondary};
    color: ${props.theme.colors.emphasis};
  `}
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 0;
  font-size: 30px;
  ${props => `font-family: ${props.theme.fonts.header};`};
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
      <OuterCardRow>
        <ImageCard>
          <Image image={props.image} />
          <ImageText>{props.imageText}</ImageText>
        </ImageCard>
        {props.children}
      </OuterCardRow>
    </CardWrapper>
  )
}
