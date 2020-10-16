import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export default function FixBgSection({ imgSrc, contents }) {

  const bgStyles = {
    backgroundImage: `url(${imgSrc})`
  }

  return (

    <Container fluid className="fix-bg" style={bgStyles}>

      <Row className="vh-100 w-100">
      </Row>

      { contents.map( (content, index) => (

        <Row className="vh-100 justify-content-center" key={index}>
          <Col className="d-flex flex-column justify-content-start text-center" md>
            <h1>{content.title}</h1>
            { content.subtitles.map( (subtitle, ind) => (
              <h2 key={ind}>{subtitle}</h2>
            ))}
          </Col>
        </Row>
      ))}


      {/* <Row className="vh-100 justify-content-center">
        <Col className="d-flex flex-column justify-content-start text-center" md>
          <div className="jumbotron-img-title">
            8000 kg
          </div>
          <div className="jumbotron-img-title">
            Payload<br />Low Earth Orbit
          </div>
          <div className="jumbotron-img-text">
          The powerful cryogenic stage enables placing heavy payloads into Low Earth Orbits of 600 km altitude.
        </div>
        </Col>
      </Row> */}

    </Container>


  )
}
