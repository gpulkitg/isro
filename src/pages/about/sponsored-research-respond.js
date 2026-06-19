import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Figure } from 'react-bootstrap'

// import Layout from '../../components/layout'
import LayoutAbout from '../../components/layout-about'
import Separator from '../../components/separator'
import Sensor from '../../components/sensor'



export const query = graphql`
  query {
    aboutYaml {
      sponsoredResearch {
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        caption
        text
      }
    }
  }
`

export default function SponsoredResearch({ data }) {


  return (
    <LayoutAbout>

      <Container>

        {/* <Separator /> */}
        <h2 className="mb-2 text-center">Sponsored Research</h2>

        { data.aboutYaml.sponsoredResearch.map((section, ind) => (
          <Sensor key={`sections_${ind}`}>
            { section.title &&
              <h3 className="text-center mb-2">{section.title}</h3>
            }
            { section.image &&
              <Figure className="w-100">
                <Img
                  fluid={section.image.childImageSharp.fluid}
                  alt={section.image.name}
                  style={{ maxHeight: `600px` }}
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
          </Sensor>
        ))}

        {/* <h1 className="mb-2 text-center display-4">Sponsored Research</h1>

        <Figure className="h-100 w-100 mb-2 mx-auto">
          <Img
            fluid={sponsoredResearch.image.childImageSharp.fluid}
            alt={sponsoredResearch.image.name}
            className="mx-auto"
            style={{ maxWidth: `600px` }}
          />
          <Figure.Caption className="text-center">{sponsoredResearch.caption}</Figure.Caption>
        </Figure>

        <div dangerouslySetInnerHTML={{ __html: sponsoredResearch.text }} className="text-justify"/> */}

      </Container>


    </LayoutAbout>
  )

}
