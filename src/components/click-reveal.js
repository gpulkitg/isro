import React, { useContext } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import AccordionContext from 'react-bootstrap/AccordionContext'
import { ChevronDown } from 'react-bootstrap-icons'


const CustomToggle = ({ children, eventKey }) => {
  const currentEventKey = useContext(AccordionContext)

  return (
    <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
      {children}
      <ChevronDown className={`icon ${currentEventKey === eventKey && `rotated` }`} />
    </Accordion.Toggle>
  )
}


export default function ClickReveal({ contents }) {

  return (
    <Accordion>
      { contents.map((content, index) => (
        <Card key={index}>
          <CustomToggle eventKey={index}>
            {content.header}
          </CustomToggle>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>
              {content.body}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  )

}
