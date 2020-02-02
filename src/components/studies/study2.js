import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Opener,
  Statement,
  Process,
  Research,
  StoryBoardStudy1,
  Personas,
  UserFlows1,
  Wireframes1,
  Prototype1,
  Conclusion,
} from "../study-template"

export const Study2 = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Preview_Notice.png" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const OpenerCopy = [
    {
      header: "What is it?",
      text: [
        "Friendly is a social media networking app that offers skill-building opportunities to help make deep, lasting friendships.",
      ],
    },
    {
      header: "My Role:",
      text: [
        "Lead storyboarding and conducted user research",
        "Created high fidelity wireframes to better demonstrate experience",
      ],
    },
  ]

  const StatementCopy = [
    {
      header: "User/Business Problem:",
      text: [
        "Making and maintaining friendships as an adult can be difficult.",
      ],
    },
    {
      header: "Objectives:",
      text: [
        "Develop an app that offers the user opportunities to develop new friendships as well as skill-building content.",
      ],
    },
    {
      header: "Challenges:",
      text: [
        "Overabundance of social networking apps.",
        "Limited time to spend on self-development.",
      ],
    },
  ]

  const ProcessCopy = [
    {
      image: "experience",
      imageText: "Empathize with the user",
      number: 1,
      text: [
        <>
          Starting with <strong>user research</strong> and{" "}
          <strong>storyboarding</strong> allows the team to get a good
          understanding of the user and how they could interact with the
          product. Using multiple research methodologies insures that we have
          robust data.
        </>,
      ],
    },
    {
      image: "user",
      imageText: "Understand the experience",
      number: 2,
      text: [
        <>
          Creating detailed <strong>user personas</strong> fosters empathy.
          Understanding the user to this degree allows us to predict how they
          might make decisions. This also helps to keep us focused on the user
          and not on the features.
        </>,
      ],
    },
    {
      image: "map",
      imageText: "Map user flows",
      number: 3,
      text: [
        <>
          Employing the user persona, I create <strong>user flows</strong> to
          map the actions that a user might take in order to reach their goals.
          I start with a low-fidelity prototype to iterate quickly and progress
          to more detailed prototypes as I continue.
        </>,
      ],
    },
    {
      image: "design",
      imageText: "Design Prototype",
      number: 4,
      text: [
        <>
          Developing a high-fidelity <strong>prototype</strong> allows the
          stakeholders to experience the product in a form closer to how it will
          be upon completion.
        </>,
        <>The process of iteration/user research continues from here.</>,
      ],
    },
  ]

  const ResearchCopyBoxes = [
    {
      header: "Quantitative Research:",
      text: [
        <>
          Surveys were conducted of age-specific audiences to identify
          population groups who report the most difficulty in making and
          sustaining friendships. Results suggested that{" "}
          <strong>adults around the ages of 24-45 would benefit most</strong>{" "}
          from support in making friends.
        </>,
        <></>,
        <>
          Participants were also surveyed on dissatisfaction with features of
          other social media applications.{" "}
          <strong>
            A majority of participants reported being dissatisfied
          </strong>{" "}
          with features that defined groups by age, gender, workplace, or school
          as qualifiers for potential friendship matches.
        </>,
      ],
    },
    {
      header: "Qualitative Research:",
      text: [
        <>
          User interviews provided insights into the pain points of our target
          audience. The resulting data suggested that alternative social media
          applications do not provide learning opportunities and often value
          superficial metrics when browsing potential matches.{" "}
          <strong>
            Participants indicated that they would find value in alternative
            features.
          </strong>
        </>,
      ],
    },
  ]

  const ResearchCopyCloser = (
    <>
      At this stage, research provides{" "}
      <strong>baseline metrics for the success</strong> of our design as well as
      the opportunity to make <strong>user-focused design choices</strong>.
    </>
  )

  const ConclusionCopy = {
    title: "Next Steps",

  }

  return (
    <>
      <Opener
        image={<Img fluid={data.file.childImageSharp.fluid} />}
        imageWidth="245px"
        copy={OpenerCopy}
        emphasis="This is a mock project intended to exhibit my design process."
        title="Case Study: Friendly"
      />
      <Statement copy={StatementCopy} />
      <Process title="The Process" steps={ProcessCopy} />
      <Research
        title="User Research"
        copy={ResearchCopyBoxes}
        closer={ResearchCopyCloser}
      />
      <StoryBoardStudy1 />
      <Personas />
      <UserFlows1 />
      <Wireframes1 />
      <Prototype1 />
      <Conclusion />
    </>
  )
}
