import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FigureCaption from '../components/figure-caption';

import comm from '../images/comm.jpg';


export default function MissionDetail() {
  return (
    <Container>

      {/* <div className="text-center"> */}
      <h3 className="text-center">MARS ORBITER MISSION</h3>
      {/* </div> */}

      <br />

      {/* <div> */}
      <FigureCaption
        src={comm}
        alt="Communication satellites"
        caption=""
      />
      {/* </div> */}

      {/* <div> */}
      <p>
        Marking India's first venture into the interplanetary space, MOM will explore and observe Mars surface features, morphology, mineralogy and the Martian atmosphere. Further, a specific search for methane in the Martian atmosphere will provide information about the possibility or the past existence of life on the planet
      </p>

      <p>
        The enormous distances involved in interplanetary missions present a demanding challenge; developing and mastering the technologies essential for these missions will open endless possibilities for space exploration. After leaving Earth, the Orbiter will have to endure the Interplanetary space for 300 days before Mars capture. Apart from deep space communications and navigation-guidance-control capabilities, the mission will require autonomy at the spacecraft end to handle contingencies.
      </p>

      <p>
        Once India decided to go to Mars, ISRO had no time to lose as the nearest launch window was only a few months away and it could not afford to lose the chance, given the next launch would present itself after over 780 days, in 2016. Thus, mission planning, manufacturing the spacecraft and the launch vehicle and readying the support systems took place swiftly.
      </p>
      {/* </div> */}

      <br />
      <br />

      {/* <div className="text-center"> */}
      <h4 className="text-center">List of Communication Satellites</h4>
      {/* </div> */}

      <br />

      {/* <TableList /> */}

    </Container>

  )
}
