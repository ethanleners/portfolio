import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { below } from "../utilities"

const CaseStudy = () => {
  const Card = styled.div`
    ${props => `
      background: ${props.theme.colors.overlay};
      color: ${props.theme.colors.text};
    `}

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

    margin-top: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    padding: 40px 0;
    justify-content: space-between;
  `

  const StudyText = styled.div`
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
    padding: 0 40px;
    height: 100%;
    box-sizing: border-box;
  `

  const Title = styled.div`
    ${props => `
      color: ${props.theme.colors.secondary};
    `}
    font-size: 34px;
    line-height: 50px;
  `

  const Description = styled.div`
    ${props => `
      color: ${props.theme.colors.text};
    `}
    font-family: Montserrat, Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 20px;
    line-height: 24px;
    padding: 20px 0;
  `

  const Call = styled.div`
    ${props => `
      color: ${props.theme.colors.accent};
      `}
    font-family: Montserrat, Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 20px;
    line-height: 30px;
  `

  const EthanImage = styled(Img)`
    max-width: 428px;
    width: 100%;
    ${below[900]`
      margin: 0 30px;
    `}
  `

  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "case_study_1.png" }) {
  //       childImageSharp {
  //         fixed(width: 428) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "case_study_1.png" }) {
        childImageSharp {
          fluid(maxWidth: 428) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Card>
      <EthanImage fluid={data.file.childImageSharp.fluid} />
      <StudyText>
        <Title>Case Study Title</Title>
        <Description>
          Short description of the project. What is it and who is it for?
        </Description>
        <Call>Read Case Study →</Call>
      </StudyText>
    </Card>
  )
}

export default CaseStudy
