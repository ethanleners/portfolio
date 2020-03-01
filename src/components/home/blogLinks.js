import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { below } from "../../utilities"
import { Title1, Title2, HigherCard, Card } from "../molecule"

const OuterCard = styled(Card)`
  ${below[600]`
    flex-direction: column;
    margin: 30px 1% !important;
    margin-top: 5%;
  `}

  ${below[900]`
    align-items: center;
    margin: 5%;
  `}
`

const AllLinks = styled.div`
  ${props => `
  background: ${props.theme.colors.overlay};
  color: ${props.theme.colors.text};
`}

  ${below[900]`
  align-items: center;
  justify-content: space-around;
  padding-top: 0;
  padding-bottom: 0;
  margin: 5%;
`}

box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const LinkCard = styled(HigherCard)`
  ${below[600]`
    margin: 10px;
  `}
  width: 200px;
  height: 200px;
  padding: 10px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  transition-duration: 0.2s;
  &:hover {
    transform: scale(1.05);

    ${props => `
      svg {
        fill: ${props.theme.colors.accent};
      }

      h2 {
        color: ${props.theme.colors.accent};
      }
    `}
  }
`

const Title = styled(Title1)`
  ${below[900]`
    padding: 0;
    margin: 0;
  `}
  padding-top: 0;
  margin-top: -10px;
`

const ImageTitle = styled(Title2)`
  padding-top: 0;
  margin: 0;
  ${props => `
    color: ${props.theme.colors.text};
  `}
`

const StyledImage = styled.svg`
  ${props => `
    fill: ${props.theme.colors.text};
  `}
  transition-duration: 0.2s;
`

const Call = styled(Link)`
  ${props => `
  color: ${props.theme.colors.accent};
`}
  ${below[900]`
  font-size: 16px;
  line-height: 22px;
  padding: 10px;
`}
padding-top: 40px;
  font-family: Montserrat, Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  text-decoration: none;
  font-size: 20px;
  line-height: 30px;

  &:hover {
    text-decoration: underline;
  }
`

const Image = props => (
  <>
    {props.image === "values" && (
      <StyledImage
        width="134"
        height="134"
        viewBox="0 0 134 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M66.9999 11.1113C36.3666 11.1113 11.4443 36.0335 11.4443 66.6669C11.4443 97.3002 36.3666 122.222 66.9999 122.222C97.6332 122.222 122.555 97.3002 122.555 66.6669C122.555 36.0335 97.6332 11.1113 66.9999 11.1113ZM66.9999 111.111C42.4943 111.111 22.5554 91.1724 22.5554 66.6669C22.5554 42.1613 42.4943 22.2224 66.9999 22.2224C91.5054 22.2224 111.444 42.1613 111.444 66.6669C111.444 91.1724 91.5054 111.111 66.9999 111.111Z" />
        <path d="M44.7773 88.889L78.0607 77.7779L89.2218 44.4446L55.8885 55.5557L44.7773 88.889Z" />
      </StyledImage>
    )}
    {props.image === "readingList" && (
      <StyledImage
        width="134"
        height="134"
        viewBox="0 0 134 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M33.6667 122.222H117V111.111H33.7333C31.1667 111.044 28.1111 110.028 28.1111 105.556C28.1111 101.083 31.1667 100.067 33.7333 100H117V22.2222C117 16.0944 112.017 11.1111 105.889 11.1111H33.6667C26.9667 11.1111 17 15.55 17 27.7778V105.556C17 117.783 26.9667 122.222 33.6667 122.222ZM28.1111 44.4444V27.7778C28.1111 23.3055 31.1667 22.2889 33.6667 22.2222H105.889V88.8889H28.1111V44.4444Z" />
        <path d="M44.7773 33.3333H94.7773V44.4444H44.7773V33.3333Z" />
      </StyledImage>
    )}
    {props.image === "manifesto" && (
      <StyledImage
        width="134"
        height="134"
        viewBox="0 0 134 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M39.5557 94.5166L64.0723 94.4333L117.583 41.4333C119.683 39.3333 120.839 36.5444 120.839 33.5778C120.839 30.6111 119.683 27.8222 117.583 25.7222L108.772 16.9111C104.572 12.7111 97.2446 12.7333 93.0779 16.8944L39.5557 69.9055V94.5166V94.5166ZM100.917 24.7666L109.745 33.5611L100.872 42.35L92.0612 33.5444L100.917 24.7666ZM50.6668 74.5389L84.1668 41.3555L92.9779 50.1666L59.4834 83.3389L50.6668 83.3666V74.5389Z" />
        <path d="M28.4451 116.667H106.223C112.351 116.667 117.334 111.683 117.334 105.556V57.4001L106.223 68.5112V105.556H45.9895C45.8451 105.556 45.6951 105.611 45.5507 105.611C45.3673 105.611 45.184 105.561 44.9951 105.556H28.4451V27.7779H66.484L77.5951 16.6667H28.4451C22.3173 16.6667 17.334 21.6501 17.334 27.7779V105.556C17.334 111.683 22.3173 116.667 28.4451 116.667Z" />
      </StyledImage>
    )}
  </>
)

const BlogLinks = () => {
  return (
    <OuterCard>
      <Title>Featured Blogs</Title>
      <AllLinks>
        <LinkCard as={Link} to="blogpost/my-values">
          <Image image="values" />
          <ImageTitle>My Values</ImageTitle>
        </LinkCard>
        <LinkCard as={Link} to="blogpost/reading-list">
          <Image image="readingList" />
          <ImageTitle>Reading List</ImageTitle>
        </LinkCard>
        <LinkCard as={Link} to="blogpost/design-manifesto">
          <Image image="manifesto" />
          <ImageTitle>Manifesto</ImageTitle>
        </LinkCard>
      </AllLinks>
      <Call to="blogpost">See All Blogs →</Call>
    </OuterCard>
  )
}

export default BlogLinks
