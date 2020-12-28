import React from "react"
import { graphql } from 'gatsby'

import { Container, Table } from 'react-bootstrap'

import SEO from '../components/seo'
import Layout from "../components/layout"
import Separator from '../components/separator'
import TableVersatile from '../components/table-versatile'
import LinkVersatile from '../components/link-versatile'

export const query = graphql`
  query {
    helpYaml {
      seo {
        title
      }
      section1 {
        title
        text
      }
      pluginsTable {
        head {
          col {
            text
          }
        }
        body {
          documentType
          downloads {
            text
            link
          }
        }
      }
      section2 {
        title
        text
      }
      # screenReaders {
      #   text
      #   link
      #   type
      # }
      screenReadersTable {
        head {
          col {
            text
          }
        }
        body {
          row {
            col {
              text
              link
            }
          }
        }
      }
    }
  }
`

export default function Help({ data }) {

  const {
    seo,
    section1,
    pluginsTable,
    section2,
    screenReadersTable,
  } = data.helpYaml


  return (
    <Layout withBgImg={true}>
      <SEO title={seo.title} />

      <Separator />
      <h1 className="text-center mb-3">{seo.title}</h1>

      <Container>

        <div dangerouslySetInnerHTML={{ __html: section1.text }} className="text-justify" />

        <Separator title="Plug-ins for alternate document types" />
        <Table className="table-custom-border mb-2" responsive>
          <thead>
            <tr>
              { pluginsTable.head.map(({ col }, ind) => (
                <th key={`pluginsTable_head_${ind}`}>{col.text}</th>
              ))}
            </tr>
          </thead>


          <tbody>
            { pluginsTable.body.map(({ documentType, downloads }, ind) => (
              <tr key={`pluginsTable_body_${ind}`}>
                <td>{documentType}</td>
                <td>
                  <ul>
                    { downloads.map(({ text, link}, i) => (
                      <li key={`${ind}_downloads_${i}`}>
                        <LinkVersatile url={link} className="no-underline">{text}</LinkVersatile>
                        {/* <a href={link} className="no-underline" target="_blank">{text}</a> */}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Separator />
        <div dangerouslySetInnerHTML={{ __html: section2.text }} className="text-justify" />


        <TableVersatile data={screenReadersTable} />


      </Container>


    </Layout>

  )

}
