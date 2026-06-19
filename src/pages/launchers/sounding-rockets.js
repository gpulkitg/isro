import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Figure, Row, Col } from 'react-bootstrap'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
// import TextContent from '../../components/text-content'
import TableVersatile from '../../components/table-versatile'
// import SplitSection from '../../components/split-section'
import Separator from '../../components/separator'
import Sensor from '../../components/sensor'


export const query = graphql`
  query {
    soundingRocketsYaml {
      seo {
        title
      }
      splitSection {
        title
        description
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      sections {
        title
        text
        caption
        image {
          name
          childImageSharp {
            # fixed {
            #   ...GatsbyImageSharpFixed
            # }
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        table {
          head {
            col {
              text
            }
          }
          body {
            row {
              col {
                text
              }
            }
          }
        }
      }
    }
  }
`


export default function SoundingRockets({ data }) {

  const  {
    seo,
    splitSection,
    sections,
    // table,
  } = data.soundingRocketsYaml

  return (

    <Layout>
      <SEO title={seo.title} />

      <Container>

        <Separator />

        <h2 className="mb-2 text-center">{seo.title}</h2>

        { sections.map((section, ind) => (
          <Sensor key={`sections_${ind}`}>
            { section.title &&
              <h3 className="mb-2 text-center">{section.title}</h3>
            }
            <Row className="d-flex align-items-center">
              { section.text &&
                <Col md>
                  <div className="mb-2">
                    <div dangerouslySetInnerHTML={{ __html: section.text }} className="markdown-content" />
                  </div>
                </Col>
              }
              { section.image &&
                <Col md>
                  <Figure className="w-100 mb-2">
                    <Img
                      fluid={section.image.childImageSharp.fluid}
                      alt={section.image.name}
                      style={{ maxHeight: `400px` }}
                      imgStyle={{ objectFit: `contain` }}
                    />
                    <Figure.Caption className="text-center">{section.caption}</Figure.Caption>
                  </Figure>
                </Col>
              }
            </Row>

            { section.table &&
              <Container>
                <div className="mb-2">
                  {section.table.title && <h4 className="text-center mb-1">{section.table.title}</h4>}
                  <TableVersatile data={section.table} />
                </div>
              </Container>
            }
          </Sensor>
        ))}


        {/* <Row>
          <Col className="vh-100 d-flex order-md-0 py-2" md>
            <Img
              fluid={splitSection.image.childImageSharp.fluid}
              alt={splitSection.image.name}
              className="h-100 w-100"
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center text-center order-md-1" md>
            <h2 className="mb-2">{splitSection.title}</h2>
            <p className="mb-2">{splitSection.description}</p>
          </Col>
        </Row> */}

        {/* <SplitSection imgSrc={vyom} imgObjectFit="contain" textPosition="right" textAlignment="center">
          <h1 className="mb-4">Sounding Rockets</h1>
          <p>
            Sounding rockets are one or two stage solid propellant rockets used for probing the upper atmospheric regions and for space research. They also serve as easily affordable platforms to test or prove prototypes of new components or subsystems intended for use in launch vehicles and satellites.
          </p>
        </SplitSection>

        { sections.map((section, ind) => (
          <div key={`sections_${ind}`} className="text-center">
            { section.title &&
              <Separator title={section.title}/>
            }
            <div dangerouslySetInnerHTML={{ __html: section.text }} className="text-justify mb-2"/>
            { section.image &&
              <Figure>
                <Img
                  fluid={section.image.childImageSharp.fluid}
                  // fixed={section.image.childImageSharp.fixed}
                  alt={section.image.name}
                />
                <Figure.Caption>{section.caption}</Figure.Caption>
              </Figure>
            }
            { section.table &&
              <TableVersatile data={section.table} />
            }
          </div>
        ))} */}



      </Container>

    </Layout>





  )


}
