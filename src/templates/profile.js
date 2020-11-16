import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, Button, Tabs, Tab } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Separator from '../components/separator'
import FlexibleLink from '../components/flexible-link'

export const query = graphql`
  query ($slug: String) {
    chairmenYaml(slug: { eq: $slug }) {
      name
      tenure
      # position
      slug
      image {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      about
      biodata
      positions
      accomplishments
      awards
      contributions
      fellowships
      links {
        name
        link
      }
    }
  }
`


export default function IsroCentre({ data }) {

  const {
    name,
    tenure,
    // position,
    slug,
    image,
    about,
    biodata,
    positions,
    accomplishments,
    awards,
    contributions,
    fellowships,
    links,
  } = data.chairmenYaml



  return (
    <Layout>

      <SEO title={name} />

      <Separator />

      <Container>

        <Row className="mb-2">

          <Col md={4}>
            <Img
              fluid={image.childImageSharp.fluid}
              alt={image.name}
            />
          </Col>

          <Col className="p-2 my-auto" md={8}>
            <h1 className="display-4 mb-2">{name}</h1>
            <h3>{tenure}</h3>
          </Col>

        </Row>


        <Tabs
          defaultActiveKey="about"
          // className="text-justify"
        >

          { about &&
            <Tab eventKey="about" title="About">
              <div dangerouslySetInnerHTML={{ __html: about }} className="py-2"/>
            </Tab>
          }

          { biodata &&
            <Tab eventKey="biodata" title="Biodata">
              <div dangerouslySetInnerHTML={{ __html: biodata }} className="py-2"/>
            </Tab>
          }

          { positions &&
            <Tab eventKey="positions" title="Positions held">
              <div dangerouslySetInnerHTML={{ __html: positions }} className="py-2"/>
            </Tab>
          }

          { accomplishments &&
            <Tab eventKey="accomplishments" title="Accomplishments">
              <div dangerouslySetInnerHTML={{ __html: accomplishments }} className="py-2"/>
            </Tab>
          }

          { awards &&
            <Tab eventKey="awards" title="Awards & Honours">
              <div dangerouslySetInnerHTML={{ __html: awards }} className="py-2"/>
            </Tab>
          }

          { contributions &&
            <Tab eventKey="contributions" title="Contributions">
              <div dangerouslySetInnerHTML={{ __html: contributions }} className="py-2"/>
            </Tab>
          }

          { fellowships &&
            <Tab eventKey="fellowships" title="Fellowships & Memberships">
              <div dangerouslySetInnerHTML={{ __html: fellowships }} className="py-2"/>
            </Tab>
          }

          { links &&
            <Tab eventKey="links" title="Links">
              <div className="py-2">
                <ul>
                  { links.map((item, ind) => (
                    <li key={`links_${ind}`}>
                      <FlexibleLink url={item.link}>{item.name}</FlexibleLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Tab>
          }


        </Tabs>


      </Container>



    </Layout>
  )

}
