import React, { useState } from 'react'
import { Tabs, Tab, Row, Col, Container } from 'react-bootstrap'

import TableList from '../components/table-list'

// import cryo from '../images/cryo.png'
// import cus from '../images/cus.jpg'
// import s200 from '../images/s200.jpg'
// import l110 from '../images/l110.jpg'
// import l110_hoisting from '../images/l110_hoisting.jpg'

export const TabContent = ({ title, children}) => (
  <Tab eventKey={title} title={title}>
    {children}
  </Tab>
)

const data = {
  body: [
    ["Cryo Stage Height", "13.5 m"],
    ["Cryo Stage Diameter", "4.0 m"],
    ["Engine", "CE-20"],
    ["Fuel", "28 tonnes of LOX + LH2"]
  ]
}

const data1 = {
  body: [
    ["Booster Height", "25 m"],
    ["Booster Diameter", "3.2 m"],
    ["Fuel", "205 tonnes of HTPB (nominal)"],
  ]
}

const data2 = {
  body: [
    ["Stage Height", "21 m"],
    ["Stage Diameter", "4 m"],
    ["Engine", "2 x Vikas"],
    ["Fuel", "110 tonnes of UDMH + N2O4"]
  ]
}


export const DynamicTabs = () => {
  // const [key, setKey] = useState(activeKey);

  return (
    <Tabs
      // id="uncontrolled-tab"
      defaultActiveKey="0"
      // onSelect={(k) => setKey(k)}
      className="text-center"
      // transition={false}
    >
      <Tab eventKey="0" title="Cryogenic Upper Stage (C25)">
        <Container className="py-4">
          <Row>
            {/* <Col  md={6} style={{ height: `50vh` }}>
              <img src={cus} className="w-100 h-100" style={{ objectFit: `contain`, opacity: `0.8` }} />
            </Col> */}
            <Col className="d-flex flex-column justify-content-center text-center py-4" md={6}>
              <p>
                The C25 is powered by CE-20, India's largest cryogenic engine, designed and developed by the Liquid Propulsion Systems Centre.
              </p>
              <TableList data={data}/>
            </Col>
          </Row>
        </Container>
      </Tab>


      <Tab eventKey="1" title="Solid Rocket Boosters (S200)">
        <Container className="py-4">
          <Row>
            {/* <Col md={6} style={{ height: `50vh` }}>
              <img src={s200} className="w-100 h-100" style={{ objectFit: `contain`, opacity: `0.8` }} />
            </Col> */}
            <Col className="d-flex flex-column justify-content-center text-center py-4" md={6}>
              <p>
                GSLV Mk III uses two S200 solid rocket boosters to provide the huge amount of thrust required for lift off. The S200 was developed at Vikram Sarabhai Space Centre.
              </p>
              <TableList data={data1}/>
            </Col>
          </Row>
        </Container>

      </Tab>


      <Tab eventKey="2" title="Core Stage (L110 Liquid Stage)">
        <Container className="py-4">
          <Row>
            {/* <Col md={6} style={{ height: `50vh` }}>
              <img src={l110_hoisting} className="w-100 h-100" style={{ objectFit: `contain`, opacity: `0.8` }} />
            </Col> */}
            <Col className="d-flex flex-column justify-content-center text-center py-4" md={6}>
              <p>
                The L110 liquid stage is powered by two Vikas engines designed and developed at the Liquid Propulsion Systems Centre.
              </p>
              <TableList data={data2}/>
            </Col>
          </Row>
        </Container>
      </Tab>
    </Tabs>
  );
}
