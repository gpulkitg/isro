import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Tabs, Tab, Row, Col, Container, ListGroup } from 'react-bootstrap'


export default function TabSection({ items }) {

  return (
    <Container>
      <Tabs
        defaultActiveKey="0"
        className="text-center"
        >
          { items.map((item, ind) => (
            <Tab eventKey={ind} key={`tabSection_${ind}`} title={item.title}>
              <Container className="py-2">
                <Row>
                  { item.content.map((el, i) => (
                    <Col md={4} key={`${item.title}_${i}`} className="p-1">
                      <div className="border-left p-1">
                        <Link to={el.link} className="no-underline">{el.text}</Link>
                      </div>
                    </Col>
                  ))}

                </Row>
                {/* <ul>
                  { item.content.map((el, i) => (
                  <li key={`${item.title}_${i}`}>
                  <Link to={el.slug}>{el.text}</Link>
                </li>
              ))}
            </ul> */}

            </Container>
          </Tab>
        ))}

      </Tabs>

    </Container>

    // <Tab.Container id="tab-pane" defaultActiveKey="0">
    //   <Row>
    //     <Col sm={4}>
    //       <ListGroup>
    //         <ListGroup.Item action href="0">
    //           A
    //         </ListGroup.Item>
    //         <ListGroup.Item action href="1">
    //           B
    //         </ListGroup.Item>
    //       </ListGroup>
    //     </Col>
    //     <Col sm={8}>
    //       <Tab.Content>
    //         <Tab.Pane eventKey="0">
    //           <p>ASLV-D4</p>
    //           <p>ASLV-D3</p>
    //           <p>ANUSAT</p>
    //           <p>Aryabhata</p>
    //           <p>APPLE</p>
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="1">
    //           <p>ASLV-D4</p>
    //           <p>ASLV-D3</p>
    //           <p>ANUSAT</p>
    //           <p>Aryabhata</p>
    //           <p>APPLE</p>
    //           <p>ASLV-D4</p>
    //           <p>ASLV-D3</p>
    //           <p>ANUSAT</p>
    //           <p>Aryabhata</p>
    //           <p>APPLE</p>
    //           <p>ASLV-D4</p>
    //           <p>ASLV-D3</p>
    //           <p>ANUSAT</p>
    //           <p>Aryabhata</p>
    //           <p>APPLE</p>
    //         </Tab.Pane>
    //       </Tab.Content>
    //     </Col>
    //   </Row>
    // </Tab.Container>

  )

}
