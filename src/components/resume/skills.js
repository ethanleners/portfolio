import React from "react"
import styled from "styled-components"

import {
  Title3,
  HigherCard,
  Text2,
  Text2List,
  SectionCaption,
} from "../molecule"
import { below } from "../../utilities"
import { skills, tools, job_history_data } from "./resume_data"

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FlexRow = styled.div`
  ${below[600]`
    display: flex;
    flex-direction: column;
  `}
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`

const DownloadResume = styled.a`
  ${props => `
      color: ${props.theme.colors.accent};
    `}
  ${below[600]`
    font-size: 18px;
    line-height: 25px;
    `}
    padding-top: 20px;
  ${props => `font-family: ${props.theme.fonts.header};`};
  font-size: 20px;
  line-height: 29px;
  align-self: flex-end;
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
    flex-basis: auto;
    flex-direction: column;
    height: auto;
  `}
  margin: 0;
  margin-bottom: 40px;
  padding: 20px;
  flex-basis: 500px;
  flex-grow: 3;
`

export const Skills = ({ children }) => {
  return (
    <FlexColumn>
      <FlexRow>
        <Title>Experience</Title>
        <FlexCard>
          {job_history_data.map((job, i) => {
            const Job = styled.div`
              margin: 15px 0;

              &:first-of-type {
                margin: 0 0 15px 0;
              }

              &:last-of-type {
                margin: 15px 0 0 0;
              }
            `

            return (
              <Job key={i + 300}>
                <Text2List key={i}>
                  <strong>{job.role}</strong>
                </Text2List>
                <Text2List key={i + 30}>{job.company} </Text2List>
                <Text2List key={i + 60}>{job.range} </Text2List>
              </Job>
            )
          })}
        </FlexCard>
      </FlexRow>

      <FlexRow>
        <Title>Skills</Title>
        <FlexCard>
          {skills.map((item, i) => (
            <Text2List key={i + 100}>{item} </Text2List>
          ))}
        </FlexCard>
      </FlexRow>

      <FlexRow>
        <Title>Tools</Title>
        <FlexCard>
          {tools.map((item, i) => (
            <Text2List key={i + 150}>{item} </Text2List>
          ))}
        </FlexCard>
      </FlexRow>
      <DownloadResume
        href="https://drive.google.com/open?id=1c7AIELgODICGhMFQQxe7jlK9DH8BmfhQ"
        target="_blank"
        rel="noopener norefferer"
      >
        Download
      </DownloadResume>
    </FlexColumn>
  )
}
