import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import UpdatePost from '../templates/update-post'


// const posts = [
//   {
//     imgSrc: require("../images/updates/space_startups_2.jpg"),
//     alt: "",
//     title: "Empowering India's Startups to transform Space Sector with ISRO and AIM",
//     date: "Sep 10, 2020",
//   },
//   {
//     imgSrc: require("../images/updates/seed-10th-programme_page_1.jpg"),
//     alt: "",
//     title: "Webinar on Empowering India's Startups to transform Space Sector scheduled on September 10, 2020 @ 1400 hrs",
//     description: "",
//     date: "Sep 9, 2020"
//   },
//   {
//     imgSrc: require("../images/updates/preamble.png"),
//     alt: "",
//     title: "70th Year adoption of the Constitution of India",
//     description: "",
//     date: "Sep 8, 2020",
//   },
// ]

export const query = graphql`
  query {
    updates: allUpdatesYaml(sort: {fields: date, order: DESC}) {
      edges {
        node {
          id
          title
          slug
          alt
          description
          date(formatString: "D MMM YYYY")
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`


export default function Updates({ data }) {

  return (
    <Layout>
      <SEO title="Updates" />


      <Container>
        { data.updates.edges.map(({node}) => (
        // <UpdatePost key={`posts_${ind}`} post={post} />
          <Row className="mb-4" key={node.id}>
            <Col md>
              <Img
                fluid={node.cover.childImageSharp.fluid}
                style={{ height: `100%`, width: `100%`, objectFit: "contain" }}
                alt={node.alt} />
              </Col>

              <Col className="py-4" md>
                <p className="text-info">{node.date}</p>
                <h3>{node.title}</h3>
                {/* <p className="text-info"><em>Posted on {date}</em></p> */}
              </Col>

            </Row>
          ))}
      </Container>

    </Layout>
  )

}
