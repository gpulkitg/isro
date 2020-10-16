import React from 'react'
// import { Link } from 'gatsby'
import { Container, CardDeck, Button } from 'react-bootstrap'

import SplitSection from '../components/split-section'
import CardZoom from '../components/card-zoom'
import TextContent from '../components/text-content'

import communication_satellite from '../images/spacecraft/comm_sat.jpg'
import earth_observation_satellite from '../images/spacecraft/earth_obs_sat.jpg'
import scientific_spacecraft from '../images/spacecraft/scientific_spacecraft.jpg'
import navigation_satellite from '../images/spacecraft/nav_sat.jpg'
import experimental_satellite from '../images/spacecraft/experimental_sat1.jpg'
import small_satellite from '../images/spacecraft/small_sat.jpeg'
import student_satellite from '../images/spacecraft/student_sat.jpeg';

const spacecraftPageData = [
  {
    "title": "Communication Satellites",
    "description": "Supports telecommunication, television broadcasting, satellite news gathering, societal applications, weather forecasting, disaster warning and Search and Rescue operation services.",
    "link": "#",
  },
  {
    "title": "Earth Observation Satellites",
    "description": "The largest civilian remote sensing satellite constellation in the world - thematic series of satellites supporting multitude of applications in the areas of land and water resources; cartography; and ocean & atmosphere.",
    "link": "#",
  },
  {
    "title": "Scientific Spacecraft",
    "description": "Spacecraft for research in areas like astronomy, astrophysics, planetary and earth sciences, atmospheric sciences and theoretical physics.",
    "link": "#",
  },
  {
    "title": "Navigation Satellites",
    "description": "Satellites for navigation services to meet the emerging demands of the Civil Aviation requirements and to meet the user requirements of the positioning, navigation and timing based on the independent satellite navigation system.",
    "link": "#",
  },
  {
    "title": "Experimental Satellites",
    "description": "A host of small satellites mainly for the experimental purposes. These experiments include Remote Sensing, Atmospheric Studies, Payload Development, Orbit Controls, recovery technology etc.",
    "link": "#",
  },
  {
    "title": "Small Satellites",
    "description": "Sub 500 kg class satellites - a platform for stand-alone payloads for earth imaging and science missions within a quick turn around time.",
    "link": "#",
  },
  {
    "title": "Student Satellites",
    "description": "ISRO's Student Satellite programme is envisaged to encourage various Universities and Institutions for the development of Nano/Pico Satellites.",
    "link": "#",
  },

]


export default function SpacecraftsLanding() {

  return (
    <>

    <Container>

      <SplitSection imgSrc={communication_satellite} imgObjectFit="cover" textPosition="right" textAlignment="center">
        <h2 className="mb-4">{spacecraftPageData[0].title}</h2>
        <p className="mb-4">
          {spacecraftPageData[0].description}
        </p>
        <div>
          <Button href={spacecraftPageData[0].link} variant="outline-light" className="btn-jumbotron">Learn more</Button>
        </div>
      </SplitSection>

      <SplitSection imgSrc={earth_observation_satellite} imgObjectFit="cover" textPosition="left" textAlignment="center">
        <h2 className="mb-4">{spacecraftPageData[1].title}</h2>
        <p className="mb-4">
          {spacecraftPageData[1].description}
        </p>
        <div>
          <Button href={spacecraftPageData[0].link} variant="outline-light" className="btn-jumbotron">Learn more</Button>
        </div>
      </SplitSection>

      <SplitSection imgSrc={scientific_spacecraft} imgObjectFit="cover" textPosition="right" textAlignment="center">
        <h1>{spacecraftPageData[2].title}</h1>
        <p>
          {spacecraftPageData[2].description}
        </p>
      </SplitSection>

      <SplitSection imgSrc={navigation_satellite} imgObjectFit="cover" textPosition="left" textAlignment="center">
        <h1>{spacecraftPageData[3].title}</h1>
        <p>
          {spacecraftPageData[3].description}
        </p>
      </SplitSection>


    </Container>


    <TextContent title="Others">

      <CardDeck>
        <CardZoom
          imgSrc={experimental_satellite}
          title={spacecraftPageData[4].title}
          link="/"
        />
        <CardZoom
          imgSrc={small_satellite}
          title={spacecraftPageData[5].title}
          link="#"
        />
        <CardZoom
          imgSrc={student_satellite}
          title={spacecraftPageData[6].title}
          link="/about"
        />
      </CardDeck>

    </TextContent>


  </>



  )
}
