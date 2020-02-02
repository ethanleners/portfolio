import React from "react"
import styled from "styled-components"

import { TitleTextCard, SlimCardColumn, Text2List } from "../molecule"

export const Statement = props => {
  return (
     <SlimCardColumn>
      {props.copy.map((point, i) => (
        <TitleTextCard key={i + point.header} title={point.header}>
          {point.text.map(text => (
            <Text2List key={i*100 + text.length}>{text}</Text2List>
          ))}
        </TitleTextCard>
      ))}
     </SlimCardColumn>
  )
}
