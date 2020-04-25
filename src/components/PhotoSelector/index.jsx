import React from "react"

import Jus from "../Photos/Jus"
import Cubos from "../Photos/Cubos"
import White from "../Photos/White"

const PhotoSelector = ({ photoName }) => {
  if (photoName === "jus") {
    return <Jus />
  } else if (photoName === "cubos") {
    return <Cubos />
  } else if (photoName === "white") {
    return <White />
  } else {
    return <div>Not Found</div>
  }
}

export default PhotoSelector
