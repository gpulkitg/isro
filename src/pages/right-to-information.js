import React from 'react'
import { Link, graphql } from 'gatsby'

import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TextContent from '../components/text-content'
import Separator from '../components/separator'
import FlexibleLink from '../components/flexible-link'


export const query = graphql`
  query {
    rightToInformationYaml {
      seo {
        title
      }
      # content {
      #   text
      #   link
        # doc {
        #   publicURL
        # }
      # }
    }
  }
`



export default function InternationalCooperation({ data }) {
  console.log(data.rightToInformationYaml.content);

  return (

    <Layout>
      <SEO title={data.rightToInformationYaml.seo.title} />

      <Separator />
      <h1 className="text-center mb-2">{data.rightToInformationYaml.seo.title}</h1>

      <Container>
        {/* {data.rightToInformationYaml.content.map((item, ind) => (
          <div className="mb-2" key={`content_${ind}`}>
            { item.link &&
              <FlexibleLink url={item.link}>{item.text}</FlexibleLink>
            }
            { item.doc &&
              <a href={item.doc.publicURL} target="_blank">{item.text}</a>
            }
          </div>
        ))} */}
      </Container>


    </Layout>


  )

}
