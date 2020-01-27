import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Objective } from "../components/resume"

const Resume = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <Objective />
    </Layout>
  )
}
export default Resume
