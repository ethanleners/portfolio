import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { below } from "../../utilities"

const Image = styled(Img)`
  max-width: 100px;
  width: 100%;
  ${below[900]`
  margin: 0 30px;
`}
`

export const AmyImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Amy.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Image fluid={data.file.childImageSharp.fluid} />
}
