import React from "react"
import {
  SectionTitle,
  SectionCaption,
  ImagesWrapper,
  InnerCard,
  ImageWithText,
} from "../molecule"

import home from "../../images/wireframe2_home_notice.png"
import noticed from "../../images/wireframe2_noticed_notice.png"
import note from "../../images/wireframe2_note_notice.png"
import read from "../../images/wireframe2_read_notice.png"
import track from "../../images/wireframe2_track_notice.png"

const imageSizes = {
  vertical: {
    maxWidth: "160px",
    smallMaxWidth: "115px",
  },
}

export const Wireframes2 = () => (
  <>
    <SectionTitle>Wireframes</SectionTitle>
    <InnerCard>
      <ImagesWrapper>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={home}
          description="Home Screen"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={noticed}
          description="Noticed"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={note}
          description="Note"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={read}
          description="Read"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={track}
          description="Track"
        ></ImageWithText>
      </ImagesWrapper>
      <SectionCaption>
        User flows helped to identify key screens to develop.
      </SectionCaption>
    </InnerCard>
  </>
)
