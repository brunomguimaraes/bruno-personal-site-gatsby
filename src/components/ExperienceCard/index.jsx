import React from "react"
import PhotoSelector from "../PhotoSelector"

import styles from "./styles.module.scss"

const ExperienceCard = ({
  title,
  role,
  date,
  location,
  description,
  photo,
  url,
}) => (
  <div className={styles["experienceCard"]}>
    <div className={styles["experienceCardImageSection"]}>
      <div className={styles["experienceCardImage"]}>
        <PhotoSelector photoName={photo} />
      </div>
    </div>
    <div className={styles["experienceCardInformationSection"]}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className={styles["experienceCardTitle"]}
      >
        {title}
      </a>
      <div className={styles["experienceCardRole"]}>{role}</div>
      <div className={styles["experienceCardDate"]}>{date}</div>
      <div className={styles["experienceCardLocation"]}>{location}</div>
      <span className={styles["experienceCardDescription"]}>{description}</span>
    </div>
  </div>
)

export default ExperienceCard
