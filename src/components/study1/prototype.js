import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { NumberCard } from "../organism"
import {
  Title1,
  Title3,
  Card,
  Text2,
  SectionTitle,
  TextEmphasis,
} from "../molecule"
import { below } from "../../utilities"

import article from "../../images/Prototype_read.png"
import browse from "../../images/Prototype_browse.png"
import chat from "../../images/Prototype_chat.png"
import edit from "../../images/Prototype_profile.png"

const Image = styled.div`
  max-width: 315px;
  width: 100%;
  ${below[900]`
      margin: 0 30px;
    `}
`
const CardWrapper = styled.div`
  ${props => `
    background: ${props.theme.colors.overlay};
  `}
  display: flex;
  flex-direction: column;
`

const CardFlex = styled(Card)`
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

const CardText = styled.div`
  ${below[900]`
  flex-direction: column;
  width: auto;
  padding: 50px 50px;
  `}
  ${below[600]`
  flex-direction: column;
  width: auto;
  padding: 10px 10px;
  `}
  width: calc(100% - 300px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 0 0 40px;
  height: 100%;
  box-sizing: border-box;
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

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const Prototype = ({ children }) => {
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
      <CardWrapper>
        <CardFlex>
          <Image to="/">
            <Img fluid={data.home.childImageSharp.fluid} />
          </Image>
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
        </CardFlex>
        <ImagesWrapper>
          <VerticalImage image={browse} description="Browse"></VerticalImage>
          <VerticalImage image={chat} description="Chat"></VerticalImage>
          <VerticalImage
            image={article}
            description="Daily Reading"
          ></VerticalImage>
          <VerticalImage
            image={edit}
            description="Edit Profile"
          ></VerticalImage>
        </ImagesWrapper>
      </CardWrapper>
    </>
  )
}
