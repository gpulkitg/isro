import React, { useMemo } from "react"
import { useStaticQuery, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import PropTypes from 'prop-types'

export default function Image(props) {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              # sizes(maxWidth: 800) {
              #   ...GatsbyImageSharpSizes
              # }
            }
          }
        }
      }
    }
  `)

//   const match = useMemo(() => (
//     data.images.edges.find(({ node }) => src === node.relativePath)
//   ), [data, src])
//
//   if (!match) return null
//
//   const { node: { childImageSharp, publicURL, extension } = {} } = match
//
//   if (extension === 'svg' || !childImageSharp) {
//     return <img src={publicURL} {...rest} />
//   }
//
//   return <Img fluid={childImageSharp.fluid} {...rest} />
// }
//
//
// Image.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string,
// }


  function getImg() {
    const image = data.allFile.edges.find(n => {
      return n.node.relativePath.includes(props.filename)
    })
    if (!image) {
      return null
    }

    return (
      <Img
        alt={props.alt}
        fluid={image.node.childImageSharp.fluid}
        className={props.className}
      />
    )
  }

  return (
    <>
      { getImg() }
    </>
  )

}

// import React, { useMemo } from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
//
// const Image = ({ src, ...props }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
//         edges {
//           node {
//             relativePath
//             childImageSharp {
//               fluid(maxWidth: 300) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//
//   const match = useMemo(() => (
//     data.allFile.edges.find(({ node }) => src === node.relativePath)
//   ), [ data, src ])
//
//   return (
//     <Img
//       fluid={match.node.childImageSharp.fluid}
//       {...props}
//     />
//   )
// }
// 
// export default Image




// const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "isro_logo.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//
//   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
// }
