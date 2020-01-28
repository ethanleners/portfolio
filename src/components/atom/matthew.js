import React from "react"
import styled from "styled-components"
import { below } from "../../utilities"

import design from "../../images/Matthew_profpic.png"

const Image = styled.img`
  width: 105px;
  height: auto;
  ${below[900]`
  margin: 0 30px;
`}
`

export const MatthewImage = () => {
  return <Image src={design} />
}
