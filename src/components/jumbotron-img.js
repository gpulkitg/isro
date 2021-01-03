import React, { useState, useRef } from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'
// import VisibilitySensor from 'react-visibility-sensor'


export default function JumbotronImg(props) {

  const {
    // imgSrc,
    // imgAlt="",
    title,
    subtitle,
    description,
    button,
    link,
    horizontalPosition,
    verticalPosition,
    textAlignment,
    // isVisible,
    children,
  } = props

  // const [animated, setAnimated] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleVisibilityChange = (isVisible) => {
    console.log("isVisible", isVisible);
    // if (isVisible && !animated) {
    //   setAnimated(true)
    // }
    setVisible(isVisible)
  }

  const contentRef = useRef(null)


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

  function getTextAlignmentClasses() {
    let classes = ``

    if (textAlignment === "center") {
      classes = `text-center`
    } else if (textAlignment === "right") {
      classes = `text-right`
    }
    return classes
  }



  return (

    <div className="jumbotron jumbotron-container">

      { children }

      {/* <VisibilitySensor onChange={handleVisibilityChange}>
      ${visible && "animate-bottom"}`} ref={contentRef}>
      </VisibilitySensor> */}

        <Container className="lead">
          <Row className={`vh-100 ${getHorizontalPositionClasses()}`}>
            <Col lg={6} md={8} className={`d-flex flex-column ${getVerticalPositionClasses()} ${getTextAlignmentClasses()} py-4`}>
              { title && <h1 className="mb-2 display-4">{title}</h1> }
              { subtitle && <h3 className="mb-2">{subtitle}</h3> }
              { description && <p className="mb-2 text-justify">{description}</p> }
              { button &&
                <div>
                  <Button href={link} variant="outline-light" className="btn-jumbotron">{button}</Button>
                </div>
              }
            </Col>
          </Row>
        </Container>




    </div>

    // <div className="jumbotron jumbotron-container">
    //
    //   <img src={imgSrc} alt={imgAlt} />
    //
    //   <Container className="lead">
    //     <Row className={`vh-100 ${getHorizontalPositionClasses()}`}>
    //       <Col lg={6} md={8} className={`d-flex flex-column ${getVerticalPositionClasses()} ${getTextAlignmentClasses()}`} style={{ paddingTop: `4rem`, paddingBottom: `4rem` }}>
    //         {children}
    //       </Col>
    //     </Row>
    //   </Container>
    //
    // </div>


    // <Jumbotron
    //   className="vh-100 rounded-0 mb-0 p-0"
    //   style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: `50% 50%`,  }} >
    //
    //   <Container>
    //     <Row className={`vh-100 ${getHorizontalPositionClasses()}`}>
    //       <Col lg={6} md={8} className={`d-flex flex-column ${getVerticalPositionClasses()} ${getTextAlignmentClasses()}`} style={{ paddingTop: `4rem`, paddingBottom: `4rem` }}>
    //         {children}
    //       </Col>
    //     </Row>
    //   </Container>
    //
    // </Jumbotron>

  )


}
