import React from "react"
import styled from "styled-components"

import { SectionTitle, Title3, Card, Text2, Text2List } from "../molecule"
import { below } from "../../utilities"
import { MatthewImage, AmyImage } from "../atom"

const HeaderImage = props => (
  <>
    {props.persona === "Amy" && <AmyImage></AmyImage>}
    {props.persona === "Matthew" && <MatthewImage></MatthewImage>}
  </>
)

const PersonaHead = props => <HeaderImage persona={props.persona}></HeaderImage>
const Accomplish = () => <div></div>
const Feel = () => <div></div>
const Consider = () => <div></div>

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

export const Persona = props => (
  <InnerCard>
    <PersonaHead persona={props.persona}></PersonaHead>
    <Accomplish></Accomplish>
    <Feel></Feel>
    <Consider></Consider>
  </InnerCard>
)
