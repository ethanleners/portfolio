import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Opener,
  Statement,
  Process,
  Research,
  StoryBoard,
  Personas,
  UserFlows,
  Wireframes,
  Prototype,
  Conclusion
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
      <UserFlows />
      <Wireframes />
      <Prototype />
      <Conclusion />
    </Layout>
  )
}
export default Portfolio
