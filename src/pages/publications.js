import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Separator from '../components/separator'
import CardBrighten from '../components/card-brighten'


export const query = graphql`
  query {
    allPublicationsPagesYaml {
      edges {
        node {
          id
          slug
          title
          cover {
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
  }
`



export default function PublicationsPage({ data }) {



  return (
    <Layout>
      <SEO title="Publications" />


      <Separator />
      <h2 className="text-center mb-2">Publications</h2>

      <Container>
        <Row>
          { data.allPublicationsPagesYaml.edges.map(({ node }) => (
            <Col key={node.id} lg={4} md={6} className="mb-2">
              <CardBrighten
                title={node.title}
                link={node.slug}
              >
                <Img
                  fluid={node.cover.image.childImageSharp.fluid}
                  alt={node.cover.image.name}
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
