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

export const UserFlows2 = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      abby: file(relativePath: { eq: "Abby_userflow.png" }) {
        childImageSharp {
          fluid(maxWidth: 842) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paige: file(relativePath: { eq: "Paige_userflow.png" }) {
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

  const AbbyFlow = () => (
    <FullSizeImageWrapper>
      <Img fluid={data.abby.childImageSharp.fluid} />
    </FullSizeImageWrapper>
  )

  const PaigeFlow = () => (
    <FullSizeImageWrapper>
      <Img fluid={data.paige.childImageSharp.fluid} />
    </FullSizeImageWrapper>
  )

  return (
    <>
      <SectionTitle>User Flows</SectionTitle>
       <SlimCardColumn>
        <InnerCard>
          <Title>Abby</Title>
          <AbbyFlow></AbbyFlow>
          <ProcessWrapper>
            <NumberCard
              number="1"
              text="Tapping the “notice cloud” parallels Abby identifying her thoughts or emotions."
            />
            <NumberCard
              number="2"
              text="Abby can take notes about specific instances of feeling anxious."
            />
            <NumberCard
              number="3"
              text="At a glance, Abby can track the number of times she has noticed her thoughts/feelings."
            />
            <NumberCard
              number="4"
              text="Abby can read more about how mindfulness can help build coping skills."
            />
          </ProcessWrapper>
        </InnerCard>
        <InnerCard>
          <Title>Paige</Title>
          <PaigeFlow></PaigeFlow>
          <ProcessWrapper>
            <NumberCard
              number="1"
              text="Paige needs the “notice cloud” as a physical cue to reminder her to notice her thoughts/feelings."
            />
            <NumberCard
              number="2"
              text="Using the calendar, Paige can track her progress learning these techniques."
            />
            <NumberCard
              number="3"
              text="Readings allow Paige to better understand how to be mindful throughout the day."
            />
          </ProcessWrapper>
        </InnerCard>
       </SlimCardColumn>
    </>
  )
}
