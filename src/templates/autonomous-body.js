import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, Button } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Separator from '../components/separator'

export const query = graphql`
  query ($slug: String) {
    autonomousBodiesYaml(slug: { eq: $slug }) {
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
      description
      locations {
        name
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headPosition
        head
        address
        email
        link
        description
      }
    }
  }
`

export default function AutonomousBody({ data }) {

  return (
    <Layout>

      <SEO title={data.autonomousBodiesYaml.title} />

      <Separator />

      <Container>

        <h1 className="mb-2 text-center display-4">{data.autonomousBodiesYaml.title}</h1>
        { data.autonomousBodiesYaml.description &&
          <div dangerouslySetInnerHTML={{ __html: data.autonomousBodiesYaml.description }} className="mb-2"/>
        }


        { data.autonomousBodiesYaml.locations.map((location, ind) => (
          <div className="mb-2" key={`locations_${ind}`}>

            { location.name && <h3>{location.name}</h3> }

            <Row className="mb-2">
              <Col className="vh-50 d-flex justify-content-center py-2" md>
                <Img
                  fluid={location.image.childImageSharp.fluid}
                  alt={location.image.name}
                  className="h-100 w-100"
                  // style={{ width: `400px`, height: `400px` }}
                  imgStyle={{ objectFit: `contain` }}
                />
              </Col>
              <Col className="d-flex flex-column justify-content-center" md>
                { (location.headPosition && location.head) &&
                  <div className="mb-1">
                    <h6 className="text-muted d-inline mr-1">{location.headPosition}:</h6>
                    <h4 className="d-inline">{location.head}</h4>
                  </div>
                }
                { location.email &&
                  <div className="mb-1">
                    <h6 className="text-muted d-inline mr-1">Email:</h6>
                    <div className="d-inline">
                      <u><a href={`mailto:${location.email}`}>{location.email}</a></u>
                    </div>
                  </div>
                }
                { location.email &&
                  <div className="mb-1">
                    <h6 className="text-muted d-inline mr-1">Address:</h6>
                    <p className="d-inline">{location.address}</p>
                  </div>
                }
                { location.link &&
                  <div>
                    <Button href={location.link} variant="outline-light" className="btn-jumbotron">Visit Us</Button>
                  </div>
                }
              </Col>
            </Row>

            { location.description &&
              <div dangerouslySetInnerHTML={{ __html: location.description }} />
            }

          </div>
        ))}

      </Container>



    </Layout>
  )

}
