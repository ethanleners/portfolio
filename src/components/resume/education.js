import React from "react"
import styled from "styled-components"

import { Title3, HigherCard, Text2, Title1, Text2List } from "../molecule"
import { below } from "../../utilities"

const FlexHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ResumeTitle = styled(Title1)`
  margin-top: 40px;
`

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
    flex-basis: auto;
    height: auto;
  `}
  padding: 0;
  margin: 0;
  flex-basis: 200px;
  flex-grow: 1;
`

const FlexCard = styled(HigherCard)`
  ${below[600]`
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-basis: auto;
    height: auto;
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
    <>
      <FlexHeader>
        <ResumeTitle>Resume</ResumeTitle>
      </FlexHeader>
      <br />
      <br />
      <FlexRow>
        <Title>Employment Objectives</Title>
        <FlexCard>
          <Text2>
            Experienced designer with a demonstrated history of project
            management and an interdisciplinary practice entering the tech
            industry pursuing a career in User Experience Design.
          </Text2>
        </FlexCard>
      </FlexRow>
      <FlexRow>
        <Title>Education</Title>
        <FlexCard>
          {education.map((item, i) => (
            <Text2List key={i + 200}>{item}</Text2List>
          ))}
        </FlexCard>
      </FlexRow>
    </>
  )
}
