import React from "react"
import styled from "styled-components"

import { SectionTitle, Title3, Card, Text2List } from "../molecule"
import { below } from "../../utilities"

const OuterCard = styled(Card)`
  margin-top: 0px;
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

export const Research = ({ children }) => {
  return (
    <>
      <SectionTitle>User Research</SectionTitle>
      <OuterCard>
        <Piece title="Quantitative Research:">
          <Text2List>
            Surveys were conducted of age-specific audiences to identify
            population groups who report the most difficulty in making and
            sustaining friendships. Results suggested that
            <strong>adults around the ages of 24-45 would benefit most</strong>
            from support in making friends.
          </Text2List>
          <Text2List>
            Participants were also surveyed on dissatisfaction with features of
            other social media applications.
            <strong>
              A majority of participants reported being dissatisfied
            </strong>
            with features that defined groups by age, gender, workplace, or
            school as qualifiers for potential friendship matches.
          </Text2List>
        </Piece>
        <Piece title="Qualitative Research:">
          <Text2List>
            User interviews provided insights into the pain points of our target
            audience. The resulting data suggested that alternative social media
            applications do not provide learning opportunities and often value
            superficial metrics when browsing potential matches.
            <strong>
              Participants indicated that they would find value in alternative
              features.
            </strong>
          </Text2List>
        </Piece>
        <Text2List>
          At this stage, research provides
          <strong>baseline metrics for the success</strong>
          of our design as well as the opportunity to make
          <strong>user-focused design choices.</strong>
        </Text2List>
      </OuterCard>
    </>
  )
}
