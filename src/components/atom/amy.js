import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { below } from "../../utilities"

import design from "../../images/Amy_profpic.png"

const Image = styled.img`
  width: 105px;
  height: auto;
  ${below[900]`
  margin: 0 30px;
`}
`

export const AmyImage = () => {
  return <Image src={design} />
}
