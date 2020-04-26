import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NodejsIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nodejs.png" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default NodejsIcon