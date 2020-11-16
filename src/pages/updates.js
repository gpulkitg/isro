import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import debounce from 'lodash/debounce'

import { Container, Row, Col, Form } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
// import UpdatePost from '../templates/update-post'



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
                ...GatsbyImageSharpFluid
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
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


export default function Updates({ data }) {

  const [searchQuery, setSearchQuery] = useState("")
  const [displayedUpdates, setDisplayedUpdates] = useState([])


  useEffect(() => {

    const search = debounce(() => {
      const matches = data.allUpdatesYaml.edges.filter(({ node }) => (
        node.title.toLowerCase().includes(searchQuery.toLowerCase())
      ))
      setDisplayedUpdates(matches)
    }, 500)

    if (searchQuery) {
      search()
    } else {
      setDisplayedUpdates(data.allUpdatesYaml.edges)
    }

    return search.cancel

  }, [searchQuery])




  return (
    <Layout>

      <SEO title="Updates" />

      <div className="w-100" style={{ height: `50vh`, position: `relative`}}>
        <Img
          fluid={data.cover.childImageSharp.fluid}
          alt={data.cover.name}
          className="w-100 h-100"
          imgStyle={{ opacity: `0.5` }}
        />
        <h1 className="text-center" style={{ position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }}>
          Archive of Updates
        </h1>
      </div>

      <div className="my-2"></div>

      <Container>

        <Form className="mb-2">
          <Form.Row className="d-flex justify-content-center">
            <Form.Group as={Col} controlId="formSearch" sm={6}>
              {/* <Form.Label>Search galleries</Form.Label> */}
              <Form.Control
                placeholder="Type to search"
                name="searchQuery"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </Form.Group>
          </Form.Row>
        </Form>


        {/* { displayedUpdates.map(({node}) => (
          <Row className="py-2" key={node.id}>
            <Col md>
              { node.image &&
                <Img
                  fluid={node.image.childImageSharp.fluid}
                  alt={node.image.name}
                  style={{ height: `100%`, width: `100%`, objectFit: "contain" }}
                />
              }
              </Col>

              <Col className="py-2" md>
                <p className="text-info">{node.date}</p>
                <h3>{node.title}</h3>
              </Col>

            </Row>
          ))} */}
          <Row>
          { displayedUpdates.map(({node}) => (
              <Col key={node.id} md={6} className="d-flex flex-column py-1">
                { node.image &&
                  <Img
                    fluid={node.image.childImageSharp.fluid}
                    alt={node.image.name}
                    style={{ height: `50vh`, width: `100%`, objectFit: "contain" }}
                  />
                }

                <div className="py-1">
                  <p className="text-info">{node.date}</p>
                  <h3>{node.title}</h3>
                </div>
              </Col>
            ))}
          </Row>

      </Container>

    </Layout>
  )

}
