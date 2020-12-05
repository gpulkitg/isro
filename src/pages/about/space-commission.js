import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, Card } from 'react-bootstrap'
import Layout from '../../components/layout'
import Separator from '../../components/separator'
import CardBrighten from '../../components/card-brighten'


export const query = graphql`
  query {
    allSpaceCommissionYaml {
      edges {
        node {
          id
          name
          designation
          position
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

export default function SpaceCommission({ data }) {

  const cardStyles = {
    border: `none`,
    boxShadow: `0 0 1px 1px white`,
  }

  return (
    <Layout>

      <Separator />

      <Container>

        <h1 className="mb-2 text-center display-4">Space Commmission</h1>

        <Row>
          { data.allSpaceCommissionYaml.edges.map(({ node }, ind) => (
            <Col md={4} key={node.id} className="mb-2">
              {/* <CardBrighten
                title={node.name}
                subtitle={node.designation}
                // link={node.slug}
                text={node.position}
              >
                <Img
                  fluid={node.image.childImageSharp.fluid}
                  alt={node.image.name}
                  className="card-brighten-img"
                />
              </CardBrighten> */}
                <Card text="white" className="h-100" style={cardStyles}>
                  <Img
                    fluid={node.image.childImageSharp.fluid}
                    style={{ width: `100%`, height: `300px`}}
                    imgStyle={{ objectFit: `cover` }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="mb-1">{node.name}</Card.Title>
                    <Card.Subtitle className="text-muted mb-1">{node.designation}</Card.Subtitle>
                    <Card.Text>{node.position}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}

        </Row>

      </Container>


    </Layout>
  )

}
