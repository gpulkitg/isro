import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, CardDeck, Button, Row, Col, Card } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LightboxGallery from '../components/lightbox-gallery'
import TextContent from '../components/text-content'
import Separator from '../components/separator'
import VerticalTimeline from '../components/vertical-timeline'
import ListItems from '../components/list-items'
import JumbotronImg from '../components/jumbotron-img'
import SplitSection from '../components/split-section'
import CardGrow from '../components/card-grow'


export const query = graphql`
  query($slug: String!) {
    missionsDetailYaml(slug: {eq: $slug}) {
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
      textContent1 {
        title
        text
      }
      cardSection {
        title
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
      gallery {
        link
        photos {
          # width
          # height
          caption
          image {
            childImageSharp {
              original {
                width
                height
              }
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      cardSection2 {
        link
        cards {
          title
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
      verticalTimeline {
        title
        events {
          date
          title
        }
      }
      textContent2 {
        title
        text
      }
      relatedLinks {
        title
        content {
          link
          text
        }
      }
    }
  }
`



export default function Mission({ data }) {

  const {
    seo,
    jumbotronImg,
    splitSection,
    textContent1,
    cardSection,
    gallery,
    cardSection2,
    verticalTimeline,
    textContent2,
    relatedLinks,
  } = data.missionsDetailYaml




  const photos = gallery.photos.map((photo) => {
    return (
      {
        src: photo.image.childImageSharp.fluid.src,
        srcSet: photo.image.childImageSharp.fluid.srcSet,
        sizes: photo.image.childImageSharp.fluid.sizes,
        width: photo.image.childImageSharp.original.width,
        height: photo.image.childImageSharp.original.height,
        caption: photo.caption,
      }
    )
  })


  return (

    <Layout>

      <SEO title={seo.title} />

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


      {/* { jumbotronImg && jumbotronImg.map((item, ind) => (

        <div className="jumbotron jumbotron-container" key={`jumbotronImg_${ind}`}>
          <Img
            fluid={item.image.childImageSharp.fluid}
            alt={item.image.name}
            style={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}
            imgStyle={{ opacity: `0.7` }}
          />

          <Container className="lead">
            <Row className="vh-100 justify-content-start">
              <Col lg={6} md={8} className="d-flex flex-column justify-content-end py-4">
                <h1 className="mb-2 display-4">{item.title}</h1>
                <h3 className="mb-2">{item.subtitle}</h3>
                <div className="mb-2">
                  <Button href={item.link} variant="outline-light" className="btn-jumbotron">SEE MORE</Button>
                </div>
              </Col>
            </Row>

          </Container>
        </div>
      ))} */}


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
        // <Row key={`splitSection_${ind}`}>
        //   <Col className={`vh-100 d-flex order-md-${ind*2%4} py-2`} md>
        //     <Img
        //       fluid={item.image.childImageSharp.fluid}
        //       alt={item.image.name}
        //       className="h-100 w-100"
        //     />
        //   </Col>
        //   <Col className="d-flex flex-column justify-content-center text-center order-md-1" md>
        //     <h2 className="mb-2">{item.title}</h2>
        //     <p className="mb-2">{item.description}</p>
        //     <div>
        //       <Button href={item.link} variant="outline-light" className="btn-jumbotron">LEARN MORE</Button>
        //     </div>
        //   </Col>
        // </Row>
      ))}

      <TextContent title={textContent1.title}>
        <div dangerouslySetInnerHTML={{ __html: textContent1.text }} />
      </TextContent>


      <Separator title="Mission Components" />
      <Container>
        <CardDeck>
          { cardSection.map((card, ind) => (
            <CardGrow
              key={`cardSection_${ind}`}
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
              link={card.link}
              >
                <Img
                  fluid={card.image.childImageSharp.fluid}
                  alt={card.image.name}
                  className="card-grow-img"
                />
              </CardGrow>
            // <Card className="card-glow" key={`cardSection_${ind}`}>
            //   <Img
            //     fluid={card.image.childImageSharp.fluid}
            //     alt={card.image.name}
            //     className="card-glow-img"
            //   />
            //   <Card.Body>
            //     <Card.Title>{card.title}</Card.Title>
            //     <Card.Text>{card.text}</Card.Text>
            //     <Link to={card.link} className="stretched-link" />
            //   </Card.Body>
            // </Card>
          ))}
        </CardDeck>
      </Container>


      <Separator title="Image Gallery" />
      <div>
        <div className="px-1">
          <LightboxGallery photos={photos} columns={2} />
        </div>

        <div className="my-2 text-center">
          <Button href={gallery.link} variant="outline-light" className="btn-jumbotron">More Images</Button>
        </div>
      </div>


      <Separator title="Payloads" />
      <Container>
        <CardDeck>
          { cardSection2.cards.map((card, ind) => (
            <Card className="border-left-0 border-right-0 border-top-0" key={`cardSection2_${ind}`}>
              <Img
                fluid={card.image.childImageSharp.fluid}
                alt={card.image.name}
                style={{ height: `200px` }}
                // className="card-glow-img"
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
        <div className="my-2 text-center">
          <Button href={cardSection2.link} variant="outline-light" className="btn-jumbotron">More details</Button>
        </div>
      </Container>


      { verticalTimeline &&
        <VerticalTimeline data={verticalTimeline} />
        // <>
        // <Separator />
        // <Container>
        //   <h2 className="pt-3"></h2>
        //   <Row>
        //     <Col className="my-auto text-center" md={4}>
        //       <h2>{verticalTimeline.title}</h2>
        //     </Col>
        //     <Col className="text-center py-2" md={8}>
        //       <VerticalTimeline events={verticalTimeline.events} />
        //     </Col>
        //   </Row>
        // </Container>
        // </>
      }



      { textContent2 &&
        <TextContent title={textContent2.title}>
          <div dangerouslySetInnerHTML={{ __html: textContent2.text }} />
        </TextContent>
      }



      <Separator title="Related Links" />
      <ListItems items={relatedLinks} />
      {/* <Container>
        <Row>
          { relatedLinks.map( (items, ind) => (
            <Col key={`relatedLinks_${ind}`} sm>
              <ListItems items={items} />
            </Col>
          ))}
        </Row>
      </Container> */}

      {/* <Separator title="Latest Updates" />
      <Container>
        { data.latestUpdates.edges.map(({node}) => (
          <Row className="py-2" key={node.id}>
            <Col md>
              <Img
                fluid={node.image.childImageSharp.fluid}
                alt={node.image.name}
                style={{ height: `100%`, width: `100%`, objectFit: "contain" }}
              />
              </Col>

              <Col className="py-2" md>
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
      </div> */}



    </Layout>

  )
}
