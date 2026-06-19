import React, { useState } from "react"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, Card } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoPlayer from '../components/video-player'
import Separator from '../components/separator'
import CardVideo from '../components/card-video'
import CardBrighten from '../components/card-brighten'


export const query = graphql`
  query {
    allGalleriesImageYaml(sort: {fields: dateAdded, order: DESC}, limit: 5) {
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
    allGalleriesVideoYaml(limit: 5) {
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
    allPublicationsPagesYaml(limit: 5) {
      edges {
        node {
          id
          title
          slug
          cover {
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
  }
`

const SeeAllCard = ({ link }) => (
  <Card className="card-brighten">
    <Card.Body className="h-100 d-flex flex-column align-items-center justify-content-center">
      <div><h4>SEE ALL</h4></div>
    </Card.Body>
    <Link to={link} className="stretched-link" />
  </Card>
)


export default function MediaPage({ data }) {

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




  return (
    <Layout>
      <SEO title="Media" />


      <Container>

        <Separator />
        <h2 className="text-center mb-2">Image Galleries</h2>

        <Row>
          { data.allGalleriesImageYaml.edges.map( ({ node }) =>
            <Col key={node.id} lg={4} md={6} className="mb-2"
              // data-sal="fade"
              // data-sal-duration="1000"
              // data-sal-easing="easeOutCirc"
              >
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
          <Col lg={4} md={6} className="mb-2">
            <SeeAllCard link="/media/image-galleries" />
          </Col>
        </Row>
        {/* <div className="mb-2 text-left">
          <Button href="/media/image-galleries" variant="outline-light" className="btn-jumbotron">SEE ALL</Button>
        </div> */}


        <Separator title="Video Galleries" />
        {/* <h2 className="text-center mb-2">Video Galleries</h2> */}

        <Row>
          { data.allGalleriesVideoYaml.edges.map(({node}) =>
            <Col key={node.id} lg={4} md={6} className="mb-2"
              // data-sal="fade"
              // data-sal-duration="1000"
              // data-sal-easing="easeOutCirc"
              >
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
            </Col>
          )}
          <Col lg={4} md={6} className="mb-2">
            <SeeAllCard link="/media/video-galleries" />
          </Col>

          <VideoPlayer
            srcUrl={currentVideo.publicURL}
            title={currentVideo.title}
            show={showModalVideoPlayer}
            onHide={() => setShowModalVideoPlayer(false)}
          />

        </Row>



        <Separator title="Publications" />
        {/* <h2 className="text-center mb-2">Publications</h2> */}

        <Row>
          { data.allPublicationsPagesYaml.edges.map(({ node }) => (
            <Col key={node.id} lg={4} md={6} className="mb-2"
              // data-sal="fade"
              // data-sal-duration="1000"
              // data-sal-easing="easeOutCirc"
              >
              <CardBrighten
                title={node.title}
                link={node.slug}
              >
                <Img
                  fluid={node.cover.image.childImageSharp.fluid}
                  alt={node.cover.image.name}
                  className="card-brighten-img"
                />
              </CardBrighten>
            </Col>
          ))}
          <Col lg={4} md={6} className="mb-2">
            <SeeAllCard link="/publications" />
          </Col>
          {/* <Col md={3} className="mb-2">
            <CardBrighten
              title="See all"
              link="/publications"
            />
          </Col> */}
        </Row>


      </Container>






    </Layout>
  )


}
