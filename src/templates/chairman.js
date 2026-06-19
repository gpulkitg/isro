import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, Tabs, Tab, Nav } from 'react-bootstrap'
// import Layout from "../components/layout"
import LayoutAbout from '../components/layout-about'
import SEO from "../components/seo"
import Separator from '../components/separator'
import LinkVersatile from '../components/link-versatile'
// import ListItems from '../components/list-items'
import Sensor from '../components/sensor'


export const query = graphql`
  query ($slug: String) {
    chairmenYaml(slug: { eq: $slug }) {
      name
      tenure
      # position
      # slug
      image {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      about
      biodata
      positions
      accomplishments
      awards
      contributions
      fellowships
      links {
        name
        link
      }
    }
    # aboutYaml {
    #   listLinks {
    #     title
    #     content {
    #       link
    #       text
    #     }
    #   }
    # }
  }
`


export default function Chairman({ data }) {

  const {
    name,
    tenure,
    // position,
    // slug,
    image,
    about,
    biodata,
    positions,
    accomplishments,
    awards,
    contributions,
    fellowships,
    links,
  } = data.chairmenYaml



  return (
    <LayoutAbout>

      {/* <SEO title={name} /> */}

      {/* <Separator /> */}

      <Container>


        {/* <Row className="mb-2">

          <Col md={4}>
            <Img
              fluid={image.childImageSharp.fluid}
              alt={image.name}
            />
          </Col>

          <Col className="p-2 my-auto" md={8}>
            <h1 className="mb-2">{name}</h1>
            <h3>{tenure}</h3>
          </Col>

        </Row> */}

        <Tab.Container defaultActiveKey="about">
          <Row>
            <Col lg={3} md={4}>
              <Sensor>
                <div className="mb-2">
                  <Img
                    fluid={image.childImageSharp.fluid}
                    alt={image.name}
                  />
                </div>

                <div className="mb-2">
                  <h3 className="mb-1">{name}</h3>
                  <h5>{tenure}</h5>
                </div>
              </Sensor>

              {/* <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="about">About</Nav.Link>
                </Nav.Item>
              </Nav> */}
            </Col>

            <Col lg={9} md={8}>
              <Nav variant="pills" className="border-bottom">
                { about &&
                  <Nav.Item>
                    <Nav.Link eventKey="about">About</Nav.Link>
                  </Nav.Item>
                }
                { biodata &&
                  <Nav.Item>
                    <Nav.Link eventKey="biodata">Biodata</Nav.Link>
                  </Nav.Item>
                }
                { positions &&
                  <Nav.Item>
                    <Nav.Link eventKey="positions">Positions Held</Nav.Link>
                  </Nav.Item>
                }
                { accomplishments &&
                  <Nav.Item>
                    <Nav.Link eventKey="accomplishments">Accomplishments</Nav.Link>
                  </Nav.Item>
                }
                { awards &&
                  <Nav.Item>
                    <Nav.Link eventKey="awards">Awards & Honours</Nav.Link>
                  </Nav.Item>
                }
                { contributions &&
                  <Nav.Item>
                    <Nav.Link eventKey="contributions">Contributions</Nav.Link>
                  </Nav.Item>
                }
                { fellowships &&
                  <Nav.Item>
                    <Nav.Link eventKey="fellowships">Fellowships & Memberships</Nav.Link>
                  </Nav.Item>
                }
                { links &&
                  <Nav.Item>
                    <Nav.Link eventKey="links">Links</Nav.Link>
                  </Nav.Item>
                }
              </Nav>

              <Tab.Content>
                { about &&
                  <Tab.Pane eventKey="about">
                    <div dangerouslySetInnerHTML={{ __html: about }} className="py-2"/>
                  </Tab.Pane>
                }
                { biodata &&
                  <Tab.Pane eventKey="biodata">
                    <div dangerouslySetInnerHTML={{ __html: biodata }} className="py-2"/>
                  </Tab.Pane>
                }
                { positions &&
                  <Tab.Pane eventKey="positions">
                    <div dangerouslySetInnerHTML={{ __html: positions }} className="py-2"/>
                  </Tab.Pane>
                }
                { accomplishments &&
                  <Tab.Pane eventKey="accomplishments">
                    <div dangerouslySetInnerHTML={{ __html: accomplishments }} className="py-2"/>
                  </Tab.Pane>
                }
                { awards &&
                  <Tab.Pane eventKey="awards">
                    <div dangerouslySetInnerHTML={{ __html: awards }} className="py-2"/>
                  </Tab.Pane>
                }
                { contributions &&
                  <Tab.Pane eventKey="contributions">
                    <div dangerouslySetInnerHTML={{ __html: contributions }} className="py-2"/>
                  </Tab.Pane>
                }
                { fellowships &&
                  <Tab.Pane eventKey="fellowships">
                    <div dangerouslySetInnerHTML={{ __html: fellowships }} className="py-2"/>
                  </Tab.Pane>
                }
                { links &&
                  <Tab.Pane eventKey="links">
                    <div className="py-2">
                      <ul>
                        { links.map((item, ind) => (
                          <li key={`links_${ind}`}>
                            <LinkVersatile url={item.link}>{item.name}</LinkVersatile>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Tab.Pane>
                }

              </Tab.Content>
            </Col>

          </Row>
        </Tab.Container>


        {/* <Tabs
          defaultActiveKey="about"
          className="text-center"
        >

          { about &&
            <Tab eventKey="about" title="About">
              <div dangerouslySetInnerHTML={{ __html: about }} className="py-2"/>
            </Tab>
          }

          { biodata &&
            <Tab eventKey="biodata" title="Biodata">
              <div dangerouslySetInnerHTML={{ __html: biodata }} className="py-2"/>
            </Tab>
          }

          { positions &&
            <Tab eventKey="positions" title="Positions held">
              <div dangerouslySetInnerHTML={{ __html: positions }} className="py-2"/>
            </Tab>
          }

          { accomplishments &&
            <Tab eventKey="accomplishments" title="Accomplishments">
              <div dangerouslySetInnerHTML={{ __html: accomplishments }} className="py-2"/>
            </Tab>
          }

          { awards &&
            <Tab eventKey="awards" title="Awards & Honours">
              <div dangerouslySetInnerHTML={{ __html: awards }} className="py-2"/>
            </Tab>
          }

          { contributions &&
            <Tab eventKey="contributions" title="Contributions">
              <div dangerouslySetInnerHTML={{ __html: contributions }} className="py-2"/>
            </Tab>
          }

          { fellowships &&
            <Tab eventKey="fellowships" title="Fellowships & Memberships">
              <div dangerouslySetInnerHTML={{ __html: fellowships }} className="py-2"/>
            </Tab>
          }

          { links &&
            <Tab eventKey="links" title="Links">
              <div className="py-2">
                <ul>
                  { links.map((item, ind) => (
                    <li key={`links_${ind}`}>
                      <LinkVersatile url={item.link}>{item.name}</LinkVersatile>
                    </li>
                  ))}
                </ul>
              </div>
            </Tab>
          }

        </Tabs> */}

      </Container>



    </LayoutAbout>
  )

}
