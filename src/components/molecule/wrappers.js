import styled from "styled-components"
import React from "react"
import { Text2 } from "../molecule"
import { below } from "../../utilities"

export const ImageWrapper = styled.div`
  max-width: ${props => props.maxWidth};
  width: 100%;
  ${below[900]`
      margin: 0 30px;
    `}
`

export const FullSizeImageWrapper = styled.div`
  ${below[900]`
    padding: 0;
  `}
  padding-right: 30px;
`

export const ProcessWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
`

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const CardText = styled.div`
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
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 0 0 40px;
  height: 100%;
  box-sizing: border-box;
`

export const ImageWithText = props => {
  const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `

  const Image = styled.img`
    ${below[600]`
    max-width:  ${props => props.smallMaxWidth};
    margin-top: 20px;
  `}
    padding: 5px;
    max-width: ${props => props.maxWidth};
  `

  return (
    <ImageWrapper>
      <Image maxWidth={props.maxWidth}
      smallMaxWidth={props.smallMaxWidth}
      src={props.image} />
      <Text2>{props.description}</Text2>
    </ImageWrapper>
  )
}
