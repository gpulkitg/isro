import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import { Container, Form, Row, Col, Table } from 'react-bootstrap'
import CustomDatePicker from '../components/custom-datepicker'
import SEO from '../components/seo'
import Layout from "../components/layout"
import Separator from '../components/separator'
import { FileEarmark } from 'react-bootstrap-icons'

export const query = graphql`
  query {
    allTendersYaml {
      edges {
        node {
          id
          advertiser
          advertisementNo
          startDate
          endDate
          doc {
            name
            ext
            publicURL
          }
        }
      }
    }
  }
`


export default function Tenders({ data }) {

  const [selectedAdvertiser, setSelectedAdvertiser] = useState(0)
  const [displayedTenders, setDisplayedTenders] = useState([])
  const [startDate, setStartDate] = useState(new Date());



  const advertisers = [
    "सभी विज्ञापनकर्ता / All advertisers",

    "अंतरिक्ष उपयोग केंद्र (सैक), अहमदाबाद - 380 015 / Space Applications Centre (SAC), Ahmedabad - 380 015",

    "इसरो दूरमिति अनुवर्तन और आदेश नेटवर्क (इस्‍ट्रैक), ए.1-6, पीण्‍या औद्योगिक क्षेत्र, बेंगलूर - 560 058 / ISRO Telemetry Tracking and Command Network (ISTRAC), A1-6, Peenya Industrial Estate, Bangalore - 560 058",

    "यू.आर. राव उपग्रह केंद्र, (यू.आर.एस.सी.), एयरपोर्ट रोड, विमानपुरा पोस्‍ट, बेंगलूर - 560 017 / U R Rao Satellite Centre,(URSC), Airport Road, Vima napura Post, Bangalore - 560 017",

    "निर्माण एवं अनुरक्षण समूह (सी.एम.जी.), यू.आर. राव उपग्रह केंद्र, (यू.आर.एस.सी.), एयरपोर्ट रोड, विमानपुरा पोस्‍ट, बेंगलूर - 560 017 / Construction and Maintenance Group(CMG), U R Rao Satellite Centre (URSC)",
  ]

  useEffect(() => {

    const filterTenders = () => {

      var matches = data.allTendersYaml.edges

      if (selectedAdvertiser > 0) {
        matches = matches.filter(({ node }) => (
          node.advertiser.includes(advertisers[selectedAdvertiser])
        ))
      }
      setDisplayedTenders(matches)
    }

    filterTenders()

    return filterTenders.cancel

  }, [selectedAdvertiser])


  return (
    <Layout>

      <SEO title="Tenders" />


      <Separator />
      <h1 className="text-center mb-2">Tenders</h1>
      <Container>

        <Form className="mb-2">
          <Form.Row className="d-flex justify-content-center">

            <Form.Group as={Col} controlId="selectCentre" md>
              <Form.Label>विज्ञापनकर्ता / Advertiser</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setSelectedAdvertiser(e.target.value)}
                name="centre"
                value={selectedAdvertiser}
                custom
                >
                { advertisers.map( (advertiser, ind) => (
                  <option value={ind} key={ind}>{advertiser}</option>
                ))}
              </Form.Control>
            </Form.Group>

          </Form.Row>

          <Form.Row className="d-flex justify-content-center">

            <Form.Group as={Col} controlId="selectCentre" md>
              <Form.Label>निविदा प्रारंभ दिनांक / Tender Start Date</Form.Label>
              {/* <Form.Control as={CustomDatePicker} selected={startDate} onChange={date => setStartDate(date)} /> */}
              <CustomDatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </Form.Group>

          </Form.Row>
        </Form>


        { displayedTenders.length > 0 ? (

          <Table variant="dark" className="table-custom-border" responsive>
            <thead>
              <tr>
                <th style={{ width: `33.33%` }}>विज्ञापनकर्ता / Advertiser</th>
                <th style={{ width: `16.66%` }}>सविज्ञापन संख्या / Advt. No.</th>
                <th style={{ width: `16.66%` }}>निविदा प्रारंभ दिनांक / Tender Start Date</th>
                <th style={{ width: `16.66%` }}>निविदा अंतिम दिनांक / Tender End Date</th>
                <th style={{ width: `16.66%` }}>निविदा/शुद्धिपत्र Tender/Corrigendum</th>
              </tr>
            </thead>


            <tbody>
              { displayedTenders.map(({ node }, ind) => (
                <tr key={node.id}>
                  <td>{node.advertiser}</td>
                  <td>
                    <a href={node.doc.publicURL} className="no-underline" target="_blank" rel="noreferrer">{node.advertisementNo}</a>
                  </td>
                  <td>{node.startDate}</td>
                  <td>{node.endDate}</td>
                  <td>
                    <a href={node.doc.publicURL} className="no-underline" target="_blank" rel="noreferrer">{node.doc.name}{node.doc.ext} <FileEarmark /></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ): (
          <h4 className="text-center text-muted py-4">No tenders found</h4>
        )}





      </Container>


    </Layout>
  )
}
