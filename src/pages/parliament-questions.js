import React from 'react'
import { graphql } from 'gatsby'

import { Container, Button } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Separator from '../components/separator'


export const query = graphql`
  query {
    parliamentQuestionsYaml {
      seo {
        title
      }
      externalLinks {
        text
        link
      }
      content {
        text
        doc {
          name
          publicURL
        }
      }
    }
  }
`



export default function ParliamentQuestions({ data }) {

  return (

    <Layout withBgImg={true}>
      <SEO title={data.parliamentQuestionsYaml.seo.title} />

      <Separator />
      <h1 className="text-center mb-3">{data.parliamentQuestionsYaml.seo.title}</h1>

      <Container>
        { data.parliamentQuestionsYaml.externalLinks.map((item, ind) => (
          <div className="mb-2" key={`externalLinks_${ind}`}>
            <Button href={item.link} variant="outline-light" className="btn-jumbotron">{item.text}</Button>
          </div>
        )) }

        { data.parliamentQuestionsYaml.content.map((item, ind) => (
          <div className="mb-2" key={`content_${ind}`}>
            <a href={item.doc.publicURL} target="_blank" rel="noreferrer">{item.text}</a>
          </div>
        ))}
      </Container>


    </Layout>


  )

}
