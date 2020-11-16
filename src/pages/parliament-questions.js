import React from 'react'
import { Link, graphql } from 'gatsby'

import { Container, Button } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TextContent from '../components/text-content'
import Separator from '../components/separator'
import FlexibleLink from '../components/flexible-link'


export const query = graphql`
  query {
    parliamentQuestionsYaml {
      seo {
        title
      }
      content {
        text
        link
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

    <Layout>
      <SEO title={data.parliamentQuestionsYaml.seo.title} />

      <Separator />
      <h1 className="text-center mb-2">{data.parliamentQuestionsYaml.seo.title}</h1>

      <Container>
        {data.parliamentQuestionsYaml.content.map((item, ind) => (
          <div className="mb-2" key={`content_${ind}`}>
            { item.link &&
              <div>
                <Button href={item.link} variant="outline-light" className="btn-jumbotron">{item.text}</Button>
              </div>
            }
            { item.doc &&
              <a href={item.doc.publicURL} target="_blank">{item.text}</a>
            }
          </div>
        ))}
      </Container>


    </Layout>


  )

}
