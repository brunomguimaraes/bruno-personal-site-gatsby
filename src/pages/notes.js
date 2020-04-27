import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Notes = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>MAH NOTES</h1>
    <p>Welcome to my notes</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Notes
