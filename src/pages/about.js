import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import { Container, Figure } from 'react-bootstrap'

import SEO from '../components/seo'
import Layout from "../components/layout"
import ListItems from '../components/list-items'
import Separator from '../components/separator'


export const query = graphql`
  query {
    aboutYaml {
      seo {
        title
      }
      cover {
        title
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      sections {
        text
        caption
        image {
          name
          childImageSharp {
            # fixed {
            #   ...GatsbyImageSharpFixed
            # }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      listLinks {
        title
        content {
          link
          text
        }
      }
    }

  }
`


export default function About({ data }) {

  const {
    seo,
    cover,
    sections,
    listLinks,
  } = data.aboutYaml


  return (
    <Layout>
      <SEO title={seo.title} />

      <div className="w-100" style={{ height: `50vh`, position: `relative`}}>
        <Img
          fluid={cover.image.childImageSharp.fluid}
          alt={cover.image.name}
          className="w-100 h-100"
          imgStyle={{ opacity: `0.5`, objectPosition: `top right` }}
        />
        {/* <h1 className="text-center" style={{ position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }}>
          {cover.title}
        </h1> */}
      </div>


      <Container>

        <Separator />
        { sections.map((section, ind) => (
          <div key={`sections_${ind}`}>
            <div dangerouslySetInnerHTML={{ __html: section.text }} className="text-justify mb-1"/>
            <Figure className="h-100 w-100 mb-1 mx-auto">
              <Img
                fluid={section.image.childImageSharp.fluid}
                alt={section.image.name}
                className="mx-auto"
                style={{ maxWidth: `600px` }}
              />
              <Figure.Caption className="text-center">{section.caption}</Figure.Caption>
            </Figure>
          </div>
        ))}

        <Separator />
        <ListItems items={listLinks} />


      </Container>



    </Layout>
  )
}
