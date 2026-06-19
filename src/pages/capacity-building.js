import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col } from 'react-bootstrap'


import Layout from "../components/layout"
import SEO from "../components/seo"
import Separator from '../components/separator'
import CardBrighten from '../components/card-brighten'


export const query = graphql`
  query {
    capacityBuildingYaml {
      title
      sections {
        title
        text
        images {
          image {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          link
          text
        }
      }
    }
  }
`

export default function CapacityBuilding({ data }) {

  const {
    title,
    sections,
  } = data.capacityBuildingYaml

  // const cardStyles = {
  //   border: `none`,
  //   boxShadow: `0 0 1px 1px white`,
  // }


  return (
    <Layout>

      <SEO title={title} />

      <Separator />

      <Container>

        <h2 className="mb-2">{title}</h2>

        <div className="mb-2" style={{ borderBottom: `1px solid gray`}}></div>


        { sections.map((section, ind) => (
          <div key={`sections_${ind}`}>
            { section.title &&
              <h4 className="text-center mb-2">{section.title}</h4>
            }
            { section.images &&
              <Row>
                { section.images.map((item, ind) => (
                  <Col key={item.image.name} md={4} className="mb-2">
                    <CardBrighten
                      title={item.text}
                      link={item.link}
                    >
                      <Img
                        fluid={item.image.childImageSharp.fluid}
                        alt={item.image.name}
                        className="card-brighten-img"
                      />
                    </CardBrighten>
                    {/* <Card text="white" className="h-100">
                      <Img
                        fluid={item.image.childImageSharp.fluid}
                        style={{ width: `100%`, height: `300px`}}
                        imgStyle={{ objectFit: `cover` }}
                      />
                      <Card.Body className="text-center">
                        <Card.Title className="mb-1">{item.text}</Card.Title>
                        <LinkVersatile url={item.link} className="stretched-link" />}
                      </Card.Body>
                    </Card> */}
                </Col>
                ))}
              </Row>
            }
            { section.text &&
              <div className="mb-2">
                <div dangerouslySetInnerHTML={{ __html: section.text }} className="markdown-content" />
              </div>
            }
        </div>

        ))}

      </Container>



    </Layout>
  )

}
