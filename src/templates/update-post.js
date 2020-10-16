import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'



export default function UpdatePost({ post }) {

  const { imgSrc, alt, title, date } = post

  return (
    <Container className="mb-4">
      <Row>
        <Col md>
          <img
            src={imgSrc}
            style={{ height: `100%`, width: `100%`, objectFit: "contain" }}
            alt={alt} />
          </Col>

          <Col className="py-4" md>
            <p className="text-info">{date}</p>
            <h3>{title}</h3>
            {/* <p className="text-info"><em>Posted on {date}</em></p> */}
          </Col>

        </Row>
      </Container>
  )
}
