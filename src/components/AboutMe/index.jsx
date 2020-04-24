import React from "react"
import SectionTitle from "../SectionTitle"

import styles from "./styles.module.scss"

const AboutMe = () => (
  <div className={styles["aboutMe"]}>
    <SectionTitle text={`About Me`} />
    I'm a Software Enginner / developer based in Salvador, Brazil. I have a
    passion for technology and love to come up with smart solutions to our
    everyday problems.
  </div>
)

export default AboutMe
