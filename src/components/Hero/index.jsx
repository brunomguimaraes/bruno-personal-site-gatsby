import React from "react"
import RocketSVG from "../assets/svg/rocketSvg"

import styles from "./styles.module.scss"

const Hero = () => (
  <div className={styles["hero"]}>
    <h1 className={styles["heroHeader"]}>Hi, my name is Bruno</h1>
    <h2 className={styles["heroSubHeader"]}>and i'm a software engineer</h2>
    <RocketSVG className={styles["heroRocket"]} />
  </div>
)

export default Hero
