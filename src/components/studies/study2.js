import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Opener,
  Statement,
  Process,
  Research,
  StoryBoardStudy2,
  Personas2,
  UserFlows2,
  Wireframes2,
  Prototype2,
  Conclusion2,
} from "../study-template"

export const Study2 = () => {
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
        'Notice is a mobile app designed to develop and facilitate the mindfulness technique of "noticing". Intrusive thoughts can really disrupt your day and taking time to notice these thoughts can help move past them. The Notice app has physical cues to help you notice free of judgment.',
      ],
    },
    {
      header: "My Role:",
      text: [
        "Lead storyboarding and conducted user research",
        "User Experience Design: creating user flows and wireframes",
        "Created high fidelity wireframes to better demonstrate experience",
      ],
    },
  ]

  const StatementCopy = [
    {
      header: "User/Business Problem:",
      text: [
        "Intrusive thoughts and anxieties can make it feel like you are out of control. ",
      ],
    },
    {
      header: "Objectives:",
      text: [
        "Develop an app to guide mindfulness practices in a non-judgmental way.",
      ],
    },
    {
      header: "Challenges:",
      text: [
        "Mobile devices can be the source of distractions.",
        "How do we encourage the use of the app without becoming intrusive?",
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
          A <strong>survey</strong> of users actively using meditation
          applications was conducted.{" "}
          <strong>
            A majority of users reported being overwhelmed by features
          </strong>
          . Participants who reported experiencing anxiety also reported a need
          for simple tools to build coping skills.
        </>,
        <></>,
        <>
          Additionally, we compared features of comparable apps with their
          number of downloads.
        </>,
      ],
    },
    {
      header: "Qualitative Research:",
      text: [
        <>
          After forming a <strong>focus group</strong> of users interested in
          mindfulness, we discovered that users prefer meditation tools that
          aren’t bogged down by too many features. Users expressed a{" "}
          <strong>preference for a simple user interface</strong>. Users
          attempting to build mindful practices want solutions that are easy to
          learn.
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
        title="Case Study: Notice"
      />
      <Statement copy={StatementCopy} />
      <Process title="The Process" steps={ProcessCopy} />
      <Research
        title="User Research"
        copy={ResearchCopyBoxes}
        closer={ResearchCopyCloser}
      />
      <StoryBoardStudy2 />
      <Personas2 />
      <UserFlows2 />
      <Wireframes2 />
      <Prototype2 />
      <Conclusion2 />
    </>
  )
}
