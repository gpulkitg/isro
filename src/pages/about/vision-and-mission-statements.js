import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'
import TextContent from '../../components/text-content'


export const query = graphql`
  query {
    aboutYaml {
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
      visionAndMissionStatements {
        title
        content
      }
    }
  }
`

export default function VisionAndMissionStatements({ data }) {

  const {
    cover,
    visionAndMissionStatements
  } = data.aboutYaml

  return (
    <Layout>

      <div className="w-100" style={{ height: `50vh`, position: `relative`}}>
        <Img
          fluid={cover.image.childImageSharp.fluid}
          alt={cover.image.name}
          className="w-100 h-100"
          imgStyle={{ opacity: `0.5`, objectPosition: `top right` }}
        />
      </div>

      {/* <TextContent title="">
        <div dangerouslySetInnerHTML={{ __html: visionAndMissionStatements.content }} />
      </TextContent> */}
      { visionAndMissionStatements.map((item, ind) => (
        <TextContent title={item.title} key={`visionAndMissionStatements_${ind}`}>
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </TextContent>
      ))}


    </Layout>
  )

}
