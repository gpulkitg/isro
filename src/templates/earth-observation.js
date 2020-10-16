import React from "react"
import { Container } from 'react-bootstrap'
import { graphql } from "gatsby"
// import Img from 'gatsby-image'


export const query =  graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: {eq: $slug}}) {
      frontmatter {
        title,
      },
      html
    }
  }
`

export default function EarthObservationTemplate({ data }) {
    const { frontmatter, html } = data.markdownRemark

    return (
      <Container>

        <h1>{frontmatter.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />

      </Container>
    )

}
