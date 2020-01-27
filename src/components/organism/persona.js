import React from "react"
import styled from "styled-components"

import { SectionCaption, Title3, Card, Text1, Text2List } from "../molecule"
import { below } from "../../utilities"
import { MatthewImage, AmyImage } from "../atom"

const HeaderImage = props => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 110px;
    justify-content: center;
    align-content: center;
    padding-bottom: 20px;
  `

  return (
    <Wrapper>
      {props.persona === "Amy" && <AmyImage></AmyImage>}
      {props.persona === "Matthew" && <MatthewImage></MatthewImage>}
    </Wrapper>
  )
}

const PersonaHead = props => {
  const HeaderText = styled(Text1)`
    align-self: center;
    text-align: center;
  `
  return (
    <>
      <HeaderImage persona={props.persona}></HeaderImage>
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

const InnerCard = styled(Card)`
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
  <InnerCard>
    <PersonaHead
      persona={props.persona}
      headline={props.headline}
    ></PersonaHead>
    <Needs heading="Needs to accomplish:" needs={props.info.accomplish} />
    <Needs heading="Needs to feel:" needs={props.info.feel} />
    <Needs heading="Things to consider:" needs={props.info.consider} />
  </InnerCard>
)
