import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

import "../styles/global.css"
import HeroBlog from "../components/HeroBlog"

const Notes = () => (
  <Layout>
    <SEO title="Bruno's Website" />
    <HeroBlog />
  </Layout>
)

export default Notes
