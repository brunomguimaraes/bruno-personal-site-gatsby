import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import Accomplishments from "../components/Accomplishments"
// import Technologies from "../components/Technologies"
import Contact from "../components/Contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Bruno's Website" />
    <Hero />
    <article>
      <AboutMe />
    </article>
    <article>
      <Accomplishments />
    </article>
    {/* <article>
      <Technologies />
    </article> */}
    <article>
      <Contact />
    </article>
  </Layout>
)

export default IndexPage
