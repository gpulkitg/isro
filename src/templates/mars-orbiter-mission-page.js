import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import { Container, Figure, Row, Col } from 'react-bootstrap'
import SEO from '../components/seo'
import Layout from "../components/layout"
import TableVersatile from '../components/table-versatile'
import Sensor from '../components/sensor'


export const query = graphql`
  query($slug: String!) {
    marsOrbiterMissionPagesYaml(slug: {eq: $slug}) {
      cover {
        title
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
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
          caption
        }
        gifs {
          gif {
            name
            publicURL
          }
          caption
        }
        table {
          title
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



export default function MarsOrbiterMissionPage({ data }) {

  const {
    cover,
    title,
    sections,
  } = data.marsOrbiterMissionPagesYaml


  return (
    <Layout>
      <SEO title={`${cover.title} ${title}`} />

      <div className="w-100" className="cover-img-wrapper">
        <Img
          fluid={cover.image.childImageSharp.fluid}
          alt={cover.image.name}
          className="w-100 h-100 animate-appear-fast"
          imgStyle={{ opacity: `0.5` }}
        />
        <h1 className="text-center display-4" style={{ position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }}>
          {cover.title}
        </h1>
      </div>

      <Container>
        <h2 className="my-2 text-center">{title}</h2>

        { sections.map((section, ind) => (
          <Sensor key={`sections_${ind}`}>
          {/* <div key={`sections_${ind}`}> */}
            { section.title &&
              <h3 className="text-center mb-2">{section.title}</h3>
            }
            { section.images &&
              <Row className="d-flex align-items-end mb-2">
                { section.images.map((item, ind) => (
                  <Col key={item.image.name} md>
                    <Figure className="w-100">
                      <Img
                        fluid={item.image.childImageSharp.fluid}
                        alt={item.image.name}
                        style={{ maxHeight: `400px` }}
                        imgStyle={{ objectFit: `contain` }}
                      />
                      <Figure.Caption className="text-center">{item.caption}</Figure.Caption>
                    </Figure>
                  </Col>
                ))}
              </Row>
            }
            { section.gifs &&
              <Row className="d-flex align-items-end mb-2">
                { section.gifs.map((item, ind) => (
                  <Col key={item.gif.name} md>
                    <Figure className="w-100">
                      <Figure.Image src={item.gif.publicURL} alt={item.gif.name} />
                      <Figure.Caption className="text-center">{item.caption}</Figure.Caption>
                    </Figure>
                  </Col>
                ))}
              </Row>
            }
            { section.text &&
              <div className="mb-2">
                <div dangerouslySetInnerHTML={{ __html: section.text }} className="markdown-content" />
              </div>
            }
            { section.table &&
              <div className="mb-2">
                {section.table.title && <h4 className="text-center mb-1">{section.table.title}</h4>}
                <TableVersatile data={section.table} />
              </div>
            }
          {/* </div> */}
          </Sensor>
        ))}
      </Container>




    </Layout>
  )

}
