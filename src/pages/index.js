import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextContent from '../components/text-content'
import Counter from '../components/counter'
import CardBrighten from '../components/card-brighten'
import Separator from '../components/separator'
import FooterMore from '../components/footer-more'
import Sotw from '../components/sotw'
// import Sensor from '../components/sensor'


export const query = graphql`
  query {
    homeYaml {
      seo {
        title
      }
      carouselSection {
        title
        slug
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      textContent {
        title
        text
      }
      coverImg {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      counters {
        count
        text
      }
      cardSection {
        title
        link
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      sotw {
        title
        description
        link
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    recentUpdates: allUpdatesYaml(sort: {fields: date, order: DESC}, limit: 3) {
      edges {
        node {
          id
          title
          slug
          description
          date(formatString: "D MMM YYYY")
          image {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default function Home({ data }) {

  const {
    seo,
    carouselSection,
    textContent,
    coverImg,
    counters,
    cardSection,
    sotw,
  } = data.homeYaml


  // const cardStyles = {
  //   border: `none`,
  //   boxShadow: `0 0 2px 2px white`,
  // }

  return (
    <Layout>
      <SEO title={seo.title} />

      <Carousel interval={null} className="carousel-fade">
        { carouselSection.map((item, ind) => (
          <Carousel.Item key={`carouselSections_${ind}`} className="item-gradient">
            <Img
              fluid={item.image.childImageSharp.fluid}
              alt={item.image.name}
              // className="animate-appear-fast"
              style={{ width: `100%`, height: `100vh`}}
              imgStyle={{ opacity: `0.8` }}
            />
            <Carousel.Caption className="mb-2">
              <h3>{item.title}</h3>
            </Carousel.Caption>
            <Link to={item.slug} className="stretched-link" />
          </Carousel.Item>
        ))}
      </Carousel>


      <Separator />
      {/* <h1 className="display-4 text-center">{textContent.title}</h1> */}
      <TextContent title={textContent.title}>
        <h5 className="text-center">{textContent.text}</h5>
      </TextContent>

      <Img
        fluid={coverImg.childImageSharp.fluid}
        alt={coverImg.name}
        style={{ width: `100%`, height: `100vh`}}
        imgStyle={{ opacity: `0.8` }}
      />


      <Separator />
      <Container>
        <Row className="justify-content-center">
          { counters.map((item, ind) => (
            <Col key={`counters_${ind}`} className="mb-1" lg={2} md={4}>
              <Counter count={item.count} text={item.text} />
            </Col>
          ))}
        </Row>
        {/* <div className="my-2" style={{ borderBottom: `1px solid gray`}}></div> */}
      </Container>




      {/* <h2 className="mb-2 text-center">Featured</h2> */}
      <Separator />
      <Container>
        <Row>
          { cardSection.map((card, ind) => (
            <Col
              key={`cardSection_${ind}`}
              className="mb-2"
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-easing="easeOutCirc"
              lg={4} md={6}
              >
              <CardBrighten
                title={card.title}
                link={card.link}
                >
                <Img
                  fluid={card.image.childImageSharp.fluid}
                  alt={card.image.name}
                  className="card-brighten-img"
                />
              </CardBrighten>
            </Col>
          ))}
        </Row>
      </Container>


      <Separator />
      <Sotw
        title={sotw.title}
        description={sotw.description}
        link={sotw.link}
      >
        <Img
          fluid={sotw.image.childImageSharp.fluid}
          alt={sotw.image.name}
          className="h-100 w-100"
          imgStyle={{ objectFit: "contain" }}
        />
      </Sotw>



      {/* <h2 className="mb-2 text-center">Updates</h2> */}
      <Separator title="Recent Updates" />

      <Container className="mb-2">
        { data.recentUpdates.edges.map(({node}) =>
          <Row
            key={node.id}
            className="py-2"
            style={{ borderBottom: `1px solid gray`}}
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-easing="easeOutCirc"
            >
            <Col md={3}>
              { node.image &&
                <Img
                  fluid={node.image.childImageSharp.fluid}
                  alt={node.image.name}
                  style={{ objectFit: "contain" }}
                />
              }
            </Col>

            <Col className="py-1" md={9}>
              <h6 className="text-info">{node.date}</h6>
              <h4>{node.title}</h4>
            </Col>

          </Row>
        )}
        {/* { data.recentUpdates.edges.map(({node}) => (
          <Row className="py-2" key={node.id}>
            <Col md>
              { node.image &&
                <Img
                  fluid={node.image.childImageSharp.fluid}
                  alt={node.image.name}
                  style={{ height: `100%`, width: `100%`, objectFit: "contain" }}
                />
              }
              </Col>

              <Col className="py-2" md>
                <p className="text-info">{node.date}</p>
                <h3>{node.title}</h3>
              </Col>

            </Row>
          ))} */}
          {/* <Row>
          { data.recentUpdates.edges.map(({node}) => (
              <Col key={node.id} md={6} className="d-flex flex-column py-1">
                { node.image &&
                  <Img
                    fluid={node.image.childImageSharp.fluid}
                    alt={node.image.name}
                    style={{ height: `50vh`, width: `100%`, objectFit: "contain" }}
                  />
                }

                <div className="py-1">
                  <p className="text-info">{node.date}</p>
                  <h3>{node.title}</h3>
                </div>
              </Col>
            ))}
          </Row> */}
      </Container>

      <div className="text-center">
        <Button href="/updates" variant="outline-light" className="btn-jumbotron">
          See all updates
        </Button>
      </div>


      <Separator />
      <FooterMore />

    </Layout>
  )
}
