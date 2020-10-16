import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'


export default function JumbotronVideo({ videoSrc, fallbackImgSrc, children }) {

  return (

    <div className="jumbotron jumbotron-container">

      <video poster={fallbackImgSrc} loop muted autoPlay>
        <source src={videoSrc} type="video/mp4" />
      </video>


      <Container>
        {/* <Row className="vh-100 align-items-center justify-content-center">
          <Col className="text-center">
            {children}
          </Col>
        </Row> */}
        <Row>
          <Col className="vh-100 d-flex flex-column justify-content-center text-center">
            {children}
          </Col>
        </Row>
      </Container>
    </div>


    // <video id="jumbotron-video-background" preload muted autoplay loop>
    //   <source src={videoSrc} type="video/mp4" />
    //   <source src={videoSrc} type="video/ogg" />
    //   <h3 className="text-white">Your browser does not support the video tag</h3>
    // </video>

    // <video className="video-player" height="100%" width="100%" loop muted autoPlay>

    // {/* <div className="video">
    //     <iframe
    //       src={videoSrc}
    //       title="GSLV MkIII"
    //       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //       frameBorder="0"
    //       webkitallowfullscreen="true"
    //       mozallowfullscreen="true"
    //       allowFullScreen
    //     />
    // </div> */}


  )

}
