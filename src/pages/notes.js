import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

import "../styles/global.css"
import Hero from "../components/Hero"

const Notes = () => (
  <Layout>
    <SEO title="Bruno's Website" />
    <div>
    <article>
      <Hero />
    </article>
    </div>
  </Layout>
)

export default Notes
