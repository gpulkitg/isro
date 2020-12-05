import React, { useState, useCallback } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import Counter from '../components/counter';
import { Container, Row, Col, Button, CardDeck, Card, Image, Table } from 'react-bootstrap'
// import CountUp from 'react-countup';
import Layout from "../components/layout"
import Separator from '../components/separator'
import LinkVersatile from '../components/link-versatile'
import VerticalTimeline from '../components/vertical-timeline'


// const ColVersatile = ({ col }) => {
//   if (col.link) {
//     return (
//       <LinkVersatile url={col.link} className="no-underline">
//         { col.text ? col.text : col.link }
//       </LinkVersatile>
//     )
//   } else if (col.doc) {
//     return (
//       <a href={col.doc.publicURL} className="no-underline" target="_blank">
//         { col.text ? col.text : col.doc.name+col.doc.ext }{" "}
//       </a>
//     )
//   } else if (col.date) {
//     return col.date
//   } else {
//     return col.text
//   }
//
// }

//
// export const query = graphql`
//   query {
//     soundingRocketsYaml {
//       sections {
//         title
//         text
//         caption
//         image {
//           name
//           childImageSharp {
//             # fixed {
//             #   ...GatsbyImageSharpFixed
//             # }
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         table {
//           head {
//             col {
//               text
//             }
//           }
//           body {
//             row {
//               col {
//                 text
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `



export default function Test({ data }) {

  // const table = data.soundingRocketsYaml.sections[2].table
  const events = [
    {
      "date": "18th September, 2008",
      "title": "Prime Minister Manmohan Singh approves the Chandrayaan2 lunar mission"
    },
    {
      "date": "",
      "title": "Mission Planning"
    },
    {
      "date": "July 22, 2019",
      "title": "Launch Date"
    },
    {
      "date": "Aug 20, 2019",
      "title": "Orbiter Lunar Orbit insertion"
    },
    {
      "date": "",
      "title": "Orbital Experiments (Will be operational for 7 years)"
    }
  ]

  return (
    <Layout>


      <Container>

        <Separator />

        <Row>
          <Col className="my-auto text-center py-2" md={4}>
            <h2>Timeline Title</h2>
          </Col>
          <Col className="text-center" md={8}>
            <VerticalTimeline events={events} />
          </Col>
        </Row>



        {/* <Table variant="dark" className="table-custom-border" responsive>
          { table.hasOwnProperty('head') &&
            <thead>
              <tr>
                { table.head.map( ({col},i) =>
                  <th key={`head_th_${i}`}>
                    <ColVersatile col={col} />
                  </th>
                )}
              </tr>
            </thead>
          }

          <tbody>
            { table.hasOwnProperty('body') &&
                table.body.map( ({row},i) =>
                  <tr key={`body_tr_${i}`}>
                    {row.map( ({col},j) => (
                      <td key={`body_td_${j}`}>
                        <ColVersatile col={col} />
                      </td>
                    ))}
                  </tr>
                )
            }
          </tbody>

        </Table> */}



        {/* <div className="vh-100">
          some view height section
        </div>

        <VisibilitySensor active={!animated} onChange={handleVisibilityChange} delayedCall>
          <span ref={countUpRef} className="countup counter"/>
        </VisibilitySensor>
        <div className="animate-bottom">
          <h2>subtitle</h2>
          <p>text</p>
        </div> */}









      </Container>






      {/* <ParallaxProvider>
        <ParallaxSection />
      </ParallaxProvider> */}

    </Layout>



  )
}
