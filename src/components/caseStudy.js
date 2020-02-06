import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { below } from "../utilities"
import { Title1, Text1, Card } from "./molecule"

const caseStudyUrls = {
  friendly: "/portfolio/friendly",
  notice: "/portfolio/notice",
}

const CaseStudyCard = styled(Card)`
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
padding: 40px 40px 40px 0;
justify-content: space-between;
`

const CaseStudy = () => {
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

  const Call = styled(Link)`
    ${props => `
      color: ${props.theme.colors.accent};
    `}
    ${below[600]`
      font-size: 16px;
      line-height: 22px;
    `}
    font-family: Montserrat, Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    text-decoration: none;
    font-size: 20px;
    line-height: 30px;

    &:hover {
      text-decoration: underline;
    }
  `

  const Image = styled(Link)`
    ${below[900]`
      margin: 0 30px;
      padding-right: 0;
    `}

    ${props =>
      props.caseStudy === "notice"
        ? `max-width: 292px;
        padding-right: 50px;`
        : `max-width: 428px;`}
    width: 100%;
    max-height: 402px;
  `

  const data = useStaticQuery(graphql`
    query {
      friendly: file(relativePath: { eq: "friendly2.png" }) {
        childImageSharp {
          fluid(maxWidth: 428) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      notice: file(relativePath: { eq: "Preview_Notice.png" }) {
        childImageSharp {
          fluid(maxWidth: 292) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const CaseStudyImage = props => (
    <Image caseStudy={props.caseStudy} to={props.caseStudyUrl}>
      {props.image}
    </Image>
  )

  const Title = props => {
    const TitleLink = styled(Link)`
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        ${props => `
          color: ${props.theme.colors.secondary};
        `}
      }
    `
    return (
      <TitleLink to={props.caseStudyUrl}>
        <Title1>{props.children}</Title1>
      </TitleLink>
    )
  }

  return (
    <>
      <CaseStudyCard>
        <CaseStudyImage
          image={
            <Img
              style={{ maxHeight: "402px" }}
              fluid={data.friendly.childImageSharp.fluid}
            />
          }
          caseStudyUrl={caseStudyUrls.friendly}
          caseStudy="friendly"
        />
        <StudyText>
          <Title caseStudyUrl={caseStudyUrls.friendly}>
            Case Study: Friendly
          </Title>
          <Text1>
            A social media networking app that offers skill-building
            opportunities to help make deep, lasting friendships.
          </Text1>
          <Call to={caseStudyUrls.friendly}>Read Case Study →</Call>
        </StudyText>
      </CaseStudyCard>
      <CaseStudyCard>
        <CaseStudyImage
          image={<Img fluid={data.notice.childImageSharp.fluid} />}
          caseStudyUrl={caseStudyUrls.notice}
          caseStudy="notice"
        />
        <StudyText>
          <Title caseStudyUrl={caseStudyUrls.notice}>Case Study: Notice</Title>
          <Text1>
            Notice is a mobile app designed to develop and facilitate the
            mindfulness technique of "noticing".
          </Text1>
          <Call to={caseStudyUrls.notice}>Read Case Study →</Call>
        </StudyText>
      </CaseStudyCard>
    </>
  )
}

export default CaseStudy
