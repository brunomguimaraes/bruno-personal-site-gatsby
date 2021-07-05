import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.scss"

const PostLink = ({ post }) => {

  return (
    <Link to={post.frontmatter.slug}>
      <div className={styles["postLink"]}>
        <span>Theme</span>
        <p>{post.frontmatter.title}</p>
        <p>({post.frontmatter.date})</p>
        <span>Read more...</span>
      </div>
    </Link>
  )
}

export default PostLink
