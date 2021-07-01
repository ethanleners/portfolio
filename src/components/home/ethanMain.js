import React from "react"
import styled from "styled-components"
import { below } from "../../utilities"
import { Title1, Text1, Text1List, Card, HigherCard } from "../molecule"
import EthanPic from "../../images/EthanLenersCompressed.jpg"

const EthanMain = () => {
  const Call = styled.a`
    ${props => `
      color: ${props.theme.colors.accent};
    `}
    ${below[600]`
      font-size: 16px;
      line-height: 22px;
    `}
     ${props => `font-family: ${props.theme.fonts.body};`};
    text-decoration: none;
    font-size: 20px;
    line-height: 30px;

    &:hover {
      text-decoration: underline;
    }
  `

  const EthanMainCard = styled(Card)`
    ${below[1400]`
      margin: 80px 0;
    `}

    ${below[900]`
      flex-direction: column;
      padding-top: 30px;
      margin: 5%;
    `}

    ${below[600]`
      flex-direction: column;
      margin: 30px 1%;
      margin-top: 5%;
      padding: 10px;
    `}

    box-shadow: none;
    padding: 0;
    margin: 80px 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  `

  const Bio = styled.div`
    ${below[900]`
      flex-direction: column;
      align-items: center;
      width: auto;
      width: 100%;
      padding: 50px 0;
    `}
    ${below[1200]`
        padding-right: 0;
    `}
    ${below[600]`
      flex-direction: column;
      width: 100%;
      padding: 20px 0;
    `}
    flex-basis: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 50px;
    padding-right: 10%;
    box-sizing: border-box;
  `

  const EthanImageWrapper = styled.div`
    text-align: center;
    flex-basis: 1;
    padding-left: 10%;
    ${below[1200]`
        padding-left: 0;
    `}
  `

  const EthanImage = styled.img`
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    width: 100%;
    ${below[600]`
      margin: 0;
    `}
  `

  const TextTitle = styled(Text1)`
    ${props => `font-family: ${props.theme.fonts.header};`};
    padding: 5px 0;
  `

  const Title = styled(Title1)`
    padding-top: 0;
    margin-top: 0;
  `

  const Text = styled(Text1List)`
    ${below[900]`
      padding-top: 0;
    `}
    padding-top: 40px;
  `

  return (
    <EthanMainCard>
      <EthanImageWrapper>
        <EthanImage src={EthanPic} />
      </EthanImageWrapper>
      <Bio>
        <Title>I’m Ethan Leners</Title>
        <TextTitle>UI | UX DESIGNER</TextTitle>
        <TextTitle style={{ paddingBottom: "10px" }}>WRITER</TextTitle>
        <Text1List>
          Interdisciplinarian with experience in design and writing.
        </Text1List>
        <Text1List>
          Facilitating good user experience and accessibility.
        </Text1List>
        <Text1List>Writing novels.</Text1List>
        <Text1List>
          Married to a wonderful{" "}
          <Call href="https://www.micleners.com/">web dev geek</Call>.
        </Text1List>
        <Text1List>Seeking a role in UI/UX design.</Text1List>
      </Bio>
    </EthanMainCard>
  )
}

export default EthanMain
