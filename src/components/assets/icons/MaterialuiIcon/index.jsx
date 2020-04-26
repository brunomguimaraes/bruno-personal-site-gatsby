import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MaterialuiIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "materialui.png" }) {
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

export default MaterialuiIcon