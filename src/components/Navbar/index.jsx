import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.scss"

const Navbar = () => (
  <nav className={styles["navbar"]}>
    <div className={styles["navbarContainer"]}>
      <ul className={styles["navLinks"]}>
        <li className={styles["navItem"]}>
          <Link
            to="/"
          >
            About
          </Link>
        </li>
        <li className={styles["navItem"]}>
          <Link
            to="/notes"
          >
            Notes
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
