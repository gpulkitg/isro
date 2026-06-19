import React from 'react'

import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
// import VisibilitySensor from 'react-visibility-sensor'


export default function ListItems({ list }) {

  return (

    <Container>
      <Row>
        { list.map( (set, ind) =>

          <Col key={`list_${ind}`} sm>
              <div className="py-1">
                { set.title && <h3 className="mb-2">{set.title}</h3> }

                <ListGroup variant="flush">
                  { set.content.map( (item, i) =>
                    <ListGroup.Item
                      key={`${ind}_${i}`}
                      action href={item.link}
                      data-sal="slide-up"
                      data-sal-duration="1000"
                      data-sal-easing="easeOutCirc"
                      >
                      {item.text}
                      <ChevronRight style={{ float: `right`}}/>
                    </ListGroup.Item>
                    // <ItemWithSensor item={item}  />
                  )}
                </ListGroup>

              </div>
          </Col>
        )}
      </Row>
    </Container>

  //   <div className="py-1">
  //
  //     <h3 className="mb-2">{list.title}</h3>
  //
  //     <ListGroup variant="flush">
  //       { list.contents.map( (item, index) => (
  //         <ListGroup.Item action href={item.slug} key={`${list.title}_${index}`}>
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


// const ItemWithSensor = ({ item }) => {
//   const [animated, setAnimated] = useState(false)
//   const [visible, setVisible] = useState(false)
//
//   const handleVisibilityChange = (isVisible) => {
//     if (isVisible && !animated) {
//       setAnimated(true)
//     }
//     setVisible(isVisible)
//   }
//
//   return (
//     <VisibilitySensor active={!animated} onChange={handleVisibilityChange} partialVisibility>
//       <ListGroup.Item action href={item.link} className={visible ? "animate-slideup": "opacity-zero"}>
//         {item.text}
//         <ChevronRight style={{ float: `right`}}/>
//       </ListGroup.Item>
//     </VisibilitySensor>
//
//   )
//
// }
