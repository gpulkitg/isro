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
      genesis {
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        text
      }
    }
  }
`

export default function Genesis({ data }) {

  const {
    // cover,
    genesis,
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

        <h1 className="mb-2 text-center display-4">Genesis</h1>

        <Figure className="h-100 w-100 mb-2 mx-auto">
          <Img
            fluid={genesis.image.childImageSharp.fluid}
            alt={genesis.image.name}
            className="mx-auto"
            style={{ maxWidth: `600px` }}
          />
          <Figure.Caption className="text-center">{genesis.caption}</Figure.Caption>
        </Figure>

        <div dangerouslySetInnerHTML={{ __html: genesis.text }} className="text-justify"/>


      </Container>


    </Layout>
  )

}
