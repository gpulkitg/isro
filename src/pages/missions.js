import React from "react"
// import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Counter from '../components/counter'
import JumbotronImg from '../components/jumbotron-img'
import ListItems from '../components/list-items'
import TextContent from '../components/text-content'


const data = {
  jumbotronImg: [
    {
      imgSrc: require("../images/missions/mom/mom1.jpg"),
      alt: "",
      horizontalPosition: "left",
      verticalPosition: "bottom",
      contentAlignment: "left",
      title: "Mars Orbiter Mission",
      subtitle: "Breathtaking pictures by Mars Color Camera",
      button: "SEE MORE",
      link: "/about",
    },
    {
      imgSrc: require("../images/missions/astrosat/ngc_2336_uvit.png"),
      alt: "",
      horizontalPosition: "right",
      verticalPosition: "bottom",
      contentAlignment: "left",
      title: "NGC 2336",
      subtitle: "A Classic Spiral Galaxy Captured by UVIT",
      button: "SEE MORE",
      link: "/missions/astrosat",
    },
  ],

  counters: [
    {
      count: "109",
      text: "Spacecraft Missions",
    },
    {
      count: "77",
      text: "Launch Missions",
    },
    {
      count: "10",
      text: "Student Satellites",
    },
    {
      count: "2",
      text: "Re-entry Missions",
    },
    {
      count: "319",
      text: "Foreign Satellites",
    },
  ],

  listMissions: [
    {
      title: "Trending",
      contents: [
        {
          "link": "/missions/mars-orbiter-mission",
          "text": "Mars Orbiter Mission",
        },
        {
          "link": "/missions/lvm3-x",
          "text": "LVM3-X (CARE)",
        },
        {
          "link": "/missions/astrosat",
          "text": "AstroSat",
        },
      ]
    },
    {
      title: "Latest",
      contents: [
        {
          "link": "/missions/gsat-30",
          "text": "GSAT-30",
        },
        {
          "link": "/missions/pslv-c48-risat-2br1",
          "text": "PSLV-C48/RISAT-2BR1",
        },
        {
          "link": "/missions/cartosat-3",
          "text": "PSLV-C47/Cartosat-3 Mission",
        },
      ]
    },
    {
      title: "Future",
      contents: [
      ]
    },
  ],


}




export default function MissionsPage() {

  const { jumbotronImg, counters, listMissions } = data

  return (

    <Layout>
      <SEO title="Missions" />


      { jumbotronImg && jumbotronImg.map((item, ind) => (
        <JumbotronImg
          key={`jumbotronImg_${ind}`}
          imgSrc={item.imgSrc}
          horizontalPosition={item.horizontalPosition}
          verticalPosition={item.verticalPosition}
          contentAlignment={item.contentAlignment}
          >
            <h1 className="mb-4 display-4">{item.title}</h1>
            <h3 className="mb-4">{item.subtitle}</h3>
            <div className="mb-4">
              <Button href={item.link} variant="outline-light" className="btn-jumbotron">{item.button}</Button>
            </div>
          </JumbotronImg>
        )) }

        <br />
        <br />


        <Container>

          <Row>
            { counters.map((item, ind) => (
              <>
                <Col key={`counter_${ind}`} md>
                  <Counter count={item.count} text={item.text} />
                </Col>
              </>
            ))}
          </Row>

          <br />
          <br />

          {/* <h1 className="text-center my-5">
            All missions
          </h1>

          <Form className="mb-2">
            <Form.Row>

              <Form.Group as={Col} controlId="formSearch" md={8}>
                <Form.Label>Search</Form.Label>
                <Form.Control
                  placeholder="Type your search query here"
                  // pattern="[a-zA-Z]{2,}"
                  name="searchQuery"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formSelect" md={4}>
                <Form.Label>Filter</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setFilter(e.target.value)}
                  name="filter"
                  value={filter}
                  custom
                  >
                    { filterOptions.map( (filter, ind) => (
                      <option value={ind} key={ind}>{filter}</option>
                    ))}
                  </Form.Control>
                </Form.Group>

            </Form.Row>
          </Form> */}


          <TextContent title="Missions directory">

          </TextContent>

          <Row>
            { listMissions.map( (items, ind) => (
              <Col key={ind} sm>
                <ListItems items={items} />
              </Col>
            ))}
          </Row>
        </Container>

      </Layout>
  )

}
