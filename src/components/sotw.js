import React, { useState } from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'
// import VisibilitySensor from 'react-visibility-sensor'



export default function Sotw({ title, description, link, children }) {

  // const [animated, setAnimated] = useState(false)
  // const [visible, setVisible] = useState(false)
  // const [visibleDesc, setVisibleDesc] = useState(false)
  //
  // const handleOnChange = (isVisible) => {
  //   setVisible(isVisible)
  // }
  // const handleOnChangeDesc = (isVisibleDesc) => {
  //   setVisibleDesc(isVisibleDesc)
  // }


  return (
    <Container>
      {/* <h2 className="mb-4 text-center display-4">Story of the week</h2> */}
      <Row className="mb-2">

        {/* <Col className="my-auto" lg={3}>
          <VisibilitySensor active={!visible} onChange={handleOnChange} partialVisibility>
            <div className={visible ? "animate-appear": "opacity-zero"}>
              <h4 className="display-4">Story of the week</h4>
            </div>
          </VisibilitySensor>
        </Col> */}
        <Col
          className="my-auto"
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-easing="easeOutCirc"
          lg={3}
          >
          <div>
            <h4 className="display-4">Story of the week</h4>
          </div>
        </Col>

        { children &&
          <Col className="d-flex justify-content-center" lg md={6}>
            {children}
          </Col>
        }

        <Col
          className="d-flex flex-column justify-content-center py-2"
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-easing="easeOutCirc"
          lg md={6}
          >
            <div>
              { title && <h5 className="mb-2">{title}</h5> }
              { description &&
                <p className="mb-2">
                  {description}
                </p>
              }
              { link &&
                <div>
                  <Button href={link} variant="outline-light" className="btn-jumbotron">
                    Read more
                  </Button>
                </div>
              }
            </div>
        </Col>

        {/* <Col className="d-flex flex-column justify-content-center py-2" lg md={6}>
          <VisibilitySensor active={!visibleDesc} onChange={handleOnChangeDesc} partialVisibility>
            <div className={visibleDesc ? "animate-appear" : "opacity-zero"}>
              { title && <h5 className="mb-2">{title}</h5> }
              { description &&
                <p className="mb-2">
                  {description}
                </p>
              }
              { link &&
                <div>
                  <Button href={link} variant="outline-light" className="btn-jumbotron">
                    Read more
                  </Button>
                </div>
              }
            </div>
          </VisibilitySensor>
        </Col> */}

      </Row>

    </Container>
  )
}
