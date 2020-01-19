import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import EthanMain from "../components/ethanMain"
import CaseStudy from "../components/caseStudy"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <EthanMain></EthanMain>
    <CaseStudy></CaseStudy>
  </Layout>
)

export default IndexPage
