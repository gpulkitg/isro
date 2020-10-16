import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

import TableList from '../components/table-list'


export default function CarouselSection({ items }) {


  return (

    <Carousel interval={null}>

      { items.map((item, ind) => (

        <Carousel.Item key={ind}>
          <Container>
            <Row>
              <Col className="vh-100 py-4" md>
                <img
                  className="h-100 w-100"
                  src={item.image}
                  alt={item.alt}
                  style={{ objectFit: `cover`, opacity: `0.8` }}
                />
              </Col>
              <Col className="d-flex flex-column justify-content-center text-center" md>
                <h2 className="mb-4">{item.title}</h2>
                <p>{item.description}</p>
                <div className="text-left">
                  <TableList data={item.specs} />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}

    </Carousel>
  )
}
