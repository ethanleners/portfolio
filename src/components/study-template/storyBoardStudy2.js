import React from "react"

import {
  SectionTitle,
  SectionCaption,
  OuterCardColumn,
  ImageWithText,
  ImagesWrapper,
} from "../molecule"

import intrusive from "../../images/sbn1_intrusive.png"
import app from "../../images/sbn2_app.png"
import tap from "../../images/sbn3_tap.png"
import diffuse from "../../images/sbn4_diffuse.png"
import peace from "../../images/sbn5_peace.png"

const imageSizes = {
  vertical: {
    maxWidth: "145px",
    smallMaxWidth: "115px",
  },
  wide: {
    maxWidth: "223px",
    smallMaxWidth: "200px",
  },
}

export const StoryBoardStudy2 = () => (
  <>
    <SectionTitle>Storyboard</SectionTitle>
    <OuterCardColumn>
      <ImagesWrapper>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={intrusive}
          description="Intrusive thought"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={app}
          description="Open app"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.wide.maxWidth}
          smallMaxWidth={imageSizes.wide.smallMaxWidth}
          image={tap}
          description='Tap to “notice”'
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={diffuse}
          description="Noticed"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={peace}
          description="Peace of mind"
        ></ImageWithText>
      </ImagesWrapper>
      <SectionCaption>
        Storyboarding helps to identify key parts of the experience of the user.
      </SectionCaption>
    </OuterCardColumn>
  </>
)
