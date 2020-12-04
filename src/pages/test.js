import React, { useState, useCallback } from 'react'

import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import Counter from '../components/counter';
// import CardGlow from '../components/card-glow';
import { Container, Row, Col, Button, CardDeck, Card, Image, Table } from 'react-bootstrap'
// import CountUp from 'react-countup';

import Layout from "../components/layout"
// import LineBreak from '../components/line-break';
// import VisibilitySensor from 'react-visibility-sensor'
// import CardZoom from '../components/card-zoom';
// import Parallax from '../components/parallax';
// import { ParallaxProvider } from 'react-scroll-parallax'
// import ParallaxSection from '../components/parallax-section'
// import ClickReveal from '../components/click-reveal';
// import { DynamicTabs, TabContent } from '../components/dynamic-tabs'
// import TableList from '../components/table-list'
// import CarouselSection from '../components/carousel-section'
// import TextContent from '../components/text-content'
// import SplitSection from '../components/split-section'
// import JumbotronImg from '../components/jumbotron-img'
// import Image from '../components/image'
// import VerticalTimeline from '../components/vertical-timeline'
// import TabSection from '../components/tab-section';
import Separator from '../components/separator'
import LinkVersatile from '../components/link-versatile'

// import liftoff from "../images/liftoff.jpg"


const ColVersatile = ({ col }) => {
  if (col.link) {
    return (
      <LinkVersatile url={col.link} className="no-underline">
        { col.text ? col.text : col.link }
      </LinkVersatile>
    )
  } else if (col.doc) {
    return (
      <a href={col.doc.publicURL} className="no-underline" target="_blank">
        { col.text ? col.text : col.doc.name+col.doc.ext }{" "}
      </a>
    )
  } else if (col.date) {
    return col.date
  } else {
    return col.text
  }

}


export const query = graphql`
  query {
    soundingRocketsYaml {
      sections {
        title
        text
        caption
        image {
          name
          childImageSharp {
            # fixed {
            #   ...GatsbyImageSharpFixed
            # }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        table {
          head {
            col {
              text
            }
          }
          body {
            row {
              col {
                text
              }
            }
          }
        }
      }
    }
  }
`



export default function Test({ data }) {

  const table = data.soundingRocketsYaml.sections[2].table

  return (
    <Layout>


      <Container>

        <Separator />


        <Table variant="dark" className="table-custom-border" responsive>
          { table.hasOwnProperty('head') &&
            <thead>
              <tr>
                { table.head.map( ({col},i) =>
                  <th key={`head_th_${i}`}>
                    <ColVersatile col={col} />
                  </th>
                )}
              </tr>
            </thead>
          }

          <tbody>
            { table.hasOwnProperty('body') &&
                table.body.map( ({row},i) =>
                  <tr key={`body_tr_${i}`}>
                    {row.map( ({col},j) => (
                      <td key={`body_td_${j}`}>
                        <ColVersatile col={col} />
                      </td>
                    ))}
                  </tr>
                )
            }
          </tbody>

        </Table>



        {/* <div className="vh-100">
          some view height section
        </div>

        <VisibilitySensor active={!animated} onChange={handleVisibilityChange} delayedCall>
          <span ref={countUpRef} className="countup counter"/>
        </VisibilitySensor>
        <div className="animate-bottom">
          <h2>subtitle</h2>
          <p>text</p>
        </div> */}

        {/* <div className="vh-100 w-100">
          test
        </div>
        <div className="vh-100 w-100">
          test
        </div>


        <div className="text-center">
          <CountUp
            start={animated ? 0 : null}
            end={12}
            duration={2}
            decimal=","
            className="countup counter"
            // onEnd={() => setAnimated(true)}
          >
            {({ countUpRef }) => (
              <VisibilitySensor active={!animated} onChange={handleVisibilityChange} delayedCall>
                <span ref={countUpRef} className="countup counter"/>
              </VisibilitySensor>
            )}
          </CountUp>
          <h3>Number</h3>
        </div> */}

        {/* <TabSection items={items} /> */}



        {/* <Card className="card-glow">
          <Card.Img variant="top" src={imgSrc} className="card-glow-img"/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{subtitle}</Card.Subtitle>
            <Card.Text>{text}</Card.Text>
            <Link to={link} className="stretched-link" />
          </Card.Body>
        </Card> */}

        {/* <CardDeck>

          <Card className="card-glow">
            <Card.Img as={Image} variant="top" src={data.liftoffImg.childImageSharp.fluid.src} fluid={true} className="card-glow-img"/>
            <Card.Body>
              <Card.Title>Liftoff</Card.Title>
            </Card.Body>
          </Card>


        </CardDeck> */}




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
