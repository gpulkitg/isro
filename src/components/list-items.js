import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'


export default function ListItems({ items }) {
  return (

    <Container>
      <Row>
        { items.map( (item, ind) => (
          <Col key={`listItems_${ind}`} sm>
            <div className="py-1">
              { item.title && <h3 className="mb-2">{item.title}</h3> }
              <ListGroup variant="flush">
                { item.contents.map( (el, i) => (
                  <ListGroup.Item action href={el.link} key={`${item.title}_${i}`}>
                    {el.text}
                    <ChevronRight style={{ float: `right`}}/>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        ))}
      </Row>
    </Container>




  //   <div className="py-1">
  //
  //     <h3 className="mb-2">{items.title}</h3>
  //
  //     <ListGroup variant="flush">
  //       { items.contents.map( (item, index) => (
  //         <ListGroup.Item action href={item.slug} key={`${items.title}_${index}`}>
  //           {item.text}
  //           <ChevronRight style={{ float: `right`}}/>
  //         </ListGroup.Item>
  //       ))}
  //       <ListGroup.Item></ListGroup.Item>
  //     </ListGroup>
  //
  //  </div>

  )
}
