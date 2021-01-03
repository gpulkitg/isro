import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Figure, Row, Col, ListGroup } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Separator from '../components/separator'
import TableVersatile from '../components/table-versatile'
// import ListItems from '../components/list-items'


export const query = graphql`
  query ($slug: String, $tag: String) {
    masterListYaml(spacecraftLink: {eq: $slug}) {
      launcherName
      launcherLink
      launchDate(formatString: "D MMM YYYY")
      spacecraftName
      docs {
        title
        doc {
          id
          publicURL
        }
      }
      featuredPosts {
        title
        link
      }
    }
    mdSpacecraftYaml(slug: {eq: $slug}) {
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
    }
    allGalleriesImageYaml(filter: {tag: {eq: $tag}}) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
    allGalleriesVideoYaml(filter: {tag: {eq: $tag}}) {
      edges {
        node {
          id
          title
          video {
            id
            publicURL
          }
        }
      }
    }
    allUpdatesYaml(filter: {tag: {eq: $tag}}, limit: 5) {
      edges {
        node {
          id
          title
          date(formatString: "D MMM YYYY")
          slug
        }
      }
    }
  }
`

export default function MdSpacecraft({ data }) {
  const {
    launcherName,
    launcherLink,
    launchDate,
    spacecraftName,
    docs,
    featuredPosts,
  } = data.masterListYaml



  return (
    <Layout>

      <SEO title={spacecraftName} />

      <Separator />

      <Container>

        { launchDate &&
          <h5 className="text-muted">{launchDate}</h5>
        }
        { spacecraftName &&
          <h2 className="mb-2 text-center">{spacecraftName}</h2>
        }

        { data.mdSpacecraftYaml.sections.map((section, ind) => (
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

        <Row>
          <Col md>
            <div className="py-1">
              <h3 className="mb-2">Related Links</h3>
              <ListGroup variant="flush">
                <ListGroup.Item action href={launcherLink}>
                  {launcherName}
                  <ChevronRight style={{ float: `right`}}/>
                </ListGroup.Item>
                { docs && docs.map( (el, i) => (
                  <ListGroup.Item action href={el.doc.publicURL} key={`${el.title}_${i}`} target="_blank">
                    {el.title}
                    <ChevronRight style={{ float: `right`}}/>
                  </ListGroup.Item>
                ))}
                { data.allGalleriesImageYaml && data.allGalleriesImageYaml.edges.map( ({node}, i) => (
                  <ListGroup.Item action href={node.slug} key={node.id}>
                    {node.title}
                    <ChevronRight style={{ float: `right`}}/>
                  </ListGroup.Item>
                ))}
                { data.allGalleriesVideoYaml && data.allGalleriesVideoYaml.edges.map( ({node}, i) => (
                  <ListGroup.Item action href={node.video.publicURL} key={node.id}>
                    {node.title}
                    <ChevronRight style={{ float: `right`}}/>
                  </ListGroup.Item>
                ))}
                { featuredPosts && featuredPosts.map( (el, i) => (
                  <ListGroup.Item action href={el.link} key={`${el.title}_${i}`}>
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
              <h3 className="mb-2">Related News</h3>
              <ListGroup variant="flush">
                { data.allUpdatesYaml && data.allUpdatesYaml.edges.map( ({node}) => (
                  <ListGroup.Item action href={node.slug} key={node.id}>
                    <p className="text-info">{node.date}</p>{node.title}
                    <ChevronRight style={{ float: `right`}}/>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>

        {/* { sections.map((section, ind) => (
          <div className="mb-2" key={`sections_${ind}`}>
            <Row>
              { section.image &&
                <Col>
                  <Img
                    fluid={section.image.childImageSharp.fluid}
                    alt={section.image.name}
                    style={{ maxHeight: `600px`}}
                    imgStyle={{ objectFit: `contain` }}
                  />
                </Col>
              }
              { section.text &&
                <Col>
                  <div dangerouslySetInnerHTML={{ __html:  section.text }} className="markdown-content" />
                </Col>
              }
            </Row>
            { section.table &&
              <TableVersatile data={section.table} />
            }
          </div>
        ))} */}


      </Container>


    </Layout>
  )

}
