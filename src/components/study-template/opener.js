import React from "react"
import styled from "styled-components"

import {
  Title1,
  Title3,
  Text2List,
  TextEmphasis,
  ImageWrapper,
  CardText,
  OuterCardRow,
} from "../molecule"

const OpenerCard = styled(OuterCardRow)`
  box-shadow: none;
  margin: 0;
  background: none;
`

export const Opener = props => {
  return (
    <OpenerCard>
      <ImageWrapper maxWidth={props.imageWidth} to="/">{props.image}</ImageWrapper>
      <CardText>
        <Title1>{props.title}</Title1>
        {props.copy.map((point, i) => (
          <div key={i*10} style={{ padding: "10px 0" }}>
            <Title3>{point.header}</Title3>
            {point.text.map((text, i) => (
              <Text2List key={i*100}>{text}</Text2List>
            ))}
          </div>
        ))}
        <TextEmphasis>{props.emphasis}</TextEmphasis>
      </CardText>
    </OpenerCard>
  )
}
