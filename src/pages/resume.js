import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Education, Skills } from "../components/resume"

const Resume = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <Education />
      <Skills />
    </Layout>
  )
}
export default Resume
