import React from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline'


export default function VerticalTimeline({ events }) {

  return (
    <Timeline
      lineColor="white"
    >
      { events.map((event, ind) => (
        <TimelineEvent
          key={`${event.title}_${ind}`}
          title={event.title}
          createdAt={event.date}
          iconColor="white"
          bubbleStyle={{ backgroundColor: `white` }}
          >
            {/* {event.description} */}
          </TimelineEvent>
      ))}

    </Timeline>
  )

}
