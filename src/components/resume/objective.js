import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Title1, Card, Text2, SectionCaption } from "../molecule"
import { below } from "../../utilities"

const FlexHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ResumeTitle = styled(Title1)`
  margin-top: 40px;
`

const DownloadResume = styled.a`
  ${props => `
      color: ${props.theme.colors.accent};
    `}
  ${below[600]`
    font-size: 26px;
    line-height: 40px;
    `}
    padding-top: 20px;
  font-size: 34px;
  font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  line-height: 50px;
  margin-top: 40px;
`

const CardFlex = styled(Card)`
  ${below[900]`
    flex-direction: column;
    align-items: center;
    margin: 5%;

    ${props => `
      background: ${props.theme.colors.overlay};
      color: ${props.theme.colors.text};
      `}
  `}

  ${below[600]`
    flex-direction: column;
    margin: 30px 1%;
    padding: 5%;
  `}

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const EmploymentObjective = styled(SectionCaption)`
  align-self: flex-start;
`

export const Objective = ({ children }) => (
  <>
    <FlexHeader>
      <ResumeTitle>Resume</ResumeTitle>
      <DownloadResume
        href="https://drive.google.com/open?id=1J3bIOzSgslYzoSsZJn4ky0oBIUuqQWH3"
        target="_blank"
        rel="noopener norefferer"
      >
        Download
      </DownloadResume>
    </FlexHeader>
    <CardFlex>
      <EmploymentObjective>Employment Objectives</EmploymentObjective>
      <Text2>
        Experienced designer with a demonstrated history of project management
        and an interdisciplinary practice entering the tech industry pursuing a
        career in User Experience Design.
      </Text2>
    </CardFlex>
  </>
)
