import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import { Container, Figure } from 'react-bootstrap'
import SEO from '../../../components/seo'
import Layout from "../../../components/layout"
import LayoutChandrayaan2 from "../../../components/layout-chandrayaan-2"
import Separator from '../../../components/separator'
// import TableVersatile from '../../../components/table-versatile'
import Sensor from '../../../components/sensor'


export const query = graphql`
  query {
    chandrayaan2PayloadsYaml {
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
        # image {
        #   name
        #   childImageSharp {
        #     fluid {
        #       ...GatsbyImageSharpFluid_withWebp
        #     }
        #   }
        # }
      }
    }
  }
`



export default function Chandrayaan2Payloads({ data }) {

  const {
    // cover,
    title,
    sections,
  } = data.chandrayaan2PayloadsYaml


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
          <Sensor key={`sections_${ind}`}>
            {/* { section.image &&
              <Figure className="w-100 mb-2">
                <Img
                  fluid={section.image.childImageSharp.fluid}
                  alt={section.image.name}
                  style={{ maxHeight: `400px` }}
                  imgStyle={{ objectFit: `contain` }}
                />
                <Figure.Caption className="text-center">{section.caption}</Figure.Caption>
              </Figure>
            } */}
            { section.title &&
              <h3 className="text-center mb-2">{section.title}</h3>
            }
            { section.text &&
              <div className="mb-2">
                <div dangerouslySetInnerHTML={{ __html: section.text }} className="markdown-content" />
              </div>
            }
            {/* { section.table &&
              <div className="mb-2">
                {section.table.title && <h4 className="text-center mb-1">{section.table.title}</h4>}
                <TableVersatile data={section.table} />
              </div>
            } */}
          </Sensor>
        ))}
      </Container>




    </LayoutChandrayaan2>
  )

}
