import React from "react"
import styled from "styled-components"

import { SectionTitle, Card } from "../molecule"
import { below } from "../../utilities"
import { Persona } from "../organism"
import { AbbyImage, PaigeImage } from "../atom"

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

const abbyInfo = {
  accomplish: [
    "*Identify when she is feeling anxious",
    "*Track this information without taking too much time",
    "*Review tracked information",
    "*Take notes about specific instances of feeling anxious",
  ],
  feel: ["*Not judged", "*Calm", "*In-control"],
  consider: [
    "*How can Abby navigate the app when she is feeling particularly anxious?",
    "*Are there reminders for her to check tracked data?",
  ],
}

const paigeInfo = {
  accomplish: [
    '*Use physical cues as a reminder to "notice" her thoughts or feelings',
    "*Must do so quickly and discreetly if she is otherwise busy (i.e. at work)",
    "*Track her progress",
  ],
  feel: [
    "*In-control",
    "*Not distracted",
    "*Empowered to continue self-growth",
  ],
  consider: [
    "*Can Paige use multiple devices?",
  ],
}

export const Personas2 = () => (
  <>
    <SectionTitle>User Personas</SectionTitle>
    <InnerCard>
      <Persona
        persona="Abby"
        image={<AbbyImage />}
        headline="Teen learning to develop skills to track and cope with her anxiety."
        info={abbyInfo}
      ></Persona>
      <Persona
        persona="Paige"
        image={<PaigeImage />}
        headline="Needs a way to practice new meditation techniques."
        info={paigeInfo}
      ></Persona>
    </InnerCard>
  </>
)
