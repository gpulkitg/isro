import React, { useState } from 'react'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import { Container, Figure, Button , Row, Col, Carousel} from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
// import JumbotronVideo from '../components/jumbotron-video'
import JumbotronImg from '../components/jumbotron-img'
import TextContent from '../components/text-content'
// import CarouselSection from '../components/carousel-section'
import TableList from '../components/table-list'
// import SplitSection from '../components/split-section'
// import FixBgSection from '../components/fix-bg-section'
import VideoPlayer from '../components/video-player'

import ii from "../images/launchers/gslv-mk-ii/gslv_f11_gsat_7a_1.jpg";

export const data = graphql`
  query($slug: String!) {
    launchersYaml(slug: {eq: $slug}) {
      slug
      seo {
        title
      }
      jumbotronImg {
          title
          subtitle
          image {
            name
            childImageSharp {
              fluid(quality: 100, maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      fixBgSection {
        image {
          publicURL
          name
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        contents {
          title
          subtitles {
            line
          }
        }
      }
      splitSection {
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        table {
          body {
            row {
              col
            }
          }
        }
      }
      textContent1 {
        title
        text
      }
      carouselSections {
        title
        description
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        table {
          body {
            row {
              col
            }
          }
        }
      }
      jumbotronVideo {
        video {
          publicURL
        }
        poster {
          name
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        videoFull {
          publicURL
        }
      }
      textContent2 {
        title
        text
        table {
          head {
            col
          }
          body {
            row {
              col
            }
          }
        }
      }
      figure {
        image {
          publicURL
          name
          extension
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        caption
      }

    }
  }
`






export default function Launcher({ data }) {

  const [showModalVideoPlayer, setShowModalVideoPlayer] = useState(false);

  const {
    seo,
    jumbotronImg,
    fixBgSection,
    splitSection,
    textContent1,
    carouselSections,
    jumbotronVideo,
    textContent2,
    figure
  } = data.launchersYaml

  return (
    <Layout>
      <SEO title={seo.title} />

      <div className="jumbotron jumbotron-container">
        <Img
          fluid={jumbotronImg.image.childImageSharp.fluid}
          alt={jumbotronImg.image.name}
          style={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}
          imgStyle={{ opacity: `0.8` }}
        />

        <Container className="lead">
          <Row className="vh-100 justify-content-center">
            <Col lg={6} md={8} className="d-flex flex-column justify-content-center text-center py-4">
              <h1 className="display-4">{jumbotronImg.title}</h1>
              <h2>{jumbotronImg.subtitle}</h2>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <JumbotronImg imgSrc={ii} horizontalPosition="center" verticalPosition="center" contentAlignment="center">
        <h1 className="mb-4 display-3">{jumbotronImg.title}</h1>
        <h2>{jumbotronImg.subtitle}</h2>
      </JumbotronImg> */}



      <BackgroundImage
        fluid={fixBgSection.image.childImageSharp.fluid}
        className="fix-bg"
        >
          <Container fluid>
            <Row className="vh-100 w-100 empty-view">
            </Row>

            { fixBgSection.contents.map( (content, ind) => (
              <Row className="fix-bg-overlay" key={`fixBgSection_${ind}`}>
                <Col className="d-flex flex-column justify-content-start text-center py-2" md>
                  <h1>{content.title}</h1>
                  { content.subtitles.map( ({line}, ind) => (
                    <h2 key={`subtitles_${ind}`}>{line}</h2>
                  ))}
                </Col>
              </Row>
            ))}
          </Container>
        </BackgroundImage>
        {/* <Container fluid className="fix-bg" style={{ backgroundImage: `url(${fixBgSection.image.publicURL})` }}>
          <Row className="vh-100 w-100 empty-view">
          </Row>

          { fixBgSection.contents.map( (content, ind) => (
            <Row className="fix-bg-overlay" key={`fixBgSection_${ind}`}>
              <Col className="d-flex flex-column justify-content-start text-center py-2" md>
                <h1>{content.title}</h1>
                { content.subtitles.map( ({line}, ind) => (
                  <h2 key={`subtitles_${ind}`}>{line}</h2>
                ))}
              </Col>
            </Row>
          ))}
        </Container> */}
      {/* <FixBgSection imgSrc={fixBgSection.imgSrc} contents={fixBgSection.contents} /> */}



      <Container>
        <Row>
          <Col className="vh-100 d-flex order-md-0 py-4" md>
            <Img
              fluid={splitSection.image.childImageSharp.fluid}
              alt={splitSection.image.name}
              className="h-100 w-100"
              imgStyle={{ objectFit: `contain`}}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center text-center order-md-1" md>
            <h1 className="mb-2">{splitSection.title}</h1>
            {/* <p className="mb-2">{splitSection.text}</p> */}
            <div className="mb-2 text-left">
              <TableList data={splitSection.table} />
            </div>
          </Col>
        </Row>
        {/* <SplitSection imgSrc={splitSection.imgSrc} imgObjectFit="contain">
          <h1 className="text-center">{splitSection.title}</h1>
          <div className="py-4">
            <TableList data={splitSection.tableData} />
          </div>
        </SplitSection> */}
      </Container>


      <TextContent title={textContent1.title}>
        <div dangerouslySetInnerHTML={{ __html: textContent1.text }} />
        {/* { textContent1.content.map((para, ind) => (
          <p key={`textContent1_${ind}`}>{para}</p>
        ))} */}
      </TextContent>


      <Carousel interval={null}>
        { carouselSections.map((section, ind) => (
          <Carousel.Item key={`carouselSections_${ind}`}>
            <Container>
              <Row>
                <Col className="vh-100 py-2" md>
                  <Img
                    fluid={section.image.childImageSharp.fluid}
                    alt={section.image.name}
                    className="h-100 w-100"
                    style={{ opacity: `0.8` }}
                  />
                </Col>
                <Col className="d-flex flex-column justify-content-center text-center" md>
                  <h2 className="mb-2">{section.title}</h2>
                  <p>{section.description}</p>
                  <div className="text-left">
                    <TableList data={section.table} />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* <CarouselSection items={carouselSectionItems} /> */}

      <div className="border vw-100">
        <video poster={jumbotronVideo.poster.publicURL} className="w-100 h-100" loop muted autoPlay controls={true} playsInline>
          <source src={jumbotronVideo.video.publicURL} type="video/mp4" />
          Your browser does not support video tag
        </video>
      </div>



      <div className="jumbotron jumbotron-container">
        {/* <Img
          fluid={jumbotronVideo.poster.childImageSharp.fluid}
          alt={jumbotronVideo.poster.name}
          style={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}
          imgStyle={{ opacity: `0.5` }}
        /> */}
        <video loop muted autoPlay playsInline>
          <source src={jumbotronVideo.video.publicURL} type="video/mp4" />
          Your browser does not support video tag
        </video>
        <Container>
          <Row>
            <Col className="vh-100 d-flex flex-column justify-content-center text-center">
              <h1 className="mb-2 display-4">{jumbotronVideo.title}</h1>
              <div>
                <Button variant="outline-light" className="btn-jumbotron" onClick={() => setShowModalVideoPlayer(true)}>WATCH FULL VIDEO</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <VideoPlayer
        videoSrcURL={jumbotronVideo.videoFull.publicURL}
        videoTitle={jumbotronVideo.title}
        show={showModalVideoPlayer}
        onHide={() => setShowModalVideoPlayer(false)}
       />
      {/* <JumbotronVideo videoSrc={jumbotronVideo.videoSrc}>
        <h1 className="mb-4 display-4">{jumbotronVideo.title}</h1>
        <div>
          <Button href="/about" variant="outline-light" className="btn-jumbotron">WATCH FULL VIDEO</Button>
        </div>
      </JumbotronVideo> */}



      <TextContent title={textContent2.title}>
        <TableList data={textContent2.table} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: textContent2.text }} />
        {/* { textContent2.content.map((para, ind) => (
          <p key={`textContent1_${ind}`}>{para}</p>
        ))} */}
      </TextContent>


      <Figure className="vh-100 w-100">
        { figure.image.extension === "svg" ? (
          <Figure.Image className="h-100 w-100" src={figure.image.publicURL} alt={figure.image.name} style={{ objectFit: `contain`, opacity: `0.8` }} />
        ) : (
          <Img
            fluid={figure.image.childImageSharp.fluid}
            className="h-100 w-100"
            imgStyle={{ opacity: `0.8` }}
          />
        )}
        <Figure.Caption className="text-center">{figure.caption}</Figure.Caption>
      </Figure>


    </Layout>



  )

}
