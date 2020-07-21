import React from "react"

import styles from "./styles.module.scss"

const Hero = () => (
  <div className={styles["hero"]}>
    <h1 className={styles["heroHeader"]}>hi, my name is <strong>Bruno Guimarães</strong></h1>
    <h2 className={styles["heroSubHeader"]}>and I'm a software engineer</h2>
  </div>
)

export default Hero
