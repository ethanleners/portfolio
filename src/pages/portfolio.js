import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Study1,
  UserFlows,
  Wireframes,
  Prototype,
  Conclusion
} from "../components/studies"

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Blog posts" />
      <Study1 />
    </Layout>
  )
}
export default Portfolio
