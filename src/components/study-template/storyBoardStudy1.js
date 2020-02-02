import React from "react"

import {
  SectionTitle,
  SectionCaption,
  OuterCardColumn,
  ImageWithText,
  ImagesWrapper,
} from "../molecule"

import overworked from "../../images/sb1_overworked.png"
import coffee from "../../images/sb2_coffee.png"
import reading from "../../images/sb3_reading.png"
import browse from "../../images/sb4_browse.png"
import friends from "../../images/sb5_friends.png"

const imageSizes = {
  vertical: {
    maxWidth: "145px",
    smallMaxWidth: "115px",
  },
  wide: {
    maxWidth: "289px",
    smallMaxWidth: "250px",
  },
}

export const StoryBoardStudy1 = () => (
  <>
    <SectionTitle>Storyboard</SectionTitle>
    <OuterCardColumn>
      <ImagesWrapper>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={overworked}
          description="Overworked"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={coffee}
          description="Coffee break!"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={reading}
          description="5 min reading"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={browse}
          description="Browse friends"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.wide.maxWidth}
          smallMaxWidth={imageSizes.wide.smallMaxWidth}
          image={friends}
          description="New friends and hobbies!"
        ></ImageWithText>
      </ImagesWrapper>
      <SectionCaption>
        Storyboarding helps to identify key parts of the experience of the user.
      </SectionCaption>
    </OuterCardColumn>
  </>
)
