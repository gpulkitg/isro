import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Figure, Row, Col, ListGroup } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'


import Layout from "../components/layout"
import SEO from "../components/seo"
import Separator from '../components/separator'
import ListItems from '../components/list-items'
import TableVersatile from '../components/table-versatile'


export const query = graphql`
  query ($slug: String) {
    masterListYaml(launcherLink: {eq: $slug}) {
      launcherName
      launchDate(formatString: "D MMM YYYY")
      spacecraftName
      spacecraftLink
      imageGalleries {
        title
        link
      }
      videoGalleries {
        title
        tag
        link
      }
      docs {
        title
        doc {
          id
          publicURL
        }
      }
    }
    mdLauncherYaml(slug: {eq: $slug}) {
      # seo {
      #   title
      # }
      # date(formatString: "D MMM YYYY")
      sections {
        title
        caption
        text
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        table {
          title
          body {
            row {
              col {
                text
              }
            }
          }
        }
      }
      # relatedLinks {
      #   title
      #   content {
      #     text
      #     link
      #   }
      # }
    }
  }
`

export default function MdLauncher({ data }) {

  const {
    // seo,
    // date,
    sections,
    // relatedLinks,
  } = data.mdLauncherYaml

  const {
    launcherName,
    launchDate,
    spacecraftName,
    spacecraftLink,
    imageGalleries,
    videoGalleries,
    docs,
  } = data.masterListYaml


  return (
    <Layout>

      <SEO title={launcherName} />

      <Separator />

      <Container>

        { launchDate &&
          <h5 className="text-muted">{launchDate}</h5>
        }

        { launcherName &&
          <h2 className="mb-2 text-center">{launcherName}</h2>
        }

        {/* { cover &&
          <div className="w-100 mb-1">
            <Img
              fluid={cover.childImageSharp.fluid}
              alt={cover.name}
              className="mx-auto"
              style={{ maxWidth: `600px` }}
            />
          </div>
        } */}

        { sections.map((section, ind) => (
          <div key={`sections_${ind}`}>
            { section.image &&
              <Figure className="w-100 mb-2">
                <Img
                  fluid={section.image.childImageSharp.fluid}
                  alt={section.image.name}
                  style={{ maxHeight: `400px` }}
                  imgStyle={{ objectFit: `contain` }}
                />
                <Figure.Caption className="text-center">{section.caption}</Figure.Caption>
              </Figure>
              // <div className="w-100 mb-1">
              //   <Img
              //     fluid={section.image.childImageSharp.fluid}
              //     alt={section.image.name}
              //     style={{ maxHeight: `400px` }}
              //     imgStyle={{ objectFit: `contain` }}
              //   />
              // </div>
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
          </div>
        ))}

        {/* { relatedLinks &&
          <>
          <Separator title="Related" />
          <ListItems items={relatedLinks} />
          </>
        } */}

        <Row>
          <Col md>
            <div className="py-1">
              <ListGroup variant="flush">
                { imageGalleries.map( (el, i) => (
                  <ListGroup.Item action href={el.link} key={`${el.title}_${i}`}>
                    {el.title}
                    <ChevronRight style={{ float: `right`}}/>
                  </ListGroup.Item>
                ))}
                {/* { videoGalleries.map( (el, i) => (
                  <ListGroup.Item action href={el.link} key={`${el.title}_${i}`}>
                    {el.title}
                    <ChevronRight style={{ float: `right`}}/>
                  </ListGroup.Item>
                ))} */}
                { docs.map( (el, i) => (
                  <ListGroup.Item action href={el.doc.publicURL} key={`${el.title}_${i}`}>
                    {el.title}
                    <ChevronRight style={{ float: `right`}}/>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col md>
            <div className="py-1">
              <ListGroup variant="flush">
                { docs.map( (el, i) => (
                  <ListGroup.Item action href={el.doc.publicURL} key={`${el.title}_${i}`}>
                    {el.title}
                    <ChevronRight style={{ float: `right`}}/>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          {/* { items.map( (item, ind) => (
            <Col key={`listItems_${ind}`} sm>
              <div className="py-1">
                { item.title && <h3 className="mb-2">{item.title}</h3> }
                <ListGroup variant="flush">
                  { item.content.map( (el, i) => (
                    <ListGroup.Item action href={el.link} key={`${item.title}_${i}`}>
                      {el.text}
                      <ChevronRight style={{ float: `right`}}/>
                    </ListGroup.Item>
                  ))}
                  <ListGroup.Item></ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          ))} */}
        </Row>


      </Container>


    </Layout>
  )

}
