import React from "react"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Row, Col, Card, Button, CardDeck } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextContent from '../components/text-content'
import Separator from '../components/separator'
import JumbotronImg from '../components/jumbotron-img'
import SplitSection from '../components/split-section'
import CardBrighten from '../components/card-brighten'
import TableLinks from '../components/table-links'

export const query = graphql`
  query {
    spacecraftYaml {
      seo {
        title
      }
      jumbotronImg {
        title
        subtitle
        description
        link
        button
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        verticalPosition
        horizontalPosition
        textAlignment
      }
      splitSection {
        title
        subtitle
        description
        button
        link
        textPosition
        textAlignment
        objectFit
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      cardSection {
        title
        subtitle
        text
        link
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      listSpacecrafts {
        title
        table {
          head {
            col
          }
          body {
            row {
              col {
                text
                date(formatString: "MMM D, YYYY")
                link
              }
            }
          }
        }
      }
    }
  }
`




export default function SpacecraftsPage({ data }) {


  const {
    seo,
    jumbotronImg,
    splitSection,
    cardSection,
    listSpacecrafts,
  } = data.spacecraftYaml


  return (

    <Layout>
      <SEO title="Spacecrafts" />

      { jumbotronImg && jumbotronImg.map((item, ind) => (
          <JumbotronImg
            key={`jumbotronImg_${ind}`}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            button={item.button}
            link={item.link}
            horizontalPosition={item.horizontalPosition}
            verticalPosition={item.verticalPosition}
            textAlignment={item.textAlignment}
          >
            <Img
              fluid={item.image.childImageSharp.fluid}
              alt={item.image.name}
              style={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}
              imgStyle={{ opacity: `0.7` }}
            />
          </JumbotronImg>
        ))}
      {/* <div className="jumbotron jumbotron-container">
        <Img
          fluid={jumbotronImg.image.childImageSharp.fluid}
          alt={jumbotronImg.image.name}
          style={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}
          imgStyle={{ opacity: `0.7` }}
        />

        <Container className="lead">
          <Row className="vh-100 justify-content-center">
            <Col lg={6} md={8} className="d-flex flex-column justify-content-center text-center py-4">
              <h1 className="display-4">{jumbotronImg.title}</h1>
            </Col>
          </Row>
        </Container>
      </div> */}

      { splitSection && splitSection.map((item, ind) => (
        <SplitSection
          key={`splitSection_${ind}`}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          button={item.button}
          link={item.link}
          textPosition={item.textPosition}
          textAlignment={item.textAlignment}
        >
          <Img
            fluid={item.image.childImageSharp.fluid}
            alt={item.image.name}
            className="h-100 w-100"
            imgStyle={{ objectFit: item.objectFit }}
          />
          </SplitSection>
        ))}


      <Container>

        {/* { splitSection.map((item, ind) => (
          <Row key={`splitSection_${ind}`}>
            <Col className={`vh-100 d-flex order-md-${ind*2%4} py-2`} md>
              <Img
                fluid={item.image.childImageSharp.fluid}
                alt={item.image.name}
                className="h-100 w-100"
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center text-center order-md-1" md>
              <h2 className="mb-2">{item.title}</h2>
              <p className="mb-2">{item.description}</p>
              <div>
                <Button href={item.link} variant="outline-light" className="btn-jumbotron">LEARN MORE</Button>
              </div>
            </Col>
          </Row>
        ))} */}


        <Separator title="Others" />

        <Row>
          { cardSection.map((card, ind) => (
            <Col md={4} key={`cardSection_${ind}`} className="mb-2">
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
              {/* <Card className="card-brighten">
                <Img
                  fluid={item.image.childImageSharp.fluid}
                  alt={item.image.name}
                  className="card-brighten-img"
                />
                <Card.Body>
                  <Card.Title className="text-center">{item.title}</Card.Title>
                  <Link to={item.link} className="stretched-link" />
                </Card.Body>
              </Card> */}
            </Col>
          ))}
        </Row>

        <Separator title={listSpacecrafts.title} />
        <TableLinks data={listSpacecrafts.table} />

        {/* <CardDeck>
          {cardSection.map((item, ind) => (
            <Card text="white" className="card-zoom" key={`cardZoomSection_${ind}`}>
              <Img
                fluid={item.image.childImageSharp.fluid}
                alt={item.image.name}
                className="card-zoom-img"
              />
              <Card.ImgOverlay>
                <Card.Title className="card-zoom-title">{item.title}</Card.Title>
              </Card.ImgOverlay>
              <Link to={item.link} className="stretched-link"></Link>
            </Card>
          ))}
        </CardDeck> */}
      </Container>




    </Layout>

  )

}
