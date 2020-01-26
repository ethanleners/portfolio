import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { SectionTitle, Text2 } from "../molecule"
import { below } from "../../utilities"
import { ProcessStep } from "../organism/processStep"

const ProcessWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ProcessText = styled(Text2)`
  padding-left: 20px;
`;

export const Process = props => (
  <>
    <SectionTitle>The Process</SectionTitle>
    <ProcessWrapper>
      <ProcessStep
        image="experience"
        imageText="Empathize with the user"
        number="1"
      >
        <ProcessText>
          Starting with <strong>user research</strong> and <strong>storyboarding</strong> allows the
          team to get a good understanding of the user and how they could
          interact with the product. Using multiple research methodologies
          insures that we have robust data.
        </ProcessText>
      </ProcessStep>
      <ProcessStep
        image="user"
        imageText="Understand the experience"
        number="2"
      >
        <ProcessText>
          Creating detailed <strong>user personas</strong> fosters empathy. Understanding
          the user to this degree allows us to predict how they might make
          decisions. This also helps to keep us focused on the user and not on
          the features.
        </ProcessText>
      </ProcessStep>
      <ProcessStep image="map" imageText="Map user flows" number="3">
        <ProcessText>
          Employing the user persona, I create <strong>user flows</strong> to map the
          actions that a user might take in order to reach their goals. I start
          with a low-fidelity prototype to iterate quickly and progress to more
          detailed prototypes as I continue.
        </ProcessText>
      </ProcessStep>
      <ProcessStep image="design" imageText="Design Prototype" number="4">
        <ProcessText>
          Developing a high-fidelity <strong>prototype</strong> allows the stakeholders to
          experience the product in a form closer to how it will be upon
          completion.
          <br />
          The process of iteration/user research continues from here.
        </ProcessText>
      </ProcessStep>
    </ProcessWrapper>
  </>
)
