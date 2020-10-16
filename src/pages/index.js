import React from "react"
// import { Link } from "gatsby"

import { Container, Row, Col } from 'react-bootstrap';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Counter from '../components/counter';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Container className="pt-5">
      <Row>
        <Col md>
        <Counter count={109} text="Spacecraft Missions" />
        </Col>
        <Col md>
          <Counter count={77} text="Launch Missions" />
        </Col>
        <Col md>
          <Counter count={10} text="Student Satellites" />
        </Col>
        <Col md>
          <Counter count={2} text="Reentry Missions" />
        </Col>
        <Col md>
          <Counter count={319} text="Foreign Satellites" />
        </Col>

      </Row>
    </Container>

  </Layout>
)

export default IndexPage
