import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export default function SplitSection({ imgSrc, imgObjectFit, textPosition, textAlignment, children }) {

  function getTextClasses() {
    let classes = "order-md-2"
    if (textPosition === "left") {
      classes = "order-md-0"
    }

    if (textAlignment === "center") {
      classes += " text-center"
    } else if (textAlignment === "right") {
      classes += " text-right"
    }

    return classes
  }


  return (
    <>

    {/* <Container> */}
      <Row>

        <Col className="vh-100 d-flex justify-content-center p-2 order-md-1" md>
          <img
            src={imgSrc}
            style={{ height: `100%`, width: `100%`, objectFit: imgObjectFit }}
            alt="Section image" />
        </Col>

        <Col className={`d-flex flex-column justify-content-center ${getTextClasses()}`} md>
          {children}
        </Col>

      </Row>
    {/* </Container> */}

    </>


  )
}
