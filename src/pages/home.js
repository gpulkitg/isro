import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Row, Col, Card, CardDeck, Button, Carousel } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import CarouselGallery from '../components/carousel-gallery'
import JumbotronImg from '../components/jumbotron-img'
import TextContent from '../components/text-content'
// import Counter from '../components/counter'
// import CardGlow from '../components/card-glow'
import CardBrighten from '../components/card-brighten'
import SplitSection from '../components/split-section'

// import UpdatePost from '../templates/update-post'
//
// import isro_office from '../images/home/isro_scientists.jpg'
// import sotw from '../images/home/storyoftheweek_0419.png'



// const items = [
//   {
//     imgSrc: require("../images/home/gslv_f10_gisat_1_home.jpg"),
//     captionTitle: "The launch of GISAT-1 onboard GSLV-F10, planned for March 05, 2020, is postponed.",
//   },
//   {
//     imgSrc: require("../images/home/yuvika_2020_cancelled.png"),
//     captionTitle: "The Young Scientist Programme(YUVIKA), scheduled to be held during May 11-22, 2020, has been cancelled in the wake of COVID 19 pandemic.",
//   },
//   {
//     imgSrc: require("../images/home/gisat30.jpg"),
//     captionTitle: "India’s telecommunication satellite GSAT-30 successfully launched into a Geosynchronous Transfer Orbit (GTO)",
//   },
//
// ]
//
// const featuredPosts = [
//   {
//     imgSrc: require("../images/home/webinar_poster_ind_meet_v32.png"),
//     alt: "Webinar on unlocking India's potential in space sector",
//     title: "Webinar on unlocking India's potential in space sector",
//     link: "/",
//   },
//   {
//     imgSrc: require("../images/home/icc_2020.png"),
//     alt: "ISRO Cyperspace Competition",
//     title: "ISRO Cyperspace Competition",
//     link: "/",
//   },
//   {
//     imgSrc: require("../images/home/vikram_centenary_sticker.png"),
//     alt: "Vikram A Sarabhai Centenary Programme",
//     title: "Vikram A Sarabhai Centenary Programme",
//     link: "/",
//   },
//   {
//     imgSrc: require("../images/home/cloud_cover_india.jpg"),
//     alt: "Cloud Cover Over India",
//     title: "Cloud Cover Over India",
//     link: "/",
//   },
//   {
//     imgSrc: require("../images/home/navic.png"),
//     alt: "NaVIC",
//     title: "NaVIC",
//     link: "/",
//   },
//   {
//     imgSrc: require("../images/home/dumdum.jpg"),
//     alt: "Disaster Management - Moonsoon Floods in India",
//     title: "Disaster Management - Moonsoon Floods in India",
//     link: "/",
//   },
//   // {
//   //   imgSrc: require("../images/home/announcement.jpg"),
//   //   alt: "All updates",
//   //   title: "All updates",
//   //   link: "/updates",
//   // },
// ]

// const updatesPosts = [
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
    homeLatest: allHomeLatestYaml {
      edges {
        node {
          id
          title
          slug
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
    isroCover: file(relativePath: {regex: "/isro_scientists.jpg/"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homeFeatured: allHomeFeaturedYaml {
      edges {
        node {
          id
          title
          slug
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
    homeSotw: homeSotwYaml {
      title
      image {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      description
      slug
    }
    homeUpdates: allUpdatesYaml(sort: {fields: date, order: DESC}, limit: 3) {
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

export default function Home({ data }) {

  // const cardStyles = {
  //   border: `none`,
  //   boxShadow: `0 0 2px 2px white`,
  // }

  return (
    <Layout>
      <SEO title="Home" />

      {/* <CarouselGallery items={items} /> */}
      <Carousel interval={null}>
        { data.homeLatest.edges.map(({node}) => (
          <Carousel.Item key={node.id} className="item-gradient">
            <Img
              fluid={node.cover.childImageSharp.fluid}
              style={{ width: `100%`, height: `100vh`}}
              imgStyle={{ opacity: `0.8` }}
            />
            <Carousel.Caption className="mb-2">
              <h3>{node.title}</h3>
            </Carousel.Caption>
            <Link to={node.slug} className="stretched-link" />
          </Carousel.Item>
        ))}
      </Carousel>

      <TextContent title="Indian Space Research Organization">
        <h5 className="text-center">
          Our vision is to harness space technology for national development, while pursuing space science research and planetary exploration.
        </h5>
      </TextContent>

      <Img
        fluid={data.isroCover.childImageSharp.fluid}
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

      <br />
      <br />
      <h2 className="mb-4 text-center">Featured</h2>

      <Container>
        <Row>
          { data.homeFeatured.edges.map(({ node }) => (
            <Col md={4} key={node.id} className="mb-4">
              <Card className="card-brighten">
                <Img fluid={node.cover.childImageSharp.fluid} className="card-brighten-img" />
                <Card.Body>
                  <Card.Title className="text-center">{node.title}</Card.Title>
                  <Link to={node.slug} className="stretched-link" />
                </Card.Body>
              </Card>
            </Col>
          ))}
          {/* { featuredPosts.map((post, ind) => (
            <Col md={4} key={`post_${ind}`} className="mb-4">
              <CardBrighten
                imgSrc={post.imgSrc}
                title={post.title}
                link={post.link}
              />
            </Col>
          ))} */}
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


        <br />
        <br />
        {/* <h2 className="mb-4 text-center display-4">Story of the week</h2> */}
        <Row >
          <Col md className="my-auto">
            <h4 className="display-4">Story of the week</h4>
          </Col>

          <Col className="d-flex justify-content-center order-md-1" md>
            <Img
              fluid={data.homeSotw.image.childImageSharp.fluid}
              className="h-100 w-100"
              imgStyle={{ objectFit: "contain" }}
              alt={data.homeSotw.image.name} />
          </Col>

          <Col className="d-flex flex-column justify-content-center py-4" md>
            <h5 className="mb-4">{data.homeSotw.title}</h5>
            <p className="mb-4">
              {data.homeSotw.description}
            </p>
            <div>
              <Button href={data.homeSotw.slug} variant="outline-light" className="btn-jumbotron">
                Read more
              </Button>
            </div>
          </Col>
        </Row>


      </Container>


      <br />
      <br />
      <br />
      <br />
      <h2 className="mb-4 text-center">Updates</h2>

      {/* { updatesPosts.map((post, ind) => (
        <UpdatePost key={`posts_${ind}`} post={post} />
      ))} */}
      <Container>
        { data.homeUpdates.edges.map(({node}) => (
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
              </Col>

            </Row>
          ))}
      </Container>

      <div className="text-center">
        <Button href="/updates" variant="outline-light" className="btn-jumbotron">
          All updates
        </Button>
      </div>


    </Layout>
  )
}
