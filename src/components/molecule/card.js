import styled from "styled-components"
import { below } from "../../utilities"

export const Card = styled.div`
${props => `
  background: ${props.theme.colors.overlay};
  color: ${props.theme.colors.text};
`}

${below[900]`
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

margin: 40px 0;
box-sizing: border-box;
padding: 40px;
display: flex;
`
