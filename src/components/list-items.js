import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { ChevronRight } from 'react-bootstrap-icons'


export default function ListItems({ items }) {
  return (

    <div>

      <h3 className="mb-4">{items.title}</h3>

      <ListGroup variant="flush">
        { items.contents.map( (item, index) => (
          <ListGroup.Item action href={item.slug} key={index}>
            {item.text}
            <ChevronRight style={{ float: `right`}}/>
          </ListGroup.Item>
        ))}
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>

  </div>

  )
}
