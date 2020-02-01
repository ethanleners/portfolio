import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Opener, Statement } from "../study"

export const Study = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "friendly2.png" }) {
        childImageSharp {
          fluid(maxWidth: 307) {
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

  return (
    <>
      <Opener
        image={<Img fluid={data.file.childImageSharp.fluid} />}
        copy={OpenerCopy}
        emphasis="This is a mock project intended to exhibit my design process."
        title="Case Study: Friendly"
      />
      <Statement />
    </>
  )
}
