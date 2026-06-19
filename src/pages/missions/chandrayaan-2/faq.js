import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import { Container } from 'react-bootstrap'
import SEO from '../../../components/seo'
// import Layout from "../../../components/layout"
import LayoutChandrayaan2 from "../../../components/layout-chandrayaan-2"
import Separator from '../../../components/separator'
import ClickReveal from '../../../components/click-reveal'
import Sensor from '../../../components/sensor'


export const query = graphql`
  query {
    chandrayaan2FaqYaml {
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
      clickReveal {
        title
        text
      }
    }
  }
`



export default function Chandrayaan2FAQ({ data }) {

  const {
    // cover,
    title,
    clickReveal,
  } = data.chandrayaan2FaqYaml


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

      <Sensor>
        <Separator title={title} />

        <Container>
          <ClickReveal content={clickReveal} />
        </Container>

      </Sensor>


    </LayoutChandrayaan2>
  )

}
