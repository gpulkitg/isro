import React from "react"
import { graphql } from 'gatsby'

import { Container } from 'react-bootstrap'
import SEO from '../components/seo'
import Layout from "../components/layout"
import Separator from '../components/separator'


export const query = graphql`
  query {
    privacyPolicyYaml {
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

export default function indigenisationOfSpaceMaterialsIsmDataSheet({ data }) {

  return (
    <Layout>


      <SEO title={data.privacyPolicyYaml.seo.title} />

      <Separator />
      <h1 className="text-center mb-2">{data.privacyPolicyYaml.seo.title}</h1>

      <Container>
        <div dangerouslySetInnerHTML={{ __html: data.privacyPolicyYaml.content.text }} className="text-justify" />
      </Container>


    </Layout>


  )

}
