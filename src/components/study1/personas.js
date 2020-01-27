import React from "react"
import styled from "styled-components"

import { SectionTitle, Title3, Card, Text2, Text2List } from "../molecule"
import { below } from "../../utilities"
import { Persona } from "../organism"

const InnerCard = styled(Card)`
  ${below[900]`
    margin: 0 0 20px 0;
    padding: 3%;
  flex-direction: column;
  `}
  ${below[600]`
    margin: 0 0 10px 0;
    padding: 3%;
  flex-direction: column;
  `}

  margin: 0 0 30px 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: stretch;

  &:last-of-type {
    margin-bottom: 0;
  }
`
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
`

const SectionCaption = styled(Title3)`
  ${props => `
    color: ${props.theme.colors.text};
    `}
  font-size: 24px;
  align-self: center;
  text-align: center;
`

const matthewInfo = {
  accomplish: [
    "*Browse individuals who could share their hobby",
    "*Easily communicate with individuals with like goals",
    "*Position himself as a likable person to spend time with",
    "*Quickly determine which hobbies an individual has",
  ],
  feel: [
    "*comfortable sharing personal information",
    "*Easily communicate with individuals with like goals",
    "*comfortable starting conversation with new individuals",
    "*reassured that he has common ground with potential new friends",
  ],
  consider: [
    "*how does Matthew know that other users are real people (i.e. not bots)?",
    "*Matthew needs assistance keeping track of plans and conversations",
    "*Matthew is very busy",
  ],
}

const amyInfo = {
  accomplish: [
    "*Develop skills necessary to maintain friendships",
    "*Browse potential friends",
    "*Adequately represent herself to potential friends",
    "*Easily communicate with potential friends",
  ],
  feel: [
    "*Easily communicate with individuals with like goals",
    "*comfortable starting conversation with new individuals",
    "*reassured that she has common ground with potential new friends",
    "*capable of making friends in new cities",
  ],
  consider: [
    "*how does she know that other users are real people (i.e. not bots)?",
  ],
}

export const Personas = () => (
  <>
    <SectionTitle>User Personas</SectionTitle>
    <InnerCard>
      <Persona
        persona="Matthew"
        headline="Young adult looking to try a new hobby and make friends."
        info={matthewInfo}
      ></Persona>
      <Persona
        persona="Amy"
        headline="Moved to a new city and wants to make friends in the area."
        info={amyInfo}
      ></Persona>
    </InnerCard>
  </>
)
