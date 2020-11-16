import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import Separator from '../components/separator'


export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        cover {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date
      }
      html
    }
  }
`

export default function Genesis({ data }) {

  const {
    title,
    cover,
    date,
  } = data.markdownRemark.frontmatter


  return (
    <Layout>

      <Separator />

      <Container>

        { date &&
          <h5 className="text-muted mb-1">{date}</h5>
        }
        <h1 className="mb-2 text-center display-4">{title}</h1>

        { cover &&
          <div className="w-100 mb-1">
            <Img
              fluid={cover.childImageSharp.fluid}
              alt={cover.name}
              className="mx-auto"
              style={{ maxWidth: `600px` }}
            />
          </div>
        }

        <div dangerouslySetInnerHTML={{ __html:  data.markdownRemark.html }} className="markdown-content" />



      </Container>


    </Layout>
  )

}
