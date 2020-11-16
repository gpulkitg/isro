import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/layout'
import Separator from '../../components/separator'
import CardBrighten from '../../components/card-brighten'


export const query = graphql`
  query {
    allChairmenYaml(filter: {slug: {ne: "/about/chairman-isro-secretary-dos"}}) {
      edges {
        node {
          id
          name
          tenure
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

export default function FormerChairmen({ data }) {


  return (
    <Layout>

      <Separator />

      <Container>

        <h1 className="mb-2 text-center display-4">Former Chairmen</h1>

        <Row>
          { data.allChairmenYaml.edges.map(({ node }, ind) => (
            <Col md={4} key={node.id} className="mb-2">
              <CardBrighten
                title={node.name}
                subtitle={node.tenure}
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
