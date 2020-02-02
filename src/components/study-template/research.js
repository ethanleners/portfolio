import React from "react"
import styled from "styled-components"

import { SectionTitle, SlimCardColumn, TitleTextCard, Text2List } from "../molecule"

export const Research = props => {
  return (
    <>
      <SectionTitle>{props.title}</SectionTitle>
       <SlimCardColumn>
        {props.copy.map((point, i) => (
          <TitleTextCard key={`a${i}`} title={point.header}>
            {point.text.map((text, j) => (
              <Text2List key={`b${i}${j}`}>{text}</Text2List>
            ))}
          </TitleTextCard>
        ))}
        <Text2List>{props.closer}</Text2List>
       </SlimCardColumn>
    </>
  )
}
