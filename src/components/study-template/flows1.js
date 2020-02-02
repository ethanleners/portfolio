import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { NumberCard } from "../organism"
import {
  SectionTitle,
  Title3,
  InnerCard,
  SlimCardColumn,
  ProcessWrapper,
  FullSizeImageWrapper,
} from "../molecule"

export const UserFlows1 = ({ children }) => {
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
    <FullSizeImageWrapper>
      <Img fluid={data.amy.childImageSharp.fluid} />
    </FullSizeImageWrapper>
  )

  const MatthewFlow = () => (
    <FullSizeImageWrapper>
      <Img fluid={data.matthew.childImageSharp.fluid} />
    </FullSizeImageWrapper>
  )

  return (
    <>
      <SectionTitle>User Flows</SectionTitle>
       <SlimCardColumn>
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
       </SlimCardColumn>
    </>
  )
}
