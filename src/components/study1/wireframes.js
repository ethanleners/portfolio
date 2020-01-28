import React from "react"
import styled from "styled-components"

import {
  SectionTitle,
  SectionCaption,
  Title3,
  Card,
  Text2,
  Text2List,
} from "../molecule"
import { below } from "../../utilities"

import home from "../../images/Wireframe_Home.png"
import article from "../../images/Wireframe_Article.png"
import browse from "../../images/Wireframe_Browse.png"
import chat from "../../images/Wireframe_Chat.png"
import edit from "../../images/Wireframe_Edit.png"

const InnerCard = styled(Card)`
  ${below[900]`
    margin: 0 0 20px 0;
    padding: 3%;
  `}
  ${below[600]`
    margin: 0 0 10px 0;
    padding: 3%;
  `}

  margin: 0 0 30px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin-bottom: 0;
  }
`
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WideImage = props => {
  const Image = styled.img`
    padding: 5px;
    max-width: 289px;
  `
  return (
    <ImageWrapper>
      <Image src={props.image} />
      <Text2>{props.description}</Text2>
    </ImageWrapper>
  )
}

const VerticalImage = props => {
  const Image = styled.img`
    padding: 5px;
    max-width: 160px;
  `
  return (
    <ImageWrapper>
      <Image src={props.image} />
      <Text2>{props.description}</Text2>
    </ImageWrapper>
  )
}

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const Wireframes = () => (
  <>
    <SectionTitle>Wireframes</SectionTitle>
    <InnerCard>
      <ImagesWrapper>
        <VerticalImage image={home} description="Home"></VerticalImage>
        <VerticalImage
          image={article}
          description="Daily Reading"
        ></VerticalImage>
        <VerticalImage image={browse} description="Browse"></VerticalImage>
        <VerticalImage image={chat} description="Chat"></VerticalImage>
        <VerticalImage image={edit} description="Edit Profile"></VerticalImage>
      </ImagesWrapper>
      <SectionCaption>
        User flows helped to identify key screens to develop.
      </SectionCaption>
    </InnerCard>
  </>
)
