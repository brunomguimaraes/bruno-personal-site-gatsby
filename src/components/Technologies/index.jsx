import React from "react"
import SectionTitle from "../SectionTitle"
import ReactIcon from "../assets/icons/ReactIcon"
import GraphqlIcon from "../assets/icons/GraphqlIcon"
import ApolloIcon from "../assets/icons/ApolloIcon"
import RelayIcon from "../assets/icons/RelayIcon"
import CypressIcon from "../assets/icons/CypressIcon"
import NodejsIcon from "../assets/icons/NodejsIcon"
import MaterialuiIcon from "../assets/icons/MaterialuiIcon"
import PythonIcon from "../assets/icons/PythonIcon"
import ScalaIcon from "../assets/icons/ScalaIcon"
import SassIcon from "../assets/icons/SassIcon"
import TypescriptIcon from "../assets/icons/TypescriptIcon"

import styles from "./styles.module.scss"

const Technologies = () => (
  <div className={styles["technologies"]}>
    <SectionTitle text={`Skills`} />
    <span className={styles["technologiesDescription"]}>
      Here are some of the technologies I've used professionally
    </span>
    <div className={styles["technologiesIconContainer"]}>
      <div className={styles["technologiesIcon"]}>
        <div className={styles["technologiesIconThumb"]}>
          <ReactIcon />
        </div>
        <span className={styles["technologiesIconLabel"]}>React</span>
      </div>
      <div className={styles["technologiesIcon"]}>
        <div className={styles["technologiesIconThumb"]}>
          <GraphqlIcon />
        </div>
        <span className={styles["technologiesIconLabel"]}>GraphQL</span>
      </div>
      <div className={styles["technologiesIcon"]}>
        <div className={styles["technologiesIconThumb"]}>
          <ApolloIcon />
        </div>
        <span className={styles["technologiesIconLabel"]}>Apollo</span>
      </div>
      <div className={styles["technologiesIcon"]}>
        <div className={styles["technologiesIconThumb"]}>
          <RelayIcon />
        </div>
        <span className={styles["technologiesIconLabel"]}>Relay</span>
      </div>
      <div className={styles["technologiesIcon"]}>
        <div className={styles["technologiesIconThumb"]}>
          <CypressIcon />
        </div>
        <span className={styles["technologiesIconLabel"]}>Cypress</span>
      </div>
      <div className={styles["technologiesIcon"]}>
        <div className={styles["technologiesIconThumb"]}>
          <NodejsIcon />
        </div>
        <span className={styles["technologiesIconLabel"]}>NodeJS</span>
      </div>
      <div className={styles["technologiesIcon"]}>
        <div className={styles["technologiesIconThumb"]}>
          <MaterialuiIcon />
        </div>
        <span className={styles["technologiesIconLabel"]}>MaterialUI</span>
      </div>
      <div className={styles["technologiesIcon"]}>
        <div className={styles["technologiesIconThumb"]}>
          <PythonIcon />
        </div>
        <span className={styles["technologiesIconLabel"]}>Python</span>
      </div>
      <div className={styles["technologiesIcon"]}>
        <div className={styles["technologiesIconThumb"]}>
          <SassIcon />
        </div>
        <span className={styles["technologiesIconLabel"]}>Sass</span>
      </div>
      <div className={styles["technologiesIcon"]}>
        <div className={styles["technologiesIconThumb"]}>
          <ScalaIcon />
        </div>
        <span className={styles["technologiesIconLabel"]}>Scala</span>
      </div>
      <div className={styles["technologiesIcon"]}>
        <div className={styles["technologiesIconThumb"]}>
          <TypescriptIcon />
        </div>
        <span className={styles["technologiesIconLabel"]}>Typescript</span>
      </div>
    </div>
  </div>
)

export default Technologies
