import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Study,
  Statement,
  Process,
  Research,
  StoryBoard,
  Personas,
  UserFlows,
  Wireframes,
  Prototype,
  Conclusion
} from "../components/studies"

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Blog posts" />
      <Study />
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
