import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import {
  Title1,
  Title3,
  Text2,
  Text2List,
  TextEmphasis,
  CardText,
  CardFlex,
  ImageWrapper,
} from "../molecule"
import { below } from "../../utilities"

const OpenerCard = styled(CardFlex)`
  box-shadow: none;
  margin: 0;
  padding-bottom: 0;
`

export const Opener = props => {
  return (
    <OpenerCard>
      <ImageWrapper to="/">{props.image}</ImageWrapper>
      <CardText>
        <Title1>{props.title}</Title1>
        {props.copy.map(point => (
          <>
            <Title3>{point.header}</Title3>
            {point.text.map(text => (
              <Text2List>{text}</Text2List>
            ))}
          </>
        ))}
        <TextEmphasis>{props.emphasis}</TextEmphasis>
      </CardText>
    </OpenerCard>
  )
}