import React from "react"
import styled from "styled-components"

import { SectionTitle, Text2 } from "../molecule"
import { ProcessStep } from "../organism/processStep"

const ProcessWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${Text2} {
    padding-left: 20px;
  }
`

export const Process = props => (
  <>
    <SectionTitle>{props.title}</SectionTitle>
    <ProcessWrapper>
      {props.steps.map((step, i) => (
        <ProcessStep
          key={`c${i}`}
          image={step.image}
          imageText={step.imageText}
          number={step.number}
        >
          <Text2>{step.text}</Text2>
        </ProcessStep>
      ))}
    </ProcessWrapper>
  </>
)
