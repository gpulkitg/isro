import React, { useState, useEffect } from "react"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import debounce from 'lodash/debounce'

import { Container, CardDeck, Card, Row, Col, Form, Spinner, Carousel, Button } from 'react-bootstrap'

import CarouselGallery from '../components/carousel-gallery'
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoPlayer from '../components/video-player'
import Separator from '../components/separator'
import CardVideo from '../components/card-video'
import CardBrighten from '../components/card-brighten'
// import TextContent from './text-content'


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
    allImageGalleriesYaml {
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
    allVideoGalleriesYaml {
      edges {
        node {
          id
          title
          poster {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          video {
            publicURL
          }
        }
      }
    }
  }
`



export default function MediaPage({ data }) {

  // const cardStyles = {
  //   border: `none`,
  //   boxShadow: `0 0 1px 1px white`,
  // }

  const galleryTypes = [
    "Images",
    "Videos",
  ]

  const [searchQuery, setSearchQuery] = useState("")
  const [galleryType, setGalleryType] = useState(0)
  // const [displayedGalleries, setDisplayedGalleries] = useState([])
  // const [allGalleries, setAllGalleries] = useState([])
  const [displayedImageGalleries, setDisplayedImageGalleries] = useState([])
  const [displayedVideoGalleries, setDisplayedVideoGalleries] = useState([])

  const [showModalVideoPlayer, setShowModalVideoPlayer] = useState(false)
  const [currentVideo, setCurrentVideo] = useState({
    publicURL: "",
    title: ""
  })


  // const imageGalleries = data.allImageGalleriesYaml.edges
  // console.log("imageGalleries", imageGalleries);
  // const videoGalleries = data.allVideoGalleriesYaml.edges
  // console.log("videoGalleries", videoGalleries);

  // useEffect(() => {
  //   if (galleryType == 0) {
  //     console.log("set images", data.allImageGalleriesYaml.edges);
  //     setAllGalleries(imageGalleries)
  //   } else if (galleryType == 1) {
  //     console.log("set videos", data.allVideoGalleriesYaml.edges);
  //     setAllGalleries(videoGalleries)
  //   }
  // }, [galleryType])

  const showVideo = (n) => {
    setCurrentVideo({
      publicURL: n.video.publicURL,
      title: n.title
    })
    setShowModalVideoPlayer(true)
  }



  useEffect(() => {

    const search = debounce(() => {
      const imageMatches = data.allImageGalleriesYaml.edges.filter(({ node }) => (
        node.title.toLowerCase().includes(searchQuery.toLowerCase())
      ))
      const videoMatches = data.allVideoGalleriesYaml.edges.filter(({ node }) => (
        node.title.toLowerCase().includes(searchQuery.toLowerCase())
      ))
      setDisplayedImageGalleries(imageMatches)
      setDisplayedVideoGalleries(videoMatches)
    }, 500)

    if (searchQuery) {
      search()
    } else {
      setDisplayedImageGalleries(data.allImageGalleriesYaml.edges)
      setDisplayedVideoGalleries(data.allVideoGalleriesYaml.edges)
    }

    return search.cancel

  }, [searchQuery])


  return (
    <Layout>
      <SEO title="Media" />

      <Carousel interval={null} className="carousel-fade">
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


      <Separator title="All galleries" />
      <Container>

        <Form className="mb-2">
          <Form.Row>

            <Form.Group as={Col} controlId="formSearch" md={8}>
              <Form.Label>Search galleries</Form.Label>
              <Form.Control
                placeholder="Type to search"
                // pattern="[a-zA-Z]{2,}"
                name="searchQuery"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formSelect" md={4}>
              <Form.Label>Gallery Type</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setGalleryType(e.target.value)}
                name="galleryType"
                value={galleryType}
                custom
                >
                { galleryTypes.map( (type, ind) => (
                  <option value={ind} key={ind}>{type}</option>
                ))}
              </Form.Control>
            </Form.Group>

          </Form.Row>
        </Form>

        {/* <br />
        { searching && (
          <div className="text-center w-100">
            <Spinner animation="border" role="status" variant="primary">
              <span className="sr-only">Searching...</span>
            </Spinner>
          </div>
        ) }
        <br /> */}



        <Row>


          { galleryType == 0 && displayedImageGalleries.length > 0 && displayedImageGalleries.map(({node}) => (

            <Col key={node.id} md={4} className="mb-2">
              <CardBrighten
                title={node.title}
                link={node.slug}
              >
                <Img
                  fluid={node.cover.childImageSharp.fluid}
                  alt={node.cover.name}
                  className="card-brighten-img"
                />
              </CardBrighten>
              {/* <Card text="white" className="h-100" style={cardStyles}>
                <Img
                  fluid={node.cover.childImageSharp.fluid}
                  style={{ width: `100%`, height: `300px`}}
                  imgStyle={{ objectFit: `cover` }}
                />
                <Card.Body className="text-center">
                  <Card.Title>
                      {node.title}
                    </Card.Title>
                  </Card.Body>
                  <Link to={node.slug} className="stretched-link"></Link>
                </Card> */}
              </Col>
            ))
          }

          { galleryType == 1 && displayedVideoGalleries.length > 0 && displayedVideoGalleries.map(({node}) => (

            <Col key={node.id} md={4} className="mb-2" >
              <CardVideo
                title={node.title}
                onClick={() => showVideo(node)}
                >
                  <Img
                    fluid={node.poster.childImageSharp.fluid}
                    alt={node.poster.name}
                    className="card-brighten-img"
                  />
                </CardVideo>
              {/* )) : (
                <Col>
                  <h5 className="text-center">Sorry, no results found</h5>
                </Col> */}

            </Col>

          ))}


          <VideoPlayer
            srcUrl={currentVideo.publicURL}
            title={currentVideo.title}
            show={showModalVideoPlayer}
            onHide={() => setShowModalVideoPlayer(false)}
          />

        </Row>

      </Container>

    </Layout>
  )


}
