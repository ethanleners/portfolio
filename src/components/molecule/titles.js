import styled from "styled-components"
import { below } from "../../utilities"

export const Title1 = styled.h1`
  ${props => `
  color: ${props.theme.colors.secondary};
    `}
  ${props => `font-family: ${props.theme.fonts.header};`};
  ${below[600]`
    font-size: 26px;
    line-height: 40px;
    `}
  padding-top: 20px;
  font-size: 34px;
  line-height: 50px;
`

export const Title2 = styled.h2`
  ${props => `
  color: ${props.theme.colors.secondary};
    `}
  ${props => `font-family: ${props.theme.fonts.header};`};
  ${below[600]`
    font-size: 20px;
    line-height: 29px;
    `}
  padding-top: 15px;
  font-size: 28px;
  line-height: 36px;
`

export const Title3 = styled.h3`
  ${props => `
  color: ${props.theme.colors.secondary};
    `}
  ${props => `font-family: ${props.theme.fonts.header};`};
  ${below[600]`
    font-size: 18px;
    line-height: 25px;
    `}
  font-size: 20px;
  line-height: 29px;
`

export const SectionTitle = styled(Title2)`
  margin: 40px 0 20px 0;
`
