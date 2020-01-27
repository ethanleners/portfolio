import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Opener,
  Statement,
  Process,
  Research,
  StoryBoard,
  Personas,
} from "../components/study1"

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Blog posts" />
      <Opener />
      <Statement />
      <Process />
      <Research />
      <StoryBoard />
      <Personas />
    </Layout>
  )
}
export default Portfolio
