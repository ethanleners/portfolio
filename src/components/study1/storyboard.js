import React from "react"
import styled from "styled-components"

import { SectionTitle, SectionCaption, Card, Text2 } from "../molecule"
import { below } from "../../utilities"

import overworked from "../../images/sb1_overworked.png"
import coffee from "../../images/sb2_coffee.png"
import reading from "../../images/sb3_reading.png"
import browse from "../../images/sb4_browse.png"
import friends from "../../images/sb5_friends.png"

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
    ${below[600]`
      max-width: 250px;
      margin-top: 20px;
    `}
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
    ${below[600]`
      max-width: 115px;
      margin-top: 20px;
    `}
    padding: 5px;
    max-width: 145px;
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

export const StoryBoard = () => (
  <>
    <SectionTitle>Storyboard</SectionTitle>
    <InnerCard>
      <ImagesWrapper>
        <VerticalImage
          image={overworked}
          description="Overworked"
        ></VerticalImage>
        <VerticalImage
          image={coffee}
          description="Coffee break!"
        ></VerticalImage>
        <VerticalImage
          image={reading}
          description="5 min reading"
        ></VerticalImage>
        <VerticalImage
          image={browse}
          description="Browse friends"
        ></VerticalImage>
        <WideImage
          image={friends}
          description="New friends and hobbies!"
        ></WideImage>
      </ImagesWrapper>
      <SectionCaption>
        Storyboarding helps to identify key parts of the experience of the user.
      </SectionCaption>
    </InnerCard>
  </>
)
