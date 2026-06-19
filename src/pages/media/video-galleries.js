import React, { useState, useEffect } from "react"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import debounce from 'lodash/debounce'

import { Container, Row, Col, Form } from 'react-bootstrap'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import VideoPlayer from '../../components/video-player'
import Separator from '../../components/separator'
import CardVideo from '../../components/card-video'
import CardBrighten from '../../components/card-brighten'


export const query = graphql`
  query {
    allGalleriesVideoYaml {
      edges {
        node {
          id
          title
          poster {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
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


  const [searchQuery, setSearchQuery] = useState("")
  // const [allGalleries, setAllGalleries] = useState([])
  const [displayedVideoGalleries, setDisplayedVideoGalleries] = useState([])

  const [showModalVideoPlayer, setShowModalVideoPlayer] = useState(false)
  const [currentVideo, setCurrentVideo] = useState({
    publicURL: "",
    title: ""
  })


  const showVideo = (n) => {
    setCurrentVideo({
      publicURL: n.video.publicURL,
      title: n.title
    })
    setShowModalVideoPlayer(true)
  }

  useEffect(() => {

    const search = debounce(() => {
      const videoMatches = data.allGalleriesVideoYaml.edges.filter(({ node }) => (
        node.title.toLowerCase().includes(searchQuery.toLowerCase())
      ))
      setDisplayedVideoGalleries(videoMatches)
    }, 500)

    if (searchQuery) {
      search()
    } else {
      setDisplayedVideoGalleries(data.allGalleriesVideoYaml.edges)
    }

    return search.cancel

  }, [searchQuery])




  return (

    <Layout>
      <SEO title="Media" />

      <Container>

        <Separator />
        <h2 className="text-center mb-2">All Video Galleries</h2>

        <Form className="mb-2">
          <Form.Row>

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

          </Form.Row>
        </Form>


        <Row>
          { displayedVideoGalleries.length > 0 && displayedVideoGalleries.map(({node}) => (

            <Col key={node.id} lg={4} md={6} className="mb-2" >
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
