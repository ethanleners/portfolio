import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { NumberCard } from "../organism"
import { SectionTitle, Title3, Card } from "../molecule"
import { below } from "../../utilities"

const OuterCard = styled(Card)`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
`

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
const ProcessWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
`

const ImageWrapper = styled.div`
  ${below[900]`
    padding: 0;
  `}
  padding-right: 30px;
`

export const UserFlows = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      amy: file(relativePath: { eq: "Amy_userflow.png" }) {
        childImageSharp {
          fluid(maxWidth: 842) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      matthew: file(relativePath: { eq: "Matthew_userflow.png" }) {
        childImageSharp {
          fluid(maxWidth: 842) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Title = styled(Title3)`
    padding: 10px 0;
  `

  const AmyFlow = () => (
    <ImageWrapper>
      <Img fluid={data.amy.childImageSharp.fluid} />
    </ImageWrapper>
  )

  const MatthewFlow = () => (
    <ImageWrapper>
      <Img fluid={data.matthew.childImageSharp.fluid} />
    </ImageWrapper>
  )

  return (
    <>
      <SectionTitle>User Flows</SectionTitle>
      <OuterCard>
        <InnerCard>
          <Title>Matthew</Title>
          <MatthewFlow></MatthewFlow>
          <ProcessWrapper>
            <NumberCard
              number="1"
              text="Browsing friends and sorting by interests insures he has common ground when making new friends."
            />
            <NumberCard
              number="2"
              text="At a glance, Matthew can keep track of multiple conversations."
            />
            <NumberCard
              number="3"
              text="Because he can only chat with potential friends with a mutual interest in being friends, he can be comfortable starting a conversation."
            />
            <NumberCard
              number="4"
              text="Matching with a potential friend opens a chat window so Matthew can easily start a conversation."
            />
          </ProcessWrapper>
        </InnerCard>
        <InnerCard>
          <Title>Amy</Title>
          <AmyFlow></AmyFlow>
          <ProcessWrapper>
            <NumberCard
              number="1"
              text="Articles help Amy develop skills to make and maintain friends as well as give her advice on the dangers of meeting people online."
            />
            <NumberCard
              number="2"
              text="Browsing friends by location insures Amy can make friends in new cities."
            />
            <NumberCard
              number="3"
              text="Useful tools help Amy edit her profile to put her best foot forward while staying authentic."
            />
          </ProcessWrapper>
        </InnerCard>
      </OuterCard>
    </>
  )
}
