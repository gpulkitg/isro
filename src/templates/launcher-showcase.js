import React, { useState } from 'react'
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import { Container, Figure, Button , Row, Col, Carousel, Table } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import JumbotronImg from '../components/jumbotron-img'
import TextContent from '../components/text-content'
import TableVersatile from '../components/table-versatile'
import SplitSection from '../components/split-section'
import VideoPlayer from '../components/video-player'
// import Sensor from '../components/sensor'


export const data = graphql`
  query($slug: String!, $launcherTypeRegex: String!) {
    launchersShowcaseYaml(slug: {eq: $slug}) {
      slug
      seo {
        title
      }
      jumbotronImg {
        title
        subtitle
        description
        link
        button
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        verticalPosition
        horizontalPosition
        textAlignment
      }
      splitSection {
        title
        subtitle
        description
        table {
          body {
            row {
              col {
                text
              }
            }
          }
        }
        textPosition
        textAlignment
        objectFit
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      fixBgSection {
        image {
          publicURL
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        table {
          body {
            row {
              col {
                text
              }
            }
          }
        }
      }
      jumbotronVideo {
        videoClip {
          publicURL
        }
        poster {
          name
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
        video {
          publicURL
        }
      }
      textContent2 {
        title
        text
      }
      figure {
        image {
          publicURL
          name
          extension
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        caption
      }
    }
    allMasterListYaml(filter: {launcherType: {regex: $launcherTypeRegex}}) {
      totalCount
      edges {
        node {
          id
          launcherName
          launcherLink
          launchDate(formatString: "D MMM YYYY")
          spacecraftName
          spacecraftLink
          launcherType
          orbitType
          remarks
        }
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
  } = data.launchersShowcaseYaml



  return (
    <Layout>
      <SEO title={seo.title} />

      { jumbotronImg && jumbotronImg.map((item, ind) => (
          <JumbotronImg
            key={`jumbotronImg_${ind}`}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            button={item.button}
            link={item.link}
            horizontalPosition={item.horizontalPosition}
            verticalPosition={item.verticalPosition}
            textAlignment={item.textAlignment}
          >
            <Img
              fluid={item.image.childImageSharp.fluid}
              alt={item.image.name}
              style={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}
              imgStyle={{ opacity: `0.7` }}
            />
          </JumbotronImg>
        ))}
      {/* <div className="jumbotron jumbotron-container">
        <Img
          fluid={jumbotronImg.image.childImageSharp.fluid}
          alt={jumbotronImg.image.name}
          style={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}
          imgStyle={{ opacity: `0.7` }}
        />

        <Container className="lead">
          <Row className="vh-100 justify-content-center">
            <Col lg={6} md={8} className="d-flex flex-column justify-content-center text-center py-4">
              <h1 className="display-4">{jumbotronImg.title}</h1>
              <h2>{jumbotronImg.subtitle}</h2>
            </Col>
          </Row>
        </Container>
      </div> */}




      <BackgroundImage
        fluid={fixBgSection.image.childImageSharp.fluid}
        className="fix-bg"
      >
        <Container fluid>
          <Row className="vh-100 w-100 empty-view">
          </Row>

          { fixBgSection.contents.map( (content, ind) => (
            <Row className="fix-bg-overlay" key={`fixBgSection_${ind}`}>
              <Col
                className="d-flex flex-column justify-content-start text-center py-2"
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="easeOutCirc"
                md>
                {/* <Sensor> */}
                <h1>{content.title}</h1>
                { content.subtitles.map( ({line}, ind) => (
                  <h3 key={`subtitles_${ind}`}>{line}</h3>
                ))}
                {/* </Sensor> */}
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


      { splitSection && splitSection.map((item, ind) => (
        <SplitSection
          key={`splitSection_${ind}`}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          table={item.table}
          textPosition={item.textPosition}
          textAlignment={item.textAlignment}
        >
          <Img
            fluid={item.image.childImageSharp.fluid}
            alt={item.image.name}
            className="h-100 w-100"
            imgStyle={{ objectFit: item.objectFit }}
          />
        </SplitSection>
      ))}
      {/* <Container>
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
            <div className="mb-2 text-left">
              <TableVersatile data={splitSection.table} />
            </div>
          </Col>
        </Row>
      </Container> */}


      <TextContent title={textContent1.title}>
        <div dangerouslySetInnerHTML={{ __html: textContent1.text }} />
      </TextContent>


      {/* <Sensor> */}
      <Carousel interval={null} className="carousel-fade">
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
                    <TableVersatile data={section.table} />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* </Sensor> */}


      <div className="jumbotron jumbotron-container">
        <video loop muted autoPlay playsInline>
          <source src={jumbotronVideo.videoClip.publicURL} type="video/mp4" />
          Your browser does not support video tag
        </video>
        <Container>
          <Row>
            <Col className="vh-100 d-flex flex-column justify-content-center text-center">
              <div
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="easeOutCirc"
                >
                <h1 className="mb-2 display-4">{jumbotronVideo.title}</h1>
                <div>
                  <Button variant="outline-light" className="btn-jumbotron" onClick={() => setShowModalVideoPlayer(true)}>WATCH FULL VIDEO</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <VideoPlayer
        srcUrl={jumbotronVideo.video.publicURL}
        title={jumbotronVideo.title}
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
        <div dangerouslySetInnerHTML={{ __html: textContent2.text }} className="mb-2" />
        <Table variant="dark" responsive>
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Launch Date</th>
              <th>Launcher Type</th>
              <th>Orbit Type</th>
              <th>Payload</th>
              <th>Remarks</th>
            </tr>
          </thead>

          <tbody>
            { data.allMasterListYaml.edges.map(({ node }, ind) => (
              <tr
                key={node.id}
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="easeOutCirc"
                >
                <td>{data.allMasterListYaml.totalCount - ind}</td>
                <td>
                  { node.launcherLink ? (
                    <Link to={node.launcherLink} className="no-underline">{node.launcherName}</Link>
                  ) : (
                    node.launcherName
                  )}
                </td>
                <td>{node.launchDate}</td>
                <td>{node.launcherType}</td>
                <td>{node.orbitType}</td>
                <td>
                  { node.spacecraftLink ? (
                    <Link to={node.spacecraftLink} className="no-underline">{node.spacecraftName}</Link>
                  ) : (
                    node.spacecraftName
                  )}
                </td>
                <td>{node.remarks}</td>
              </tr>
            ))}
          </tbody>
        </Table>

      </TextContent>


      {/* <Sensor> */}
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
      {/* </Sensor> */}


    </Layout>



  )

}
