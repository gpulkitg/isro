import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Figure } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Separator from '../components/separator'
import TableVersatile from '../components/table-versatile'
import ListItems from '../components/list-items'


export const query = graphql`
  query ($slug: String) {
    masterListYaml(spacecraftLink: {eq: $slug}) {
      spacecraftName
      launchDate(formatString: "D MMM YYYY")
    }
    mdSpacecraftYaml(slug: {eq: $slug}) {
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

export default function MdSpacecraft({ data }) {

  const {
    // seo,
    // date,
    sections,
    // relatedLinks,
  } = data.mdSpacecraftYaml

  const {
    spacecraftName,
    launchDate,
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

        {/* { relatedLinks &&
          <>
          <Separator title="Related" />
          <ListItems items={relatedLinks} />
          </>
        } */}


      </Container>


    </Layout>
  )

}
