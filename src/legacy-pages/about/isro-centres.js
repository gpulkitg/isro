import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col } from 'react-bootstrap'

// import Layout from '../../components/layout'
import LayoutAbout from '../../components/layout-about'
import Separator from '../../components/separator'
import CardBrighten from '../../components/card-brighten'
// import Sensor from '../../components/sensor'


export const query = graphql`
  query {
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
                ...GatsbyImageSharpFluid_withWebp
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
    <LayoutAbout>


      <Container>


        <h2 className="mb-2 text-center">ISRO Centres</h2>

        <Row>
          { data.allIsroCentresYaml.edges.map(({ node }, ind) =>
            <Col key={node.id} className="mb-2" lg={4} md={6}>
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
          )}
        </Row>

      </Container>


    </LayoutAbout>
  )

}
