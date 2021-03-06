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

import article from "../../images/Prototype_read.png"
import browse from "../../images/Prototype_browse.png"
import chat from "../../images/Prototype_chat.png"
import edit from "../../images/Prototype_profile.png"

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

export const Prototype1 = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "prototype_homefeatures.png" }) {
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
              text="Track unread messages at a glance. Keep on top of unread on messages to encourage healthy dialogues."
            />
            <NumberCard
              number="2"
              text="Easily update photos and profile information. This is where the user lists interests and hobbies to show up in search results."
            />
            <NumberCard
              number="3"
              text="Learn helpful techniques to being a great friend and browse the archive of past readings. Articles are targeted toward developing long-lasting friendships as adults."
            />
            <NumberCard
              number="4"
              text="When you make plans with a friend, the app automatically creates an event with reminders. Click to make changes or invite more friends."
            />
            <NumberCard
              number="5"
              text="Quickly find more friends! Search by hobby, interest, location, etc."
            />
          </CardText>
        </OuterCardRow>
        <ImagesWrapper>
          <ImageWithText
            maxWidth={imageSizes.vertical.maxWidth}
            smallMaxWidth={imageSizes.vertical.smallMaxWidth}
            image={browse}
            description="Browse"
          ></ImageWithText>
          <ImageWithText
            maxWidth={imageSizes.vertical.maxWidth}
            smallMaxWidth={imageSizes.vertical.smallMaxWidth}
            image={chat}
            description="Chat"
          ></ImageWithText>
          <ImageWithText
            maxWidth={imageSizes.vertical.maxWidth}
            smallMaxWidth={imageSizes.vertical.smallMaxWidth}
            image={article}
            description="Daily Reading"
          ></ImageWithText>
          <ImageWithText
            maxWidth={imageSizes.vertical.maxWidth}
            smallMaxWidth={imageSizes.vertical.smallMaxWidth}
            image={edit}
            description="Edit Profile"
          ></ImageWithText>
        </ImagesWrapper>
       </SlimCardColumn>
    </>
  )
}
