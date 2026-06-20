import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import debounce from 'lodash/debounce'

import { Container, Row, Col, Form } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sensor from '../components/sensor'


export const query = graphql`
  query {
    allUpdatesYaml(sort: {fields: date, order: DESC}) {
      edges {
        node {
          id
          title
          slug
          description
          date(formatString: "D MMM YYYY")
          image {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    cover: file(relativePath: {eq: "updates/isro_moon.jpg"}) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


export default function Updates({ data }) {

  const displayYears = [
    2020,
    2019,
    2018,
    2017,
    2016,
  ]

  const [searchQuery, setSearchQuery] = useState("")
  const [displayYear, setDisplayYear] = useState(2020)
  const [displayedUpdates, setDisplayedUpdates] = useState([])


  // useEffect(() => {
  //
  //   filterWithYear()
  //
  // }, [displayYear])


  useEffect(() => {

    const filterWithYear = () => {
      console.log("filterWithYear");
      const matches = data.allUpdatesYaml.edges.filter(({ node }) => (
        node.date.includes(displayYear)
      ))
      setDisplayedUpdates(matches)
      // setSearchQuery("")
    }


    const search = debounce(() => {
      console.log("search");
      const matches = displayedUpdates.filter(({ node }) => (
        node.title.toLowerCase().includes(searchQuery.toLowerCase())
      ))
      setDisplayedUpdates(matches)
    }, 500)



    if (searchQuery) {
      search()
    }
    else {
      // setDisplayedUpdates(data.allUpdatesYaml.edges)
      filterWithYear()
    }

    return search.cancel

  }, [searchQuery, displayYear])




  return (
    <Layout>

      <SEO title="Updates" />

      <div className="w-100 cover-img-wrapper">
        <Img
          fluid={data.cover.childImageSharp.fluid}
          alt={data.cover.name}
          className="w-100 h-100"
          imgStyle={{ opacity: `0.5` }}
        />
        <h1 className="text-center display-4" style={{ position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }}>
          Updates
        </h1>
      </div>

      <div className="my-2"></div>

      <Container>

        <Form className="mb-2">
          <Row className="d-flex justify-content-center g-2">
            <Form.Group as={Col} controlId="formSearch" md={8}>
              <Form.Control
                placeholder="Type to search"
                name="searchQuery"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formSelect" md={4}>
              {/* <Form.Label>Gallery Type</Form.Label> */}
              <Form.Select
                onChange={(e) => setDisplayYear(e.target.value)}
                name="displayYear"
                value={displayYear}
                >
                { displayYears.map( (year, ind) => (
                  <option value={year} key={year}>{year}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
        </Form>


        { displayedUpdates.map(({node}) =>
          // <Sensor key={node.id}>
            <Row className="py-2" key={node.id} style={{ borderBottom: `1px solid gray`}}
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-easing="easeOutCirc"
              >
              <Col md={3}>
                { node.image &&
                  <Img
                    fluid={node.image.childImageSharp.fluid}
                    alt={node.image.name}
                    style={{ objectFit: "contain" }}
                  />
                }
              </Col>

              <Col className="py-1" md={9}>
                <h6 className="text-info">{node.date}</h6>
                <h4>{node.title}</h4>
              </Col>

            </Row>
          // </Sensor>

        )}
          {/* <Row>
          { displayedUpdates.map(({node}) => (
              <Col key={node.id} md={6} className="flex-column py-1">
                { node.image &&
                  <Img
                    fluid={node.image.childImageSharp.fluid}
                    alt={node.image.name}
                    style={{ height: `50vh`, width: `100%`, objectFit: "contain" }}
                  />
                }

                <div className="py-1">
                  <p className="text-info">{node.date}</p>
                  <h4>{node.title}</h4>
                </div>
              </Col>
            ))}
          </Row> */}

      </Container>

    </Layout>
  )

}
