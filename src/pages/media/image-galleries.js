import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import debounce from 'lodash/debounce'

import { Container, Row, Col, Form, Spinner } from 'react-bootstrap'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Separator from '../../components/separator'
import CardBrighten from '../../components/card-brighten'


export const query = graphql`
  query {
    allGalleriesImageYaml(sort: {fields: dateAdded, order: DESC}) {
      edges {
        node {
          id
          title
          slug
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
  }
`



export default function MediaPage({ data }) {

  const [searchQuery, setSearchQuery] = useState("")
  // const [searching, setSearching] = useState(false)
  // const [allGalleries, setAllGalleries] = useState([])
  const [displayedImageGalleries, setDisplayedImageGalleries] = useState([])


  useEffect(() => {

    const search = debounce(() => {
      const imageMatches = data.allGalleriesImageYaml.edges.filter(({ node }) => (
        node.title.toLowerCase().includes(searchQuery.toLowerCase())
      ))
      setDisplayedImageGalleries(imageMatches)
      // setSearching(false)
    }, 500)

    if (searchQuery) {
      search()
      // setSearching(true)
    } else {
      // setSearching(false)
      setDisplayedImageGalleries(data.allGalleriesImageYaml.edges)
    }

    return search.cancel

  }, [searchQuery])


  return (
    <Layout>
      <SEO title="Media" />

      <Container>


        <Separator />
        <h2 className="text-center mb-2">All Image Galleries</h2>


        <Form className="mb-2">
          <Row className="g-2">

            <Form.Group as={Col} controlId="formSearch">
              {/* <Form.Label>Search galleries</Form.Label> */}
              <Form.Control
                placeholder="Type to search"
                // pattern="[a-zA-Z]{2,}"
                name="searchQuery"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </Form.Group>

          </Row>
        </Form>


        <Row>
          {/* <div className="text-center w-100 mb-2">
            { searching &&
                <Spinner animation="border" role="status" variant="primary">
                  <span className="sr-only">Searching...</span>
                </Spinner>
            }
          </div> */}

          { displayedImageGalleries.length > 0 && displayedImageGalleries.map( ({ node }) =>
            <Col key={node.id} lg={4} md={6} className="mb-2">
              <CardBrighten
                title={node.title}
                link={node.slug}
              >
                <Img
                  fluid={node.image.childImageSharp.fluid}
                  alt={node.image.name}
                  className="card-brighten-img"
                />
              </CardBrighten>
              </Col>
          )}
        </Row>




      </Container>


    </Layout>
  )


}
