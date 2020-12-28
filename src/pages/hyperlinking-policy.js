import React from 'react'
import { graphql } from 'gatsby'

import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Separator from '../components/separator'

export const query = graphql`
  query {
    hyperlinkingPolicyYaml {
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



export default function HyperlinkingPolicy({ data }) {

  return (

    <Layout withBgImg={true}>
      <SEO title={data.hyperlinkingPolicyYaml.seo.title} />

      <Separator />
      <h1 className="text-center mb-3">{data.hyperlinkingPolicyYaml.seo.title}</h1>

      <Container>
        <div dangerouslySetInnerHTML={{ __html: data.hyperlinkingPolicyYaml.content.text }} className="text-justify" />
      </Container>


    </Layout>


  )

}
