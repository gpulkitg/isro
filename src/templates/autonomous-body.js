import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { Geo, Envelope, Globe } from 'react-bootstrap-icons'

// import Layout from "../components/layout"
import LayoutAbout from '../components/layout-about'
import SEO from "../components/seo"
import Separator from '../components/separator'
import Sensor from '../components/sensor'


export const query = graphql`
  query ($slug: String) {
    autonomousBodiesYaml(slug: { eq: $slug }) {
      title
      slug
      # image {
      #   name
      #   childImageSharp {
      #     fluid {
      #       ...GatsbyImageSharpFluid_withWebp
      #     }
      #   }
      # }
      description
      locations {
        name
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
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
    <LayoutAbout>

      {/* <SEO title={data.autonomousBodiesYaml.title} /> */}

      {/* <Separator /> */}

      <Container>

        <Sensor>
          <h2 className="mb-2 text-center">{data.autonomousBodiesYaml.title}</h2>
          { data.autonomousBodiesYaml.description &&
            <div dangerouslySetInnerHTML={{ __html: data.autonomousBodiesYaml.description }} className="mb-2"/>
          }
        </Sensor>


        { data.autonomousBodiesYaml.locations.map((location, ind) => (
          <div className="mb-2" key={`locations_${ind}`}>

            { location.name && <h3 className="text-center mb-1">{location.name}</h3> }

            <Sensor>
              <Row className="mb-1 justify-content-center align-items-center">
                <Col lg={6}>
                  <Img
                    fluid={location.image.childImageSharp.fluid}
                    alt={location.image.name}
                    // className="h-100 w-100"
                    // style={{ maxHeight: `400px` }}
                    imgStyle={{ objectFit: `contain` }}
                  />
                </Col>
                { (location.headPosition && location.head) &&
                  <Col lg>
                    <div className="text-center py-1">
                      <h5 className="text-muted">{location.headPosition}</h5>
                      <h3>{location.head}</h3>
                    </div>
                  </Col>
                }
              </Row>
            </Sensor>

              <Row className="align-items-stretch justify-content-center  mb-1">
                { location.email &&
                  <Col md={4} className="p-1">
                      <div className="text-center h-100" style={{ border: `1px solid gray` }}>
                        <Sensor>
                          <div className="p-1">
                            <Envelope width="32" height="32" />
                          </div>
                          <div className="p-1">
                            <u><a href={`mailto:${location.email}`}>{location.email}</a></u>
                          </div>
                      </Sensor>
                      </div>
                  </Col>
                }
                { location.address &&
                  <Col md={4} className="p-1">
                      <div className="text-center h-100" style={{ border: `1px solid gray` }}>
                        <Sensor>
                          <div className="p-1">
                            <Geo width="32" height="32" />
                          </div>
                          <div className="p-1">
                            <p>{location.address}</p>
                          </div>
                      </Sensor>
                      </div>
                  </Col>
                }
                { location.link &&
                  <Col md={4} className="p-1">
                      <div className="text-center h-100" style={{ border: `1px solid gray` }}>
                        <Sensor>
                          <div className="p-1">
                            <Globe width="32" height="32" />
                          </div>
                          <div className="p-1">
                            <a href={location.link} rel="noreferrer external" target="_blank">{location.link}</a>
                          </div>
                      </Sensor>
                      </div>
                  </Col>
                }
              </Row>

            { location.description &&
              <Sensor>
                <div dangerouslySetInnerHTML={{ __html: location.description }} />
              </Sensor>
            }

          </div>

        ))}

      </Container>



    </LayoutAbout>
  )

}
