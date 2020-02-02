import styled from "styled-components"
import React from "react"
import { Title3 } from "../molecule"
import { below } from "../../utilities"

export const Card = styled.div`
${props => `
  background: ${props.theme.colors.overlay};
  color: ${props.theme.colors.text};
`}

${below[900]`
  margin: 5%;

  ${props => `
    background: ${props.theme.colors.overlay};
    color: ${props.theme.colors.text};
    `}
`}

${below[600]`
  margin: 30px 1%;
  padding: 5%;
`}
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
z-index: 900;
margin: 40px 0;
box-sizing: border-box;
padding: 40px;
display: flex;
flex-direction: column;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 3px 10px rgba(0, 0, 0, 0.12), 0px 6px 6px rgba(0, 0, 0, 0.06);
`

export const HigherCard = styled(Card)`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
`

export const InnerCard = styled(HigherCard)`
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

export const OuterCardRow = styled(Card)`
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
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`

export const OuterCardColumn = styled(Card)`
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

export const SlimCardColumn = styled(Card)`
  display: flex;
  margin-top: 0px;
  flex-direction: column;
`

export const TitleTextCard = props => (
  <InnerCard>
    <Title3>{props.title}</Title3>
    {props.children}
  </InnerCard>
)
