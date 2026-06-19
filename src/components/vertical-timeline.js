import React, { useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { Timeline, TimelineEvent } from 'react-event-timeline'
// import VisibilitySensor from 'react-visibility-sensor'


const TimelineEventWithSensor = ({ event }) => {

  // const [visible, setVisible] = useState(false)
  //
  // const handleOnChange = (isVisible) => (
  //   setVisible(isVisible)
  // )

  return (
    // <VisibilitySensor active={!visible} onChange={handleOnChange} partialVisibility>
      <TimelineEvent
        // key={`${event.title}_${ind}`}
        title={event.date}
        // createdAt={event.date}
        iconColor="white"
        // className={visible ? "animate-slideup" : "opacity-zero"}
        bubbleStyle={{ backgroundColor: `white` }}
        style={{
          marginBottom: `1.5rem`,
          // backgroundColor: `black`,
          // boxShadow: '0 0 6px 1px #BD3B36',
          // boxShadow: `0 0 6px 1px gray`
        }}
        cardHeaderStyle={{
          backgroundColor: `black`,
          fontSize: `1.5rem`,
          // fontWeight: `bold`,
        }}
        contentStyle={{
          backgroundColor: `dodgerblue`,
          fontSize: `1rem`,
          // fontWeight: `bold`,
          paddingTop: `1rem`,
          paddingBottom: `1rem`,
        }}
        container="card"
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="easeOutCirc"
      >
        {event.title}
      </TimelineEvent>
    // </VisibilitySensor>
  )
}





export default function VerticalTimeline({ data }) {

  // const color = '#00BCD4'
  // const color1 = 'rgb(53,129,192)'
  // const color2 = '#007bff'

  return (
    <Container>
      <h2 className="pt-3"></h2>
      <Row>
        <Col className="my-auto text-center" md={4}>
          <h2>{data.title}</h2>
        </Col>
        <Col className="text-center py-2" md={8}>

            <Timeline
              // lineColor="white"
              lineStyle={{ background: `darkgray`, width: 4 }}
              // className={visible ? "animate-appear" : "opacity-zero"}
            >
              { data.events.map((event, ind) =>
                <TimelineEventWithSensor key={`${event.title}_${ind}`} event={event} />
              )}
            </Timeline>
        </Col>
      </Row>
    </Container>

  )

}
