import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import { Container } from 'react-bootstrap'

import SEO from '../../../components/seo'
// import Layout from "../../../components/layout"
import LayoutChandrayaan2 from "../../../components/layout-chandrayaan-2"
import Separator from '../../../components/separator'
import SplitSection from '../../../components/split-section'


export const query = graphql`
  query {
    chandrayaan2SpacecraftYaml {
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
      splitSection {
        title
        subtitle
        description
        table {
          body {
            row {
              col {
                text
              }
            }
          }
        }
        textPosition
        textAlignment
        objectFit
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`



export default function Chandrayaan2Spacecraft({ data }) {

  const {
    // cover,
    title,
    splitSection,
  } = data.chandrayaan2SpacecraftYaml


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

      <Separator title={title} />


      { splitSection.map((item, ind) => (
        <SplitSection
          key={`splitSection_${ind}`}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          table={item.table}
          textPosition={item.textPosition}
          textAlignment={item.textAlignment}
        >
          <Img
            fluid={item.image.childImageSharp.fluid}
            alt={item.image.name}
            className="h-100 w-100"
            imgStyle={{ objectFit: item.objectFit }}
          />
        </SplitSection>
      ))}


    </LayoutChandrayaan2>
  )

}
