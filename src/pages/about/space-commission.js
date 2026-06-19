import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, Card } from 'react-bootstrap'

// import Layout from '../../components/layout'
import LayoutAbout from '../../components/layout-about'
import Separator from '../../components/separator'
import CardBrighten from '../../components/card-brighten'
// import Sensor from '../../components/sensor'


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
                ...GatsbyImageSharpFluid_withWebp
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
    <LayoutAbout>


      <Container>

        {/* <Separator /> */}
        <h2 className="mb-2 text-center">Space Commmission</h2>

        <Row>
          { data.allSpaceCommissionYaml.edges.map(({ node }, ind) => (
            <Col key={node.id} className="mb-2" lg={4} md={6}>
              {/* <Sensor> */}
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
              {/* </Sensor> */}
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

              </Col>
            ))}

        </Row>

      </Container>


    </LayoutAbout>
  )

}
