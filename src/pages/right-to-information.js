import React from 'react'
import { graphql } from 'gatsby'

import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Separator from '../components/separator'
import LinkVersatile from '../components/link-versatile'
import { FileEarmark } from 'react-bootstrap-icons'


export const query = graphql`
  query {
    rightToInformationYaml {
      seo {
        title
      }
      content {
        text
        link
        doc {
          publicURL
        }
      }
    }
  }
`



export default function InternationalCooperation({ data }) {

  return (

    <Layout>
      <SEO title={data.rightToInformationYaml.seo.title} />

      <Separator />
      <h1 className="text-center mb-2">{data.rightToInformationYaml.seo.title}</h1>

      <Container>
        {data.rightToInformationYaml.content.map((item, ind) => (
          <div className="mb-2" key={`content_${ind}`}>
            { item.link &&
              <LinkVersatile url={item.link}>{item.text}</LinkVersatile>
            }
            { item.doc &&
              <a href={item.doc.publicURL} target="_blank" rel="noreferrer"><FileEarmark /> {item.text}</a>
            }
          </div>
        ))}
      </Container>


    </Layout>


  )

}
