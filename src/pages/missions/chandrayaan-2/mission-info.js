import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import { Container, Figure } from 'react-bootstrap'
import SEO from '../../../components/seo'
// import Layout from "../../../components/layout"
import LayoutChandrayaan2 from "../../../components/layout-chandrayaan-2"
import Separator from '../../../components/separator'
import TableVersatile from '../../../components/table-versatile'
import VerticalTimeline from '../../../components/vertical-timeline'
import Sensor from '../../../components/sensor'

export const query = graphql`
  query {
    chandrayaan2MissionInfoYaml {
      # cover {
      #   title
      #   image {
      #     name
      #     childImageSharp {
      #       fluid {
      #         ...GatsbyImageSharpFluid_withWebp
      #       }
      #     }
      #   }
      # }
      title
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
          body {
            row {
              col {
                text
              }
            }
          }
        }
      }
      verticalTimeline {
        title
        events {
          date
          title
        }
      }
    }
  }
`



export default function Chandrayaan2MissionInfo({ data }) {

  const {
    // cover,
    title,
    sections,
    verticalTimeline,
  } = data.chandrayaan2MissionInfoYaml


  return (
    <LayoutChandrayaan2>
      {/* <SEO title={`${cover.title} ${title}`} />

      <div className="w-100" style={{ height: `300px`, position: `relative`}}>
        <Img
          fluid={cover.image.childImageSharp.fluid}
          alt={cover.image.name}
          className="w-100 h-100"
          imgStyle={{ opacity: `0.5`, objectPosition: `top right` }}
        />
        <h1 className="text-center" style={{ position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }}>
          {cover.title}
        </h1>
      </div> */}

      <Container>
        <Separator title={title} />

        { sections.map((section, ind) => (
          <Sensor key={`sections_${ind}`} className="mb-4">
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
              <div>
                {section.table.title && <h4 className="text-center mb-1">{section.table.title}</h4>}
                <TableVersatile data={section.table} />
              </div>
            }
          </Sensor>
        ))}

        <VerticalTimeline data={verticalTimeline} />

      </Container>




    </LayoutChandrayaan2>
  )

}
