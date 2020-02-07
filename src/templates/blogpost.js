import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { below } from "../utilities"

import { Title1, Text1, Text2 } from "../components/molecule"

const Text = styled(Text1)`
  h3 {
    ${props => `
  color: ${props.theme.colors.secondary};
    `}
    ${below[600]`
    font-size: 20px;
    line-height: 29px;
    `}
    font-size: 28px;
    font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    line-height: 36px;
    font-weight: normal;
  }
`

const FlexRow = styled.div`
  ${below[600]`
    display: flex;
    flex-direction: column-reverse;
  `}
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`

const BlogLink = styled(Link)`
  ${props => `
      color: ${props.theme.colors.accent};
    `}
  ${below[600]`
    font-size: 18px;
    line-height: 25px;
    `}
    padding-top: 20px;
  font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  font-size: 20px;
  line-height: 29px;
  align-self: flex-start;
  justify-self: flex-end;
`

const BlogPost = ({ data }) => {
  const { title, body, createdDate, tags } = data.contentfulBlogPost
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <br />
        <br />
        <br />
        <br />
        <FlexRow>
          <Title1>{title}</Title1>
          <BlogLink to="/blogposts">View all posts</BlogLink>
        </FlexRow>

        {/* {image && (
          <img
            style={{ width: "auto", maxHeight: "400px" }}
            alt={title}
            src={image.file.url}
          />
        )} */}
        <Text2 style={{ paddingBottom: "0", paddingTop: "10px" }}>
          {createdDate}
        </Text2>
        {/* <Text2>
          {tags && tags.map(tag => (
            <>{tag}, </>
          ))}
        </Text2> */}
        <Text
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
        <FlexRow>
          <div></div>
          <BlogLink to="/blogposts">View more posts</BlogLink>
        </FlexRow>
      </div>
    </Layout>
  )
}
export default BlogPost
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdDate(formatString: "MMMM D, YYYY")
      slug
      body {
        childMarkdownRemark {
          html
        }
        body
      }
      tags
    }
  }
`
