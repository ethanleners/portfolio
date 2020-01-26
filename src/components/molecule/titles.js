import styled from "styled-components"
import { below } from "../../utilities"

export const Title1 = styled.div`
  ${props => `
  color: ${props.theme.colors.secondary};
    `}
  ${below[600]`
    font-size: 26px;
    line-height: 40px;
    `}
    padding-top: 20px;
    font-size: 34px;
  font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  line-height: 50px;
`

export const Title2 = styled.div`
  ${props => `
  color: ${props.theme.colors.secondary};
    `}
  ${below[600]`
    font-size: 20px;
    line-height: 29px;
    `}
    padding-top: 15px;
    font-size: 28px;
  font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  line-height: 36px;
`

export const Title3 = styled.div`
  ${props => `
  color: ${props.theme.colors.secondary};
    `}
  ${below[600]`
    font-size: 18px;
    line-height: 25px;
    `}
    padding-top: 10px;
    font-size: 20px;
  font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  line-height: 29px;
`

export const SectionTitle = styled(Title2)`
  margin: 40px 0 20px 0;
`