import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TableList from './table-list'

export default function SplitSectionTable({  title, subtitle, description, table, textPosition, textAlignment, children }) {

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

    <Container>
      <Row>

        <Col className="vh-100 d-flex justify-content-center py-2 order-md-1" md>
          { children }
        </Col>

        <Col className={`d-flex flex-column justify-content-center ${getTextClasses()}`} md>
          { title && <h1 className="mb-2 display-4">{title}</h1> }
          { subtitle && <h3 className="mb-2">{subtitle}</h3> }
          { description && <p className="mb-2">{description}</p> }
          { table && <TableList data={table} /> }
        </Col>

      </Row>
    </Container>


  )
}
