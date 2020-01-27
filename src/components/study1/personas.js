import React from "react"
import styled from "styled-components"

import { SectionTitle, Title3, Card, Text2, Text2List } from "../molecule"
import { below } from "../../utilities"
import { Persona } from "../organism"

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
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
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

export const Personas = () => (
  <>
    <SectionTitle>User Personas</SectionTitle>
    <InnerCard>
      <Persona persona="Matthew"></Persona>
      <Persona persona="Amy"></Persona>
    </InnerCard>
  </>
)
