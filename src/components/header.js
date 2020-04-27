import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/animations.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className={"headerContainer"}>
      <div className={"headerLinks"}>
        <Link to="/" className={"headerLinkItem"}>
          About
        </Link>
        <Link to="/notes" className={"headerLinkItem"}>
          Notes
        </Link>
        <div class="headerUnderbar"></div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
