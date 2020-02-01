import React from "react"
import styled from "styled-components"

import {
  Title3,
  Card,
  HigherCard,
  TitleTextCard,
  Text2List,
  InnerCard,
} from "../molecule"
import { below } from "../../utilities"

const OuterCard = styled(Card)`
  display: flex;
  flex-direction: column;
`

export const Statement = ({ children }) => {
  return (
    <>
      <OuterCard>
        <TitleTextCard title="User/Business Problem:">
          <Text2List>
            Making and maintaining friendships as an adult can be difficult.
          </Text2List>
        </TitleTextCard>
        <TitleTextCard title="Objectives:">
          <Text2List>
            Develop an app that offers the user opportunities to develop new
            friendships as well as skill-building content.
          </Text2List>
        </TitleTextCard>
        <TitleTextCard title="Challenges:">
          <Text2List>Overabundance of social networking apps.</Text2List>
          <Text2List>Limited time to spend on self-development.</Text2List>
        </TitleTextCard>
      </OuterCard>
    </>
  )
}
