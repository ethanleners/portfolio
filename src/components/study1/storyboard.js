import React from "react"
import styled from "styled-components"

import { SectionTitle, Title3, Card, Text2List } from "../molecule"
import { below } from "../../utilities"

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

export const StoryBoard = ({ children }) => {
  return (
    <>
      <SectionTitle>User Research</SectionTitle>
      <Piece title="Quantitative Research:">
        <Text2List>Images here</Text2List>
      </Piece>
    </>
  )
}
