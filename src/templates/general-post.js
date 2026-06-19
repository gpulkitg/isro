import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Figure, Row, Col, ListGroup } from 'react-bootstrap'


import Layout from "../components/layout"
import SEO from "../components/seo"
import Separator from '../components/separator'
import TableVersatile from '../components/table-versatile'
import Sensor from '../components/sensor'


export const query = graphql`
  query ($slug: String!) {
    generalPostsYaml(slug: {eq: $slug}) {
      title
      # date
      sections {
        title
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
        docs {
          doc {
            name
            ext
            publicURL
          }
          text
        }
        text
      }
    }
  }
`

export default function GeneralPost({ data }) {

  const {
    title,
    sections,
  } = data.generalPostsYaml

  // sections.forEach(section => {
  //   if (section.docs) {
  //     console.log(section.docs);
  //   }
  // })


  return (
    <Layout>

      <SEO title={title} />

      <Separator />

      <Container>

        {/* { cover &&
          <div className="w-100 mb-2">
            <Img
              fluid={cover.childImageSharp.fluid}
              alt={cover.name}
              className="mx-auto"
              style={{ maxWidth: `600px` }}
            />
          </div>
        } */}

        {/* { date &&
          <h5 className="text-muted mb-2">{date}</h5>
        } */}

        <Sensor>
          { title &&
            <h2 className="mb-2">{title}</h2>
          }
        </Sensor>

        <div className="mb-2" style={{ borderBottom: `1px solid gray`}}></div>


        { sections.map((section, ind) => (
          <Sensor key={`sections_${ind}`}>
            { section.title &&
              <h4 className="text-center mb-2">{section.title}</h4>
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
            { section.text &&
              <div className="mb-2">
                <div dangerouslySetInnerHTML={{ __html: section.text }} className="general-post-markdown" />
              </div>
            }
            { section.docs &&
              <div className="mb-2">
                <ul>
                  { section.docs.map((item, i) =>
                    <li key={`docs_${ind}_${i}`} className="mb-1">
                      <a href={item.doc.publicURL} className="no-underline" target="_blank" rel="noreferrer">
                        { item.text ? item.text : item.doc.name+item.doc.ext }
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              // <Row className="mb-2">
              //   { section.docs.map((item, i) => (
              //     <Col key={`${item.doc.name}_${i}`} md>
              //       <a href={item.doc.publicURL} className="no-underline" target="_blank" rel="noreferrer">
              //         { item.text ? item.text : item.doc.name+item.doc.ext }
              //       </a>
              //     </Col>
              //   ))}
              // </Row>
            }
            {/* { section.table &&
              <Container>
                <div className="mb-2">
                  {section.table.title && <h4 className="text-center mb-1">{section.table.title}</h4>}
                  <TableVersatile data={section.table} />
                </div>
              </Container>
            } */}
          </Sensor>

        ))}




      </Container>

      {/* <RelatedSection
        otherLinks={otherLinksNew}
        docs={docs}
        galleriesImage={data.allGalleriesImageYaml}
        galleriesVideo={data.allGalleriesVideoYaml}
        updates={data.allUpdatesYaml}
      /> */}


    </Layout>
  )

}
