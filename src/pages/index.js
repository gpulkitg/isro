import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
// import CarouselGallery from '../components/carousel-gallery'
// import JumbotronImg from '../components/jumbotron-img'
import TextContent from '../components/text-content'
import Counter from '../components/counter'
// import CardGlow from '../components/card-glow'
import CardBrighten from '../components/card-brighten'
// import SplitSection from '../components/split-section'
import Separator from '../components/separator'
import FooterMore from '../components/footer-more'


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
              ...GatsbyImageSharpFluid
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
            ...GatsbyImageSharpFluid
          }
        }
      }
      counters {
        count
        text
      }
      cardSection {
        title
        slug
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      sotw {
        title
        description
        slug
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    recentUpdates: allUpdatesYaml(sort: {fields: date, order: DESC}, limit: 4) {
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
                ...GatsbyImageSharpFluid
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

      {/* <CarouselGallery items={items} /> */}
      <Carousel interval={null} className="carousel-fade">
        { carouselSection.map((item, ind) => (
          <Carousel.Item key={`carouselSections_${ind}`} className="item-gradient">
            <Img
              fluid={item.image.childImageSharp.fluid}
              alt={item.image.name}
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


      <TextContent title={textContent.title}>
        <h5 className="text-center">{textContent.text}</h5>
      </TextContent>


      <Img
        fluid={coverImg.childImageSharp.fluid}
        alt={coverImg.name}
        style={{ width: `100%`, height: `100vh`}}
        imgStyle={{ opacity: `0.8` }}
      />

      {/* <JumbotronImg
        imgSrc={isro_office}
        horizontalPosition="center"
        verticalPosition="center"
        contentAlignment="center"
        >
        <h3>
          Mission Control
        </h3>
      </JumbotronImg> */}

      <Separator />
      <Container>
        <Row>
          { counters.map((item, ind) => (
            <Col key={`counters_${ind}`} md>
              <Counter count={item.count} text={item.text} />
            </Col>
          ))}
        </Row>
      </Container>


      {/* <br />
      <br />
      <br />

      <h2 className="mb-2 text-center">Featured</h2> */}
      <Separator  />
      <Container>
        <Row>
          { cardSection.map((card, ind) => (
            <Col md={4} key={`cardSection_${ind}`} className="mb-2">
              <CardBrighten
                title={card.title}
                link={card.slug}
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


        {/* <SplitSection imgSrc={sotw} imgObjectFit="contain" textPosition="right" textAlignment="center">
          <h4 className="mb-4 display-4">Story of the week</h4>
          <h5 className="mb-4">Super flares in Nascent Sun: Evidence from Meteorites!</h5>
          <p className="mb-4">
            Scientists at Physical Research Laboratory, Ahmedabad working in collaboration with University of Heidelberg, Germany,have recently reported Giant flares from the embryonic Sun. The super-flare has been calculated to be about a million times stronger in intensity compared to the highest X-class flare observed from the modern Sun.
          </p>
          <div>
            <Button href="/super-flares-nascent-sun-evidence-meteorites" variant="outline-light" className="btn-jumbotron">
              Read more
            </Button>
          </div>
        </SplitSection>
        <br />
        <br /> */}

        <Separator />
        {/* <h2 className="mb-4 text-center display-4">Story of the week</h2> */}
        <Row>
          <Col md className="my-auto">
            <h4 className="display-4">Story of the week</h4>
          </Col>

          <Col className="d-flex justify-content-center order-md-1" md>
            <Img
              fluid={sotw.image.childImageSharp.fluid}
              alt={sotw.image.name}
              className="h-100 w-100"
              imgStyle={{ objectFit: "contain" }}
            />
          </Col>

          <Col className="d-flex flex-column justify-content-center py-2" md>
            <h5 className="mb-2">{sotw.title}</h5>
            <p className="mb-2">
              {sotw.description}
            </p>
            <div>
              <Button href={sotw.slug} variant="outline-light" className="btn-jumbotron">
                Read more
              </Button>
            </div>
          </Col>
        </Row>

      </Container>



      {/* <h2 className="mb-2 text-center">Updates</h2> */}
      <Separator title="Updates" />

      <Container>
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
          <Row>
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
          </Row>
      </Container>

      <div className="text-center">
        <Button href="/updates" variant="outline-light" className="btn-jumbotron">
          All updates
        </Button>
      </div>


      <Separator />
      <FooterMore />

    </Layout>
  )
}
