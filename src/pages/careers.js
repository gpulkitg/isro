import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import { Container, Form, Row, Col, Table } from 'react-bootstrap'
import SEO from '../components/seo'
import Layout from "../components/layout"
import Separator from '../components/separator'


export const query = graphql`
  query {
    cover: file(relativePath: {eq: "common/career-2.jpg"}) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allCareersYaml {
      edges {
        node {
          id
          centre
          location
          post
          remarks
          link
          deadline
        }
      }
    }
    file(relativePath: {eq: "general/caution_regarding_fake_offers_of_appointment_.pdf"}) {
      name
      publicURL
    }
  }
`


export default function Careers({ data }) {


  const [selectedCentre, setSelectedCentre] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState(0)
  const [displayedCareers, setDisplayedCareers] = useState([])

  const centres = [
    "सभी केंद्र / All Centres",
    "केंद्रीकृत भर्ती (आई.सी.आर.बी.) / Centralised Recruitment (ICRB)",
    "अंतरिक्ष विभाग (अं.वि.) / Department of Space (DOS)",
  ]

  const locations = [
    "सभी स्‍थान / All Locations",
    "बेंगलूर / Bengaluru",
    "श्रीहरिकोटा / Sriharikota",
    "हैदराबाद / Hyderabad",
  ]


  useEffect(() => {

    const filterCareers = () => {

      var matches = data.allCareersYaml.edges

      if (selectedCentre > 0) {
        matches = matches.filter(({ node }) => (
          node.centre.includes(centres[selectedCentre])
        ))
      }
      if (selectedLocation > 0) {
        matches = matches.filter(({ node }) => (
          node.location.includes(locations[selectedLocation])
        ))
      }
      // const matches = data.allCareersYaml.edges.filter(({ node }) => (
      //   node.centre.includes(centres[selectedCentre]) && node.location.includes(locations[selectedLocation])
      // ))
      setDisplayedCareers(matches)
    }

    filterCareers()

    return filterCareers.cancel

  }, [selectedCentre, selectedLocation])

  // useEffect(() => {
  //   console.log("useEffect Location");
  //
  //   const filterWithLocation = () => {
  //     const matches = data.allCareersYaml.edges.filter(({ node }) => (
  //       node.location.includes(locations[selectedLocation])
  //     ))
  //     setDisplayedCareers(matches)
  //   }
  //
  //   filterWithLocation()
  //
  //   return filterWithLocation.cancel
  //
  // }, [selectedLocation])


  return (
    <Layout>

      <SEO title="Careers" />

      <div className="w-100">
        <Img
          fluid={data.cover.childImageSharp.fluid}
          alt={data.cover.name}
          className="w-100 h-100"
        />
      </div>


      <Separator title="Start your journey" />
      <Container>

        <Form className="mb-2">
          <Form.Row className="d-flex justify-content-center">

            {/* <Form.Group as={Col} controlId="formSearch" md={4}>
              <Form.Label>Search posts</Form.Label>
              <Form.Control
                placeholder="Type to search"
                name="searchQuery"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </Form.Group> */}

            <Form.Group as={Col} controlId="selectCentre" md>
              <Form.Label>Select Centre</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setSelectedCentre(e.target.value)}
                name="centre"
                value={selectedCentre}
                custom
                >
                { centres.map( (centre, ind) => (
                  <option value={ind} key={ind}>{centre}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="selectLocation" md>
              <Form.Label>Select Location</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setSelectedLocation(e.target.value)}
                name="location"
                value={selectedLocation}
                custom
                >
                { locations.map( (location, ind) => (
                  <option value={ind} key={ind}>{location}</option>
                ))}
              </Form.Control>
            </Form.Group>


          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Form.Group as={Col} md className="text-center my-auto py-1">
              <a href="liveregister.isro.gov.in/LRC">Live Register for Ph.D and PG Candidates</a>
              {/* <Form.Label>Ph.D and PG Candidates</Form.Label> */}
              {/* <Form.Text >
                <h6></h6>
              </Form.Text> */}
            </Form.Group>
          </Form.Row>
        </Form>

        <div className="mb-2">
          <a href={data.file.publicURL} className="no-underline" target="_blank" rel="noreferrer">
            <h2 className="text-center text-danger">
              ATTENTION JOB APPLICANTS
            </h2>
          </a>
        </div>


        { displayedCareers.length > 0 ? (

          <Table variant="dark" responsive>
            <thead>
              <tr>
                <th>इसरो केंद्र / ISRO Centre</th>
                <th>स्‍थान / Location</th>
                <th>पद / Post</th>
                {/* <th>टिप्‍पणी / Remarks</th> */}
                <th>समयसीमा / Deadline</th>
              </tr>
            </thead>


            <tbody>
              { displayedCareers.map(({ node }, ind) => (
                <tr key={node.id}>
                  <td>{node.centre}</td>
                  <td>{node.location}</td>
                  <td><Link to={node.link} className="no-underline">{node.post}</Link></td>
                  {/* <td><div dangerouslySetInnerHTML={{ __html: node.remarks }} /></td> */}
                  <td>{node.deadline}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ): (
          <h4 className="text-center text-muted py-4">No openings found</h4>
        )}




      </Container>




    </Layout>
  )
}
