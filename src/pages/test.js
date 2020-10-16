import React, { useState, useCallback } from 'react'

import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import Counter from '../components/counter';
// import CardGlow from '../components/card-glow';
import { Container, Row, Col, Button, CardDeck, Card, Image } from 'react-bootstrap'

import Layout from "../components/layout"
import CardZoom from '../components/card-zoom';
// import Parallax from '../components/parallax';
import { ParallaxProvider } from 'react-scroll-parallax'
import ParallaxSection from '../components/parallax-section'
// import ClickReveal from '../components/click-reveal';
import { DynamicTabs, TabContent } from '../components/dynamic-tabs'
import TableList from '../components/table-list'
import CarouselSection from '../components/carousel-section'
import TextContent from '../components/text-content'
import SplitSection from '../components/split-section'
import JumbotronImg from '../components/jumbotron-img'

// import Image from '../components/image'

// import gslv_mk_iii_launcher from '../images/gslv_mk_iii/gslv_mk_iii_launcher.png'
// import cryo from '../images/cryo.png'
// import cus from '../images/cus.jpg'
// import s200 from '../images/s200.jpg'
// import l110 from '../images/l110.jpg'
// import l110_hoisting from '../images/l110_hoisting.jpg'
//
// import mom_gallery1 from '../images/mom/mom_gallery1.jpg'
// import mom_gallery2 from '../images/mom/mom_gallery2.jpg'
// import mom_gallery3 from '../images/mom/mom_gallery3.png'
// import mom_gallery4 from '../images/mom/mom_gallery4.jpg'
// import mom1 from '../images/mom/mom1.jpg'
// import mom2 from '../images/mom/mom2.jpg'



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


// export const query = graphql`
//   query {
//     allFile(filter: { sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "spacecraft"}, extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
//       edges {
//         node {
//           name,
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `


export const query = graphql`
  query {
    liftoffImg: file(relativePath: {eq: "liftoff.jpg"}) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          originalImg
          src
        }
      }
    }
  }
`

export default function Test({ data }) {

  // console.log(data.file);

  return (
    <Layout>

      <Container>

        {/* <Card className="card-glow">
          <Card.Img variant="top" src={imgSrc} className="card-glow-img"/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{subtitle}</Card.Subtitle>
            <Card.Text>{text}</Card.Text>
            <Link to={link} className="stretched-link" />
          </Card.Body>
        </Card> */}

        <CardDeck>

          <Card className="card-glow">
            <Card.Img as={Image} variant="top" src={data.liftoffImg.childImageSharp.fluid.src} fluid={true} className="card-glow-img"/>
            {/* <Img fluid={data.liftoffImg.childImageSharp.fluid} className="card-glow-img"/> */}
            {/* <Image filename="liftoff.jpg" className="card-glow-img" /> */}
            <Card.Body>
              <Card.Title>Liftoff</Card.Title>
            </Card.Body>
          </Card>


        </CardDeck>




        {/* { data.allFile.edges.map(({ node },i) => (

          <div className="vh-100 w-100" key={i}>
            <Img
              fluid={node.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={node.name}
            />
          </div>

        )) } */}

        {/* <SplitSection imgSrc={communication_satellite} imgObjectFit="cover" textPosition="right" textAlignment="center">
          <h1>{spacecraftPageData[0].title}</h1>
          <p>
            {spacecraftPageData[0].description}
          </p>
          <div className="jumbotron-custom-button">
            <Link to={spacecraftPageData[0].link} className="button-outline-custom">Learn more</Link>
          </div>
        </SplitSection> */}
      </Container>



      {/* <Container>
        <DynamicTabs />
      </Container>

      <TableList data={data1} />

      <Container>
        <p className="p-5">Some text</p>
        <div>
          <Link to="/about" className="link-underline">About</Link>
        </div>
        <div>
          <a href="https://google.com" className="link-underline">Google Search</a>
        </div>
      </Container> */}


      {/* <CarouselSection />


      <ParallaxProvider>
        <ParallaxSection />
      </ParallaxProvider> */}

    </Layout>



  )
}
