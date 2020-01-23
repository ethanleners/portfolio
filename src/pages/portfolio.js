import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Opener, Statement } from "../components/study1"
import { ProcessStep } from "../components/organism/processStep"

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Blog posts" />
      <Opener></Opener>
      <Statement></Statement>
      <ProcessStep image="design" imageText="Apples"></ProcessStep>
    </Layout>
  )
}
export default Portfolio
