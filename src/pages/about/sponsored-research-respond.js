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
      sponsoredResearch {
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        caption
        text
      }
    }
  }
`

export default function SponsoredResearch({ data }) {

  const {
    cover,
    sponsoredResearch,
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

        <h1 className="mb-2 text-center display-4">Sponsored Research</h1>

        <Figure className="h-100 w-100 mb-2 mx-auto">
          <Img
            fluid={sponsoredResearch.image.childImageSharp.fluid}
            alt={sponsoredResearch.image.name}
            className="mx-auto"
            style={{ maxWidth: `600px` }}
          />
          <Figure.Caption className="text-center">{sponsoredResearch.caption}</Figure.Caption>
        </Figure>

        <div dangerouslySetInnerHTML={{ __html: sponsoredResearch.text }} className="text-justify"/>


      </Container>


    </Layout>
  )

}
