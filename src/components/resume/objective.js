import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Title1, Card, Text2, SectionCaption } from "../molecule"
import { below } from "../../utilities"

const ResumeTitle = styled(Title1)`
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
`;

export const Objective = ({ children }) => (
  <>
    <ResumeTitle>Resume</ResumeTitle>
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
