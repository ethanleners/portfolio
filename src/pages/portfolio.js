import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Opener, Statement, Process } from "../components/study1"


const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Blog posts" />
      <Opener></Opener>
      <Statement></Statement>
      <Process></Process>
    </Layout>
  )
}
export default Portfolio
