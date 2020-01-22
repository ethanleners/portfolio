import React from "react"
import styled from "styled-components"

import { Title1, Title3, Card, Text2, TextEmphasis } from "../molecule"
import { below } from "../../utilities"

const Text2List = styled(Text2)`
  ${below[600]`
  padding: 4px 0 0 0;
`}
  padding: 5px 0;
`

const OuterCard = styled(Card)`
  display: flex;
  flex-direction: column;
`

const InnerCard = styled(Card)`
  ${below[900]`
    margin: 0 0 20px 0;
    padding: 3%;
  `}
  ${below[600]`
    margin: 0 0 10px 0;
    padding: 3%;
  `}

  margin: 0 0 30px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const Title = styled(Title3)`
  padding: 0;
`

const Piece = props => (
  <InnerCard>
    <Title>{props.title}</Title>
    {props.children}
  </InnerCard>
)

export const Statement = ({ children }) => {
  return (
    <>
      <OuterCard>
        <Piece title="User/Business Problem:">
          <Text2List>
            Making and maintaining friendships as an adult can be difficult.
          </Text2List>
        </Piece>
        <Piece title="Objectives:">
          <Text2List>
            Develop an app that offers the user opportunities to develop new friendships as well as skill-building content.
          </Text2List>
        </Piece>
        <Piece title="Challenges:">
          <Text2List>Overabundance of social networking apps.</Text2List>
          <Text2List>Limited time to spend on self-development.</Text2List>
        </Piece>
      </OuterCard>
    </>
  )
}
