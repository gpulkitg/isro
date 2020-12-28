import React from "react"
import { graphql } from 'gatsby'

import { Container } from 'react-bootstrap'
import SEO from '../components/seo'
import Layout from "../components/layout"
import Separator from '../components/separator'

export const query = graphql`
  query {
    termsOfUseYaml {
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

export default function TermsOfUse({ data }) {

  return (

    <Layout withBgImg={true}>
      <SEO title={data.termsOfUseYaml.seo.title} />

      <Separator />
      <h1 className="text-center mb-3">{data.termsOfUseYaml.seo.title}</h1>

      <Container>
        <div dangerouslySetInnerHTML={{ __html: data.termsOfUseYaml.content.text }} className="text-justify" />
      </Container>


    </Layout>
  )

}
