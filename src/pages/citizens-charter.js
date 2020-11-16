import React from 'react'
import { Link, graphql } from 'gatsby'

import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TextContent from '../components/text-content'
import Separator from '../components/separator'
import ClickReveal from '../components/click-reveal'

export const query = graphql`
  query {
    citizensCharterYaml {
      seo {
        title
      }
      content {
        title
        text
      }
    }
  }
`



export default function CitizensCharter({ data }) {

  return (

    <Layout>
      <SEO title={data.citizensCharterYaml.seo.title} />

      <Separator />
      <h1 className="text-center mb-2">{data.citizensCharterYaml.seo.title}</h1>

      <Container>
        <ClickReveal content={data.citizensCharterYaml.content} />
      </Container>


    </Layout>


  )

}
