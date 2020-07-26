import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.scss"

const PostLink = ({ post }) => (
  <div className={styles["postLink"]}>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink