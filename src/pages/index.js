import React from "react"
import Layout from "../components/layout"
import EthanMain from "../components/home/ethanMain"
import CaseStudy from "../components/home/caseStudy"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Ethan Leners | Home"
      keywords={[`design`, `user experience`, `blog`]}
    />
    <CaseStudy />
  </Layout>
)

export default IndexPage
