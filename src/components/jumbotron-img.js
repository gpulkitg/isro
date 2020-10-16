import React from 'react'

import { Jumbotron, Container, Row, Col } from 'react-bootstrap'


export default function JumbotronImg({ imgSrc, imgAlt="", horizontalPosition, verticalPosition, contentAlignment, children }) {


  function getHorizontalPositionClasses() {
    let classes = ``

    if (horizontalPosition === "center") {
      classes = `justify-content-center`
    } else if (horizontalPosition === "right") {
      classes = `justify-content-end`
    }
    return classes
  }


  function getVerticalPositionClasses() {
    let classes = ``

    if (verticalPosition === "center") {
      classes = `justify-content-center`
    } else if (verticalPosition === "bottom") {
      classes = `justify-content-end`
    }
    return classes
  }

  function getContentAlignmentClasses() {
    let classes = ``

    if (contentAlignment === "center") {
      classes = `text-center`
    } else if (contentAlignment === "right") {
      classes = `text-right`
    }
    return classes
  }




  return (

    <div className="jumbotron jumbotron-container">

      <img src={imgSrc} alt={imgAlt} />

      <Container className="lead">
        <Row className={`vh-100 ${getHorizontalPositionClasses()}`}>
          <Col lg={6} md={8} className={`d-flex flex-column ${getVerticalPositionClasses()} ${getContentAlignmentClasses()}`} style={{ paddingTop: `4rem`, paddingBottom: `4rem` }}>
            {children}
          </Col>
        </Row>
      </Container>

    </div>


    // <Jumbotron
    //   className="vh-100 rounded-0 mb-0 p-0"
    //   style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: `50% 50%`,  }} >
    //
    //   <Container>
    //     <Row className={`vh-100 ${getHorizontalPositionClasses()}`}>
    //       <Col lg={6} md={8} className={`d-flex flex-column ${getVerticalPositionClasses()} ${getContentAlignmentClasses()}`} style={{ paddingTop: `4rem`, paddingBottom: `4rem` }}>
    //         {children}
    //       </Col>
    //     </Row>
    //   </Container>
    //
    // </Jumbotron>

  )


}
