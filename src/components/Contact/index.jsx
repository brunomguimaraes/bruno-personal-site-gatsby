import React from "react"
import SectionTitle from "../SectionTitle"
import Linkedin from "../assets/icons/Linkedin"
import Github from "../assets/icons/Github"
import Instagram from "../assets/icons/Instagram"
import Facebook from "../assets/icons/Facebook"
import Twitter from "../assets/icons/Twitter"
import Skype from "../assets/icons/Skype"

import styles from "./styles.module.scss"

const Contact = () => (
  <div className={styles["contact"]}>
    <SectionTitle text={`Hey, let's talk!`} />
    <span className={styles["contactDescription"]}>
      I prefer{" "}
      <a
        target="_blank"
        rel="me noopener noreferrer"
        href="https://www.linkedin.com/in/bruno-guimaraes1/"
        title="Linkedin"
        aria-label="Linkedin"
      >
        LinkedIn
      </a>{" "}
      messages and{" "}
      <a href="mailto:mguimaraesbruno@gmail.com">email</a>, but feel free to
      reach out through any of my social networks.
    </span>
    <div className={styles["contactSocialMedia"]}>
      <div className={styles["contactSocialMediaItem"]}>
        <a
          target="_blank"
          rel="me noopener noreferrer"
          href="https://www.linkedin.com/in/bruno-guimaraes1/"
          title="Linkedin"
          aria-label="Linkedin"
        >
          <Linkedin />
          <span>Linkedin</span>
        </a>
      </div>
      <div className={styles["contactSocialMediaItem"]}>
        <a
          target="_blank"
          rel="me noopener noreferrer"
          href="https://github.com/brunomguimaraes"
          title="Github"
          aria-label="Github"
        >
          <Github />
          <span>Github</span>
        </a>
      </div>
      <div className={styles["contactSocialMediaItem"]}>
        <a
          target="_blank"
          rel="me noopener noreferrer"
          href="https://twitter.com/brunaodev"
          title="Twitter"
          aria-label="Twitter"
        >
          <Twitter />
          <span>Twitter</span>
        </a>
      </div>
      <div className={styles["contactSocialMediaItem"]}>
        <a
          target="_blank"
          rel="me noopener noreferrer"
          href="https://www.instagram.com/brunao.moraes"
          title="Instagram"
          aria-label="Instagram"
        >
          <Instagram />
          <span>Instagram</span>
        </a>
      </div>
      <div className={styles["contactSocialMediaItem"]}>
        <a
          target="_blank"
          rel="me noopener noreferrer"
          href="skype:bruno27455?call"
          title="Skype"
          aria-label="Skype"
        >
          <Skype />
          <span>Skype</span>
        </a>
      </div>
      <div className={styles["contactSocialMediaItem"]}>
        <a
          target="_blank"
          rel="me noopener noreferrer"
          href="https://www.facebook.com/BrunaoMoraes"
          title="Facebook"
          aria-label="Facebook"
        >
          <Facebook />
          <span>Facebook</span>
        </a>
      </div>
    </div>
  </div>
)

export default Contact
