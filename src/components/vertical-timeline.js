import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Timeline, TimelineEvent } from 'react-event-timeline'


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
          >
            { data.events.map((event, ind) => (
              <TimelineEvent
                key={`${event.title}_${ind}`}
                title={event.date}
                // createdAt={event.date}
                iconColor="white"
                bubbleStyle={{ backgroundColor: `white` }}
                style={{
                  marginBottom: `1.5rem`,
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
              >
                {event.title}
              </TimelineEvent>
            ))}
          </Timeline>
        </Col>
      </Row>
    </Container>

  )

}
