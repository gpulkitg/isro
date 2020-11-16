import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Figure } from 'react-bootstrap'
import Layout from '../../components/layout'
import Separator from '../../components/separator'


export const query = graphql`
  query {
    aboutYaml {
      # cover {
      #   title
      #   image {
      #     name
      #     childImageSharp {
      #       fluid {
      #         ...GatsbyImageSharpFluid
      #       }
      #     }
      #   }
      # }
      organisationStructure {
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        caption
      }
    }
  }
`

export default function Genesis({ data }) {

  const {
    // cover,
    organisationStructure,
  } = data.aboutYaml


  return (
    <Layout>

      {/* <div className="w-100" style={{ height: `50vh`, position: `relative`}}>
        <Img
          fluid={cover.image.childImageSharp.fluid}
          alt={cover.image.name}
          className="w-100 h-100"
          imgStyle={{ opacity: `0.5`, objectPosition: `top right` }}
        />
      </div> */}
      <Separator />

      <Container>

        <h1 className="mb-2 text-center display-4">Organisation Structure</h1>


        <Figure className="h-100 w-100 mb-1 mx-auto">
          <Img
            fluid={organisationStructure.image.childImageSharp.fluid}
            alt={organisationStructure.image.name}
            className="mx-auto"
            style={{ maxWidth: `800px` }}
          />
          <Figure.Caption className="text-center">{organisationStructure.caption}</Figure.Caption>
        </Figure>

      </Container>


    </Layout>
  )

}
