import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Figure, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Separator from '../components/separator'
import TableVersatile from '../components/table-versatile'
// import ListItems from '../components/list-items'
import RelatedSection from '../components/related-section'
import Sensor from '../components/sensor'


export const query = graphql`
  query ($slug: String, $tag: String) {
    masterListYaml(spacecraftLink: {eq: $slug}) {
      launcherName
      launcherLink
      launchDate(formatString: "MMM D, YYYY")
      spacecraftName
      docs {
        text
        doc {
          id
          publicURL
        }
      }
      otherLinks {
        text
        link
      }
    }
    spacecraftPagesYaml(slug: {eq: $slug}) {
      sections {
        title
        caption
        text
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        table {
          title
          # head {
          #   col {
          #     text
          #   }
          # }
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

export default function SpacecraftPage({ data }) {
  const {
    launcherName,
    launcherLink,
    launchDate,
    spacecraftName,
    docs,
    otherLinks,
  } = data.masterListYaml

  // add launcher page link
  const pageLinks = [
    {
      "link": launcherLink,
      "text": launcherName,
    }
  ]
  const otherLinksNew = otherLinks ? [...pageLinks, ...otherLinks] : pageLinks


  return (
    <Layout>

      <SEO title={spacecraftName} />

      <Separator />

      <Container>

        <Sensor>
          { launchDate &&
            <h5 className="text-muted mb-2">{launchDate}</h5>
          }
          { spacecraftName &&
            <h2 className="mb-2">{spacecraftName}</h2>
          }
        </Sensor>

        <div className="mb-2" style={{ borderBottom: `1px solid gray`}}></div>


        { data.spacecraftPagesYaml.sections.map((section, ind) => (
          <Sensor key={`sections_${ind}`}>
            { section.title &&
              <h5 className="mb-2"><em>{section.title}</em></h5>
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




      </Container>

      <RelatedSection
        otherLinks={otherLinksNew}
        docs={docs}
        galleriesImage={data.allGalleriesImageYaml}
        galleriesVideo={data.allGalleriesVideoYaml}
        updates={data.allUpdatesYaml}
      />


    </Layout>
  )

}
