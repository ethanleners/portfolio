import React from "react"

import { SectionTitle, Text1, OuterCardColumn } from "../molecule"

export const Conclusion = props => {
  return (
    <>
      <SectionTitle>Next Steps</SectionTitle>
      <OuterCardColumn>
        <Text1>
          The next step continues the cycle of <strong>research</strong> and{" "}
          <strong>iteration</strong>. Research such as usability testing will
          provide important feedback to inform the next iteration of the
        </Text1>
        <Text1>
          <strong>The design journey continues!</strong>
        </Text1>
      </OuterCardColumn>
    </>
  )
}
