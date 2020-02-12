import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Title1, Text2List, Text2, Title2, InnerCard } from "../components/molecule"

const Card = styled(InnerCard)`
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.01);
  }
`

const CardLink = styled.a`
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.01);
  }
`

const HostedText = styled.span`
  font-weight: bold;
  font-style: italic;
`

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <br />
      <Title1>Blogs</Title1>
      <br />
      <div className="blogposts">
        {blogPosts.map(({ node: post }) => {
          if (post.externalReference) {
            return (
              <Card
                as={CardLink}
                style={{ textDecoration: "none" }}
                href={post.externalLink}
                key={post.id}
              >
                <Text2List>
                  {post.createdDate}{" "}
                  {post.externalHost ? (
                    <HostedText>Hosted by {post.externalHost}</HostedText>
                  ) : (
                    <HostedText>Hosted externally</HostedText>
                  )}
                </Text2List>
                <Title2 style={{ marginTop: "0", paddingTop: "0" }}>
                  {post.title}
                </Title2>
              </Card>
            )
          } else {
            return (
              <Card
                as={Link}
                style={{ textDecoration: "none" }}
                to={`/blogpost/${post.slug}`}
                key={post.id}
              >
                <Text2List>{post.createdDate}</Text2List>
                <Title2 style={{ marginTop: "0", paddingTop: "0" }}>
                  {post.title}
                </Title2>
              </Card>
            )
          }
        })}
      </div>
    </Layout>
  )
}
export default BlogPosts
export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost(
      limit: 1000
      sort: { fields: [createdDate], order: [DESC] }
    ) {
      edges {
        node {
          id
          title
          createdDate(formatString: "MMMM D, YYYY")
          slug
          body {
            body
          }
          tags
          externalReference
          externalLink
          externalHost
        }
      }
    }
  }
`
