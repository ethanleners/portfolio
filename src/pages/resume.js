import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Objective, Education, Skills } from "../components/resume"

const Resume = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <Objective />
      <Education />
      <Skills />
    </Layout>
  )
}
export default Resume
