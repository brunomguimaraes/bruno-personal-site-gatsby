import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
      {/* <footer>Bruno Guimarães, © {new Date().getFullYear()}.</footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
