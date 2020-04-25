import React from "react"
import SectionTitle from "../SectionTitle"
import Avatar from "../Photos/Avatar"

import styles from "./styles.module.scss"

const AboutMe = () => (
  <div className={styles["aboutMe"]}>
    <div className={styles["aboutMePicture"]}>
      <Avatar />
    </div>
    <SectionTitle text={`About Me`} />
    <span className={styles["aboutMeDescription"]}>
      I'm a Software Enginner based in Salvador, Brazil. I have a
      passion for technology and love to come up with smart solutions to our
      everyday problems.
    </span>
  </div>
)

export default AboutMe
