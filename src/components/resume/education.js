import React from "react"
import styled from "styled-components"

import { Title3, Card, Text2, SectionCaption } from "../molecule"
import { below } from "../../utilities"

const FlexRow = styled.div`
  ${below[600]`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `}
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled(Title3)`
  ${below[600]`
    margin-top: 20px;
    flex-basis: 0;
  `}
  padding: 0;
  margin: 0;
  flex-basis: 200px;
  flex-grow: 1;
`

const FlexCard = styled(Card)`
  ${below[600]`
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-basis: 0;
  `}
  margin: 0;
  margin-bottom: 40px;
  padding: 0 0 0 20px;
  flex-basis: 500px;
  flex-grow: 3;
`

const education = [
  "M.F.A, School of the Art Institute of Chicago, 2019",
  "B.F.A, School of the Art Institute of Chicago, 2008",
]

export const Education = ({ children }) => {
  return (
    <FlexRow>
      <Title>Education</Title>
      <FlexCard>
        {education.map((item, i) => (
          <Text2 key={i + 200}>{item}</Text2>
        ))}
      </FlexCard>
    </FlexRow>
  )
}
