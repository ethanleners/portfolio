import styled from "styled-components"
import { below } from "../../utilities"

export const ImageWrapper = styled.div`
  max-width: 307px;
  width: 100%;
  ${below[900]`
      margin: 0 30px;
    `}
`
