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
  Text2List,
  TextEmphasis,
} from "../molecule"
import { below } from "../../utilities"

const StudyTitle = styled(Title1)`
  margin-top: 40px;
`

const Image = styled.div`
  max-width: 315px;
  width: 100%;
  ${below[900]`
      margin: 0 30px;
    `}
`

const CardFlex = styled(Card)`
  ${below[900]`
flex-direction: column;
align-items: center;
margin: 5%;

${props => `
background: ${props.theme.colors.overlay};
color: ${props.theme.colors.text};
`}
`}

  ${below[600]`
flex-direction: column;
margin: 30px 1%;
padding: 5%;
`}

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

const Emphasis = styled(TextEmphasis)`
  ${below[600]`
  padding: 20px 0 0 0;
`}

  padding: 40px 0 0 0;
`

export const Prototype = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "prototype_homefeatures.png" }) {
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
      <StudyTitle>Case Study: Friendly</StudyTitle>
      <CardFlex>
        <Image to="/">
          <Img fluid={data.file.childImageSharp.fluid} />
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
    </>
  )
}
