import React from "react"
import { graphql } from 'gatsby'

import { Container } from 'react-bootstrap'
import SEO from '../components/seo'
import Layout from "../components/layout"
import Separator from '../components/separator'
import LinkVersatile from '../components/link-versatile'

export const query = graphql`
  query {
    relatedLinksYaml {
      seo {
        title
      }
      content {
        text
        link
      }
    }
  }
`

export default function PrivacyPolicy({ data }) {

  return (
    <Layout>
      <SEO title={data.relatedLinksYaml.seo.title} />

      <Separator />
      <h1 className="text-center mb-2">{data.relatedLinksYaml.seo.title}</h1>

      <Container>
        <ul>
          { data.relatedLinksYaml.content.map((item, ind) => (
            <li key={`content_${ind}`} className="mb-1">
              <LinkVersatile url={item.link}>{item.text}</LinkVersatile>
            </li>
          ))}
        </ul>
      </Container>


    </Layout>

  )

}
