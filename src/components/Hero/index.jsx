import React from "react"
import RocketSVG from "../assets/svg/rocketSvg"

import styles from "./styles.module.scss"

const Hero = () => (
  <div className={styles["hero"]}>
    <RocketSVG className={styles["heroRocket"]} />
    <h1 className={styles["heroHeader"]}>
      Hi, my name is Bruno and i'm a software engineer
    </h1>
  </div>
)

export default Hero
