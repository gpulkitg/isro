import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Container } from 'react-bootstrap'

import Layout from './layout'
import Separator from './separator'
import ListItems from './list-items'



export default function LayoutChandrayaan2({ children }) {

  const data = useStaticQuery(graphql`
    query {
      chandrayaan2MissionInfoYaml {
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
      }
    }
  `)

  const {
    cover,
  } = data.chandrayaan2MissionInfoYaml

  return (
    <Layout>

      <div className="w-100 mb-2" className="cover-img-wrapper">
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

      <div className="mt-2">
        { children }
      </div>

    </Layout>
  )

}
