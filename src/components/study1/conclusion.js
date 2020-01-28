import React from "react"
import styled from "styled-components"

import {
  SectionTitle,
  Card,
  Text1,
  TextEmphasis,
} from "../molecule"
import { below } from "../../utilities"

const CardFlex = styled(Card)`
  ${below[900]`
align-items: center;
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

padding: 10px 30px;
display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Conclusion = ({ children }) => {
  return (
    <>
      <SectionTitle>Next Steps</SectionTitle>
      <CardFlex>
        <Text1>
          The next step continues the cycle of <strong>research</strong> and{" "}
          <strong>iteration</strong>. Research such as usability testing will
          provide important feedback to inform the next iteration of the
        </Text1>
        <Text1>
          <strong>The design journey continues!</strong>
        </Text1>
      </CardFlex>
    </>
  )
}
