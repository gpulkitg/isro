import React from 'react'
import { graphql } from 'gatsby'

import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Separator from '../components/separator'


export const query = graphql`
  query {
    monthlySummaryOfDosYaml {
      seo {
        title
      }
      content {
        year
        month
        doc {
          publicURL
        }
      }
      # table {
      #   head {
      #     col
      #   }
      #   body {
      #     row {
      #       col {
      #         text
      #         doc {
      #           publicURL
      #         }
      #       }
      #     }
      #   }
      # }
    }
  }
`



export default function MonthlySummaryOfDos({ data }) {
  console.log(data);

  return (

    <Layout>
      <SEO title={data.monthlySummaryOfDosYaml.seo.title} />

      <Separator />
      <h1 className="text-center mb-2">{data.monthlySummaryOfDosYaml.seo.title}</h1>

      <Container>
        { data.monthlySummaryOfDosYaml.content.map((item, ind) => (
          <div key={`content_${ind}`} className="mb-2 text-center">
            <a href={item.doc.publicURL} target="_blank" rel="noreferrer"><h4>{item.year} {item.month}</h4></a>
          </div>
        ))}
        {/* <Table variant="dark" className="table-custom-border" responsive>
          <thead>
            <tr>
              { data.monthlySummaryOfDosYaml.table.head.map(({ col }, ind) => (
                <th key={`head_${ind}`}>{col}</th>
              ))}
            </tr>
          </thead>


          <tbody>
            { data.monthlySummaryOfDosYaml.table.body.map(({ row }, ind) => (
              <tr key={`row_${ind}`}>
                { row.map(({ col }, i) => (
                  <td key={`${ind}_col_${i}`}>
                    <a href={col.doc.publicURL} target="_blank">{col.text}</a>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table> */}
      </Container>


    </Layout>


  )

}
