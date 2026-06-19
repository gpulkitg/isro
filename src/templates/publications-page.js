import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import VisibilitySensor from 'react-visibility-sensor'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Separator from '../components/separator'
import CardBrighten from '../components/card-brighten'
import Sensor from '../components/sensor'



export const query = graphql`
  query ($slug: String!) {
    publicationsPagesYaml(slug: {eq: $slug}) {
      # slug
      title
      # cover {
      #   image {
      #     name
      #     childImageSharp {
      #       fluid {
      #         ...GatsbyImageSharpFluid_withWebp
      #       }
      #     }
      #   }
      # }
      contents {
        text
        doc {
          publicURL
        }
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      listItems {
        title
        content {
          text
          doc {
            publicURL
          }
        }
      }

    }
  }
`


const ItemWithSensor = ({ item }) => {
  const [animated, setAnimated] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !animated) {
      setAnimated(true)
    }
    setVisible(isVisible)
  }

  return (
    <VisibilitySensor active={!animated} onChange={handleVisibilityChange} partialVisibility>
      <ListGroup.Item action href={item.doc.publicURL} target="_blank" className={visible ? "animate-slideup": "opacity-zero"}>
        {item.text}
        <ChevronRight style={{ float: `right`}}/>
      </ListGroup.Item>
    </VisibilitySensor>
  )
}



export default function PublicationsPage({ data }) {

  const {
    // slug,
    title,
    // cover,
    contents,
    listItems,
  } = data.publicationsPagesYaml



  return (
    <Layout>
      <SEO title={title} />

      <Container>

        <Separator />
        <Sensor>
          <h2 className="text-center mb-2">{title}</h2>

          <Row>
            { contents.map((item, ind) => (
              <Col key={`contents_${ind}`} lg={4} md={6} className="mb-2">
                <CardBrighten
                  title={item.text}
                  // link={item.doc.publicURL}
                  doc={item.doc}
                >
                  <Img
                    fluid={item.image.childImageSharp.fluid}
                    alt={item.image.name}
                    className="card-brighten-img"
                  />
                </CardBrighten>
              </Col>
            ))}
          </Row>
        </Sensor>


        { listItems &&
          <>
          <Separator title={listItems.title} />
          <Row>
            <Col md>
              <div className="py-1">
                <ListGroup variant="flush">
                  { listItems.content.map( (item, i) =>
                    i % 2 === 0 &&
                      <ItemWithSensor key={`listItems_${i}`} item={item} />
                  )}
                </ListGroup>
              </div>
            </Col>
            <Col md>
              <div className="py-1">
                <ListGroup variant="flush">
                  { listItems.content.map( (item, i) =>
                    i % 2 === 1 &&
                      <ItemWithSensor key={`listItems_${i}`} item={item} />
                  )}
                </ListGroup>
              </div>
            </Col>
          </Row>
          </>
        }


      </Container>



    </Layout>

  )
}
