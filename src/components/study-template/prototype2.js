import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { NumberCard } from "../organism"
import {
  CardText,
  SlimCardColumn,
  Text2,
  SectionTitle,
  ImagesWrapper,
  ImageWrapper,
  ImageWithText,
} from "../molecule"
import { below } from "../../utilities"

import noticed from "../../images/protonotice2_noticed.png"
import note from "../../images/protonotice3_note.png"
import read from "../../images/protonotice4_read.png"
import track from "../../images/protonotice5_track.png"

const OuterCardRow = styled.div`
  ${below[900]`
    flex-direction: column;
    align-items: center;
    margin: 5%;

  ${props => `
    color: ${props.theme.colors.text};
  `}
  `}

  ${below[600]`
  flex-direction: column;
  margin: 30px 1%;
  padding: 5%;
  `}

  padding-bottom: 0;
  margin-bottom: 20px;
  padding-top: 0;
  margin-top: 0;
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const VerticalImage = props => {
  const Image = styled.img`
    ${below[600]`
      max-width: 115px;
      margin-top: 20px;
    `}
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

const imageSizes = {
  vertical: {
    maxWidth: "160px",
    smallMaxWidth: "115px",
  },
}

export const Prototype2 = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "protonotice1_home.png" }) {
        childImageSharp {
          fluid(maxWidth: 315) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SectionTitle>Prototype</SectionTitle>
       <SlimCardColumn>
        <OuterCardRow>
          <ImageWrapper maxWidth="315px" to="/">
            <Img fluid={data.home.childImageSharp.fluid} />
          </ImageWrapper>
          <CardText>
            <NumberCard
              number="1"
              text='Tap the “Notice Cloud” to notice. Easy to use with calming graphics to avoid overwhelming the user if they are feeling anxious.'
            />
            <NumberCard
              number="2"
              text="Once noticed, the cloud becomes a checkmark and the user can choose to take notes."
            />
            <NumberCard
              number="3"
              text="The note-taking screen resembles a chat window. This is a visual representation of “self-talk”, improving mindfulness."
            />
            <NumberCard
              number="4"
              text="Quickly access a calendar to track progress or instances of noticing. On this screen, you can review your notes as well."
            />
            <NumberCard
              number="5"
              text="Have five minutes to spare? Read more on mindfulness techniques. Archive helpful articles and review your archive whenever."
            />
          </CardText>
        </OuterCardRow>
        <ImagesWrapper>
          <ImageWithText
            maxWidth={imageSizes.vertical.maxWidth}
            smallMaxWidth={imageSizes.vertical.smallMaxWidth}
            image={noticed}
            description="Noticed"
          ></ImageWithText>
          <ImageWithText
            maxWidth={imageSizes.vertical.maxWidth}
            smallMaxWidth={imageSizes.vertical.smallMaxWidth}
            image={note}
            description="Note"
          ></ImageWithText>
          <ImageWithText
            maxWidth={imageSizes.vertical.maxWidth}
            smallMaxWidth={imageSizes.vertical.smallMaxWidth}
            image={read}
            description="Read"
          ></ImageWithText>
          <ImageWithText
            maxWidth={imageSizes.vertical.maxWidth}
            smallMaxWidth={imageSizes.vertical.smallMaxWidth}
            image={track}
            description="Track"
          ></ImageWithText>
        </ImagesWrapper>
       </SlimCardColumn>
    </>
  )
}
