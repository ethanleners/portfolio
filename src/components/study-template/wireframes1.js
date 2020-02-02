import React from "react"
import {
  SectionTitle,
  SectionCaption,
  ImagesWrapper,
  InnerCard,
  ImageWithText,
} from "../molecule"

import home from "../../images/Wireframe_Home.png"
import article from "../../images/Wireframe_Article.png"
import browse from "../../images/Wireframe_Browse.png"
import chat from "../../images/Wireframe_Chat.png"
import edit from "../../images/Wireframe_Edit.png"

const imageSizes = {
  vertical: {
    maxWidth: "160px",
    smallMaxWidth: "115px",
  },
}

export const Wireframes1 = () => (
  <>
    <SectionTitle>Wireframes</SectionTitle>
    <InnerCard>
      <ImagesWrapper>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={home}
          description="Home"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={article}
          description="Daily Reading"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={browse}
          description="Browse"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={chat}
          description="Chat"
        ></ImageWithText>
        <ImageWithText
          maxWidth={imageSizes.vertical.maxWidth}
          smallMaxWidth={imageSizes.vertical.smallMaxWidth}
          image={edit}
          description="Edit Profile"
        ></ImageWithText>
      </ImagesWrapper>
      <SectionCaption>
        User flows helped to identify key screens to develop.
      </SectionCaption>
    </InnerCard>
  </>
)
