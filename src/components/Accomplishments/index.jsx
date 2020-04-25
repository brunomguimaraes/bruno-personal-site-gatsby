import React from "react"
import SectionTitle from "../SectionTitle"
import ExperienceCard from "../ExperienceCard"
import JobExperiences from "../../global/constants.js"

import styles from "./styles.module.scss"

const Accomplishments = () => (
  <div className={styles["accomplishments"]}>
    <SectionTitle text={`What I've done so far`} />
    <div className={styles["accomplishmentsCards"]}>
      {JobExperiences.map(job => (
        <ExperienceCard
          title={job.title}
          role={job.role}
          date={job.date}
          photo={job.photo}
          location={job.location}
          description={job.description}
          url={job.url}
        />
      ))}
    </div>
  </div>
)

export default Accomplishments
