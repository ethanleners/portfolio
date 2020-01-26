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

export const Research = ({ children }) => {
  return (
    <>
      <SectionTitle>User Research</SectionTitle>
      <Piece title="Quantitative Research:">
        <Text2List>
          Surveys were conducted of age-specific audiences to identify
          population groups who report the most difficulty in making and
          sustaining friendships.
        </Text2List>
        <Text2List>
          Participants were also surveyed on dissatisfaction with other social
          media applications.
        </Text2List>
      </Piece>
      <Piece title="Qualitative Research:">
        <Text2List>
        User interviews provided insights into the pain points of our target audience.
        </Text2List>
      </Piece>
    </>
  )
}
