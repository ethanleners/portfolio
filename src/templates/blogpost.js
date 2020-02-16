import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { below } from "../utilities"

import {
  Title1,
  Text1,
  Text2,
  OuterCardColumn,
  InnerCard,
} from "../components/molecule"

const Text = styled(Text1)`
  h2 {
    ${props => `
  color: ${props.theme.colors.secondary};
    `}
    ${below[600]`
    font-size: 20px;
    line-height: 29px;
    `}
    padding-top: 15px;
    font-size: 28px;
    font-family: Heebo, Arial, Roboto, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    line-height: 36px;
  }

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

  hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin: 40px 0 0 0;
  }

  .quote-card {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 3px 10px rgba(0, 0, 0, 0.12), 0px 6px 6px rgba(0, 0, 0, 0.06); */
    padding: 40px;
    margin: 0 0 40px 0;

    .quote {
      font-family: Montserrat, Heebo, Arial, Roboto, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif;
      font-style: italic;
    }

    .quote-author {
      padding-top: 10px;
    }
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
        {createdDate && (
          <Text2 style={{ paddingBottom: "0", paddingTop: "10px" }}>
            {createdDate}
          </Text2>
        )}
        {/* <Text2>
          {tags && tags.map(tag => (
            <>{tag}, </>
          ))}
        </Text2> */}
        {body && (
          <Text
            dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
          />
        )}
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
