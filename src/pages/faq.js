import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import { Container } from 'react-bootstrap'
import SEO from '../components/seo'
import Layout from "../components/layout"
import Separator from '../components/separator'
import ClickReveal from '../components/click-reveal'
import Sensor from '../components/sensor'


export const query = graphql`
  query {
    faqYaml {
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
      content {
        title
        text
      }
    }
  }
`



export default function FAQ({ data }) {

  const {
    cover,
    content
  } = data.faqYaml


  return (
    <Layout>
      <SEO title="FAQ" />

      <div className="w-100" className="cover-img-wrapper">
        <Img
          fluid={cover.image.childImageSharp.fluid}
          alt={cover.image.name}
          className="w-100 h-100"
          imgStyle={{ opacity: `0.5`, objectPosition: `top right` }}
        />
        <h1 className="text-center display-4" style={{ position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }}>
          {cover.title}
        </h1>
      </div>


      <Separator />
      <Container>
        <Sensor>
          <ClickReveal content={content} />
        </Sensor>
      </Container>


    </Layout>
  )

}
