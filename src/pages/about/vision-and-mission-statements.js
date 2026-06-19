import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

// import Layout from '../../components/layout'
import LayoutAbout from '../../components/layout-about'
import TextContent from '../../components/text-content'
import Separator from '../../components/separator'


export const query = graphql`
  query {
    aboutYaml {
      visionAndMissionStatements {
        title
        text
      }
    }
  }
`

export default function VisionAndMissionStatements({ data }) {

  const {
    visionAndMissionStatements,
  } = data.aboutYaml


  return (
    <LayoutAbout>


      { visionAndMissionStatements.map((section, ind) => (
        <TextContent title={section.title} key={`visionAndMissionStatements_${ind}`}>
          <div dangerouslySetInnerHTML={{ __html: section.text }} />
        </TextContent>
      ))}


    </LayoutAbout>
  )

}
