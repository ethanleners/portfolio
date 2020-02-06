import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Title1, Text1, Text2 } from "../components/molecule"

const Text = styled(Text1)`
  h3 {
    font-family: Heebo;
  }
`;


const BlogPost = ({ data }) => {
  const { title, body, image, tags } = data.contentfulBlogPost
  console.log(body)
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <Title1>{title}</Title1>
        <img style={{width: 'auto', maxHeight: '400px'}} alt={title} src={image.file.url} />
        <Text2>
          {tags.map(tag => (
              <>{tag}, </>
          ))}
          </Text2>
        <Text dangerouslySetInnerHTML={{__html:body.childMarkdownRemark.html}} />
        <Link to="/blogposts">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}
export default BlogPost
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
        body
      }
      image {
        file {
          url
        }
      }
      tags
    }
  }
`