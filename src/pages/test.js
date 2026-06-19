import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, Button, CardDeck, Card, Image, Table } from 'react-bootstrap'

import Layout from "../components/layout"
import Separator from '../components/separator'


export default function Test({ data }) {


  return (
    <Layout>


      <Container>

        <Separator title="Test" />


      </Container>






      {/* <ParallaxProvider>
        <ParallaxSection />
      </ParallaxProvider> */}

    </Layout>



  )
}
