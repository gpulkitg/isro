import React from 'react'
import { graphql } from 'gatsby'

import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
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

    <Layout withBgImg={true}>
      <SEO title={data.citizensCharterYaml.seo.title} />

      <Separator />
      <h1 className="text-center mb-3">{data.citizensCharterYaml.seo.title}</h1>

      <Container>
        <ClickReveal content={data.citizensCharterYaml.content} />
      </Container>


    </Layout>


  )

}
