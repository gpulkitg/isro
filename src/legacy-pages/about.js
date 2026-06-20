import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import { Container, Figure } from 'react-bootstrap'

import SEO from '../components/seo'
import LayoutAbout from "../components/layout-about"
import ListItems from '../components/list-items'
import Separator from '../components/separator'


export const query = graphql`
  query {
    aboutYaml {
      seo {
        title
      }
      sections {
        text
        caption
        image {
          name
          childImageSharp {
            # fixed {
            #   ...GatsbyImageSharpFixed
            # }
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

  }
`


export default function About({ data }) {

  const {
    seo,
    sections,
  } = data.aboutYaml


  return (
    <LayoutAbout>
      <SEO title={seo.title} />

      <Container>

        {/* <Separator /> */}
        { sections.map((section, ind) =>
          <>
          <div
            key={`sections_${ind}`}
            dangerouslySetInnerHTML={{ __html: section.text }}
            className="text-justify mb-1"
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-easing="easeOutCirc"
          />
          <Figure className="h-100 w-100 mb-1 mx-auto">
            <Img
              fluid={section.image.childImageSharp.fluid}
              alt={section.image.name}
              className="mx-auto"
              style={{ maxWidth: `600px` }}
            />
            <Figure.Caption className="text-center">{section.caption}</Figure.Caption>
          </Figure>
          </>
        )}



      </Container>



    </LayoutAbout>
  )
}
