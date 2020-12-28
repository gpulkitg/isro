import React from 'react'
import { graphql } from 'gatsby'

import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Separator from '../components/separator'

export const query = graphql`
  query {
    internationalCooperationYaml {
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



export default function InternationalCooperation({ data }) {

  return (

    <Layout withBgImg={true}>
      <SEO title={data.internationalCooperationYaml.seo.title} />

      <Separator />
      <h1 className="text-center mb-3">{data.internationalCooperationYaml.seo.title}</h1>

      <Container>
        <div dangerouslySetInnerHTML={{ __html: data.internationalCooperationYaml.content.text }} className="text-justify" />
      </Container>


    </Layout>


  )

}
