import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Card, Text1, Text2List } from "../molecule"
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
  position: relative;
  margin: 20px;
  height: 80%;
  padding: 20px 20px 20px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
`

const CardWrapper = styled.div`
  ${below[900]`
  flex: 0 100%;
  height: auto;
  `}
  position: relative;
  flex: 0 50%;
  height: 140px;
`

const Badge = styled.div`
  ${props => `
    background: ${props.theme.colors.social};
    color: ${props.theme.colors.text};
  `}
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: calc(50% - 17.5px);
  left: -17.50px;
  font-size: 20px;
  font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
`

export const NumberCard = props => (
  <CardWrapper>
    <CardFlex>
      <Badge>{props.number}</Badge>
      <Text2List>{props.text}</Text2List>
    </CardFlex>
  </CardWrapper>
)