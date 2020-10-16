import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { Container, CardDeck, Card, Row, Col, Form, Spinner, Carousel } from 'react-bootstrap'
import debounce from 'lodash/debounce'

import CarouselGallery from '../components/carousel-gallery'
import Layout from "../components/layout"
import SEO from "../components/seo"
// import TextContent from './text-content'
// import CardGlow from './card-glow'


export const query = graphql`
  query {
    allFeaturedYaml {
      edges {
        node {
          id
          title
          slug
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allGalleriesYaml {
      edges {
        node {
          id
          title
          slug
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`



export default function MediaPage({ data }) {

  const cardStyles = {
    border: `none`,
    boxShadow: `0 0 2px 2px white`,
  }

  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState(0)
  const [searching, setSearching] = useState(false)

  const filterOptions = [
    "Most Recent",
    "Alphabetical A-Z"
  ]



  useEffect(() => {

    console.log("useEffect", searchQuery)

    const searchDebounced = debounce(() => {
      console.log("search", searchQuery)
      if (searchQuery) {
        setSearching(true)
      } else {
        setSearching(false)
      }
    }, 1000)

    searchDebounced()

    return searchDebounced.cancel

  }, [searchQuery])


  return (
    <Layout>
      <SEO title="Media" />

      {/* <CarouselGallery items={items} /> */}
      <Carousel interval={null}>
        { data.allFeaturedYaml.edges.map(({node}) => (
          <Carousel.Item key={node.id} className="item-gradient">
            <Img
              fluid={node.cover.childImageSharp.fluid}
              style={{ width: `100%`, height: `100vh`}}
              imgStyle={{ opacity: `0.8` }}
            />
            <Carousel.Caption>
              <h3>{node.title}</h3>
              <br />
            </Carousel.Caption>
            <Link to={node.slug} className="stretched-link" />
          </Carousel.Item>
        ))}
      </Carousel>


      <Container>
        {/* <TextContent title="All galleries">
        </TextContent> */}
        <h1 className="text-center my-5">
          All galleries
        </h1>

        <Form className="mb-2">
          <Form.Row>

            <Form.Group as={Col} controlId="formSearch" md={8}>
              <Form.Label>Search galleries</Form.Label>
              <Form.Control
                placeholder="Type your search query here"
                // pattern="[a-zA-Z]{2,}"
                name="searchQuery"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formSelect" md={4}>
              <Form.Label>Filter</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setFilter(e.target.value)}
                name="filter"
                value={filter}
                custom
                >
                  { filterOptions.map( (filter, ind) => (
                    <option value={ind} key={ind}>{filter}</option>
                  ))}
                </Form.Control>
              </Form.Group>

          </Form.Row>
        </Form>

        <br />
        { searching && (
          <div className="text-center w-100">
            <Spinner animation="border" role="status" variant="primary">
              <span className="sr-only">Searching...</span>
            </Spinner>
          </div>
        ) }
        <br />



        <Row>
          {  data.allGalleriesYaml.edges.map(({node}) => (

            <Col key={node.id} md={4} className="mb-4">
              <Card text="white" className="h-100" style={cardStyles}>
                <Img
                  fluid={node.cover.childImageSharp.fluid}
                  style={{ width: `100%`, height: `50vh`}}
                  imgStyle={{ objectFit: `cover` }}
                />
                <Card.Body className="text-center">
                  <Card.Title>
                      {node.title}
                    </Card.Title>
                  </Card.Body>
                  <Link to={node.slug} className="stretched-link"></Link>
                </Card>
            </Col>

          )) }

          {/* {  galleries.map( (gallery, ind) => (

            <Col key={ind} md={4} className="mb-4">
              <Card text="white" className="h-100" style={cardStyles}>
                <Card.Img
                  variant="top"
                  src={gallery.imgSrc}
                  style={{ objectFit: `cover`, height: `50vh` }}
                />
                <Card.Body className="text-center">
                  <Card.Title>
                      {gallery.title}
                    </Card.Title>
                  </Card.Body>
                  <Link to={gallery.link} className="stretched-link"></Link>
                </Card>
            </Col>

          )) } */}
        </Row>

        {/* <CardDeck>
          { galleries.map((gallery, ind) => (
            <CardGlow
              key={`cardDeck_${ind}`}
              title={gallery.title}
              imgSrc={gallery.imgSrc}
              link={gallery.link}
             />
          ))}
        </CardDeck> */}

      </Container>

    </Layout>
  )


}
