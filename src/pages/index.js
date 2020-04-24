import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Bruno's Website" />
    <Hero />
    <AboutMe />
  </Layout>
)

export default IndexPage
