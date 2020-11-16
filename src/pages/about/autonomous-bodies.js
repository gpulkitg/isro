import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/layout'
import Separator from '../../components/separator'
import CardBrighten from '../../components/card-brighten'


export const query = graphql`
  query {
    allAutonomousBodiesYaml {
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

export default function AutonomousBodies({ data }) {


  return (
    <Layout>

      <Separator />
      <Container>


        <h1 className="mb-2 text-center display-4">Autonomous Bodies</h1>

        <Row>
          { data.allAutonomousBodiesYaml.edges.map(({ node }, ind) => (
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
