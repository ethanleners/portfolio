import styled from "styled-components"
import { below } from "../../utilities"
import {Title3 } from "../molecule"

export const Text1 = styled.div`
  ${props => `
  color: ${props.theme.colors.text};
`}
  ${below[600]`
  font-size: 16px;
  line-height: 20px;
`}
font-family: Montserrat, Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
  sans-serif;
  font-size: 20px;
  line-height: 24px;
  padding: 20px 0;
`

export const Text2 = styled.div`
  ${props => `
  color: ${props.theme.colors.text};
`}
  ${below[600]`
  font-size: 14px;
  padding: 10px 0;
  line-height: 18px;
`}
font-family: Montserrat, Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
  sans-serif;
  font-size: 16px;
  line-height: 20px;
  padding: 20px 0;
`

export const TextEmphasis = styled(Text2)`
  ${props => `
  color: ${props.theme.colors.text};
`}
  ${below[600]`
  font-size: 14px;
  line-height: 18px;
`}
font-family: Montserrat, Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
  sans-serif;
  font-size: 16px;
  font-style: italic;
  line-height: 20px;
  padding: 20px 0;
`

export const Text2List = styled(Text2)`
  ${below[600]`
  padding: 4px 0 0 0;
`}
  padding: 5px 0;
`

export const Text1List = styled(Text1)`
  ${below[600]`
  padding: 4px 0 0 0;
`}
  padding: 5px 0;
`

export const SectionCaption = styled(Title3)`
  ${props => `
    color: ${props.theme.colors.text};
    `}
  font-size: 24px;
  align-self: center;
  text-align: center;
`
