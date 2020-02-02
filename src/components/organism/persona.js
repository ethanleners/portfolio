import React from "react"
import styled from "styled-components"

import {
  SectionCaption,
  Title3,
  InnerCard,
  Text1,
  Text2List,
} from "../molecule"
import { below } from "../../utilities"

const PersonaHead = props => {
  const HeaderText = styled(Text1)`
    align-self: center;
    text-align: center;
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 110px;
    justify-content: center;
    align-content: center;
    padding-bottom: 20px;
  `
  return (
    <>
      <Wrapper>{props.image}</Wrapper>
      <SectionCaption>{props.persona}</SectionCaption>
      <HeaderText>{props.headline}</HeaderText>
    </>
  )
}

const Needs = props => {
  const Need = styled(Text2List)`
    padding-left: 10px;
  `
  return (
    <>
      <Title3>{props.heading}</Title3>
      {props.needs.map((need, i) => (
        <Need key={i}>{need}</Need>
      ))}
    </>
  )
}

const PersonaCard = styled(InnerCard)`
  ${below[900]`
    flex: 0 100%;
    margin: 0 0 20px 0;
    padding: 3%;
  `}
  ${below[600]`
    margin: 0 0 10px 0;
    padding: 3%;
  `}
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 0 48%;
  height: 100%;
  box-sizing: border-box;
  margin: 10px 0;
`

export const Persona = props => (
  <PersonaCard>
    <PersonaHead
      persona={props.persona}
      headline={props.headline}
      image={props.image}
    ></PersonaHead>
    <Needs heading="Needs to accomplish:" needs={props.info.accomplish} />
    <Needs heading="Needs to feel:" needs={props.info.feel} />
    <Needs heading="Things to consider:" needs={props.info.consider} />
  </PersonaCard>
)
