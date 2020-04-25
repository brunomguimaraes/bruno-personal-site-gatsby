import React from "react"

import styles from "./styles.module.scss"

const SectionTitle = ({ text }) => (
  <h3 className={styles["headerText"]}>{`━━━━  ${text}  ━━━━`}</h3>
)

export default SectionTitle
