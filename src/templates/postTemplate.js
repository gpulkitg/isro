import React from "react"
import { FigureCaption, Container } from 'react-bootstrap'
import { graphql } from "gatsby"
import Img from 'gatsby-image'


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

export default function AboutTemplate({ data }) {
    // const { pageTitle, pageContent } = pageContext
    const { frontmatter, html } = data.markdownRemark

    return (
      <Container>

        {/* <h1>{pageTitle}</h1>

        { pageContent.map((el, ind) => {
          if (el.hasOwnProperty("image")) {
            return <Img fluid={el.image.childImageSharp.fluid} />
          } else if (el.hasOwnProperty("text")) {
            return <p key={ind}>{el.text}</p>
          }
        })} */}


        <h1>{frontmatter.title}</h1>

        {/* <Img fluid={frontmatter.image1.childImageSharp.fixed} /> */}

        <div dangerouslySetInnerHTML={{ __html: html }} />

      </Container>
    )

}
