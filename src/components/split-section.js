import React, { useState } from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'
// import VisibilitySensor from 'react-visibility-sensor'

import TableVersatile from './table-versatile'



export default function SplitSection(props) {

  const { title, subtitle, description, table, button, link, textPosition, textAlignment, children } = props


  // const [visible, setVisible] = useState(false)
  // const handleVisibilityChange = (isVisible) => {
  //   setVisible(isVisible)
  // }


  const getTextClasses = () => {
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
    <Container>
      <Row>

        <Col className="split-section-img-wrapper order-md-1" md>
          { children }
        </Col>

        <Col
          className={`d-flex flex-column justify-content-center ${getTextClasses()}`}
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-easing="easeOutCirc"
          md
          >

          {/* <VisibilitySensor active={!visible} onChange={handleVisibilityChange} partialVisibility> */}

            {/* <div className={visible ? "animate-appear-slow" : "opacity-zero"}> */}
              { title && <h1 className="mb-2 display-4">{title}</h1> }
              { subtitle && <h3 className="mb-2">{subtitle}</h3> }
              { description && <p className="mb-2 text-left">{description}</p> }
              { table && <TableVersatile data={table} /> }
              { button &&
                <div className="mb-2">
                  <Button href={link} variant="outline-light" className="btn-jumbotron">{button}</Button>
                </div>
              }
            {/* </div> */}

          {/* </VisibilitySensor> */}
        </Col>

      </Row>
    </Container>



  )
}
