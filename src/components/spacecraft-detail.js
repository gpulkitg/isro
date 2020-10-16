import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableList from '../components/table-list';
import FigureCaption from '../components/figure-caption';

import comm from '../images/comm.jpg';

export default function SpacecraftDetail() {
  return (
    <Container>


      {/* <Row>
        <Col className="text-center"> */}
      <div className="text-center">
        <h3>Communication Satellites</h3>
      </div>
        {/* </Col>
      </Row> */}

      <br />

      {/* <Row>
        <Col> */}
      <FigureCaption
        src={comm}
        alt="Communication satellites"
        caption=""
      />
        {/* </Col>
      </Row> */}


      {/* <Row>
        <Col> */}
      <div>
        <p>
          The Indian National Satellite (INSAT) system is one of the largest domestic communication satellite systems in Asia-Pacific region with nine operational communication satellites placed in Geo-stationary orbit. Established in 1983 with commissioning of INSAT-1B, it initiated a major revolution in India’s communications sector and sustained the same later. GSAT-17 joins the constellation of INSAT System consisting 15 operational satellites, namely - INSAT-3A, 3C, 4A, 4B, 4CR and GSAT-6, 7, 8, 9, 10, 12, 14, 15, 16 and 18.
        </p>

        <p>
          The INSAT system with more than 200 transponders in the C, Extended C and Ku-bands provides services to telecommunications, television broadcasting, satellite newsgathering, societal applications, weather forecasting, disaster warning and Search and Rescue operations.
        </p>
      </div>
        {/* </Col>
      </Row> */}

      <br />
      <br />

      {/* <Row>
        <Col className="text-center"> */}
      <div className="text-center">
        <h4>List of Communication Satellites</h4>
      </div>
        {/* </Col>
      </Row> */}

      <br />

      {/* <Row>
        <Col> */}
      <TableList />
        {/* </Col>
      </Row> */}

    </Container>

  )

}
