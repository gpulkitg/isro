import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/layout'
import Separator from '../../components/separator'
import CardBrighten from '../../components/card-brighten'


export const query = graphql`
  query {
    # aboutYaml {
    #   cover {
    #     title
    #     image {
    #       name
    #       childImageSharp {
    #         fluid {
    #           ...GatsbyImageSharpFluid
    #         }
    #       }
    #     }
    #   }
    # }
    allIsroCentresYaml {
      edges {
        node {
          id
          title
          slug
          image {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default function IsroCentres({ data }) {


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

        <h1 className="mb-2 text-center display-4">ISRO Centres</h1>

        <Row>
          { data.allIsroCentresYaml.edges.map(({ node }, ind) => (
            <Col md={4} key={node.id} className="mb-2">
              <CardBrighten
                title={node.title}
                link={node.slug}
              >
                <Img
                  fluid={node.image.childImageSharp.fluid}
                  alt={node.image.name}
                  className="card-brighten-img"
                />
              </CardBrighten>
              </Col>
            ))}
        </Row>

      </Container>


    </Layout>
  )

}
