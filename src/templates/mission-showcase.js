import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, CardDeck, Button, Card, Figure, Row, Col } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LightboxGallery from '../components/lightbox-gallery'
import TextContent from '../components/text-content'
import Separator from '../components/separator'
import VerticalTimeline from '../components/vertical-timeline'
import JumbotronImg from '../components/jumbotron-img'
import SplitSection from '../components/split-section'
import CardGrow from '../components/card-grow'
import RelatedSection from '../components/related-section'
// import Sensor from '../components/sensor'


export const query = graphql`
  query($slug: String!, $tag: String) {
    missionsShowcaseYaml(slug: {eq: $slug}) {
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
              ...GatsbyImageSharpFluid_withWebp
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
              ...GatsbyImageSharpFluid_withWebp
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
              ...GatsbyImageSharpFluid_withWebp
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
                ...GatsbyImageSharpFluid_withWebp
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
                ...GatsbyImageSharpFluid_withWebp
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
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        caption
      }
    }
    masterListYaml(tag: {eq: $tag}) {
      launcherName
      launcherLink
      spacecraftName
      spacecraftLink
      docs {
        text
        doc {
          id
          publicURL
        }
      }
      otherLinks {
        text
        link
      }
    }
    allGalleriesImageYaml(filter: {tag: {eq: $tag}}) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
    allGalleriesVideoYaml(filter: {tag: {eq: $tag}}) {
      edges {
        node {
          id
          title
          video {
            id
            publicURL
          }
        }
      }
    }
    allUpdatesYaml(filter: {tag: {eq: $tag}}, limit: 5) {
      edges {
        node {
          id
          title
          date(formatString: "D MMM YYYY")
          slug
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
    // relatedLinks,
  } = data.missionsShowcaseYaml

  const {
    launcherName,
    launcherLink,
    spacecraftName,
    spacecraftLink,
    docs,
    otherLinks,
  } = data.masterListYaml

  // add spacecraft, launcher page links
  const pageLinks = [
    {
      "link": launcherLink,
      "text": launcherName
    },
    {
      "link": spacecraftLink,
      "text": spacecraftName
    }
  ]
  const otherLinksNew = otherLinks ? [...pageLinks, ...otherLinks] : pageLinks


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

      <SEO title={seo.title}  />

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
              // className="animate-appear-fast"
              style={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}
              imgStyle={{ opacity: `0.7` }}
            />
          </JumbotronImg>
        ))}


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


      {cardSection &&
        <>
        <Separator title="Mission Components" />
        <Container>
          <Row>
            { cardSection.map((card, ind) => (
              <Col
                key={`cardSection_${ind}`}
                className="mb-2"
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="easeOutCirc"
                lg={3} md={6}
                >
                <CardGrow
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
              </Col>
            ))}
          </Row>
          {/* <Sensor>
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
              ))}
            </CardDeck>
          </Sensor> */}
        </Container>
        </>
      }


      { gallery &&
        <>
        <Separator title="Image Gallery" />
        <div
          className="px-1"
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-easing="easeOutCirc"
          >
          <LightboxGallery photos={photos} columns={2} />
        </div>

        <div className="my-2 text-center">
          <Button href={gallery.link} variant="outline-light" className="btn-jumbotron">More Images</Button>
        </div>
        </>
      }

      { cardSection2 &&
        <>
        <Separator title="Payloads" />
        <Container>
          <Row>
            { cardSection2.cards.map((card, ind) => (
              <Col
                key={`cardSection2_${ind}`}
                className="mb-2"
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="easeOutCirc"
                lg={3} md={6}
                >
                <Card className="border-0">
                  <Img
                    fluid={card.image.childImageSharp.fluid}
                    alt={card.image.name}
                    style={{ height: `200px` }}
                    imgStyle={{ opacity: `0.7`}}
                  />
                  <Card.Body>
                    <Card.Subtitle>{card.title}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="mb-2 text-center">
            <Button href={cardSection2.link} variant="outline-light" className="btn-jumbotron">More details</Button>
          </div>
          {/* <Sensor>
            <CardDeck>
              { cardSection2.cards.map((card, ind) => (
                <Card key={`cardSection2_${ind}`} className="border-0">
                  <Img
                    fluid={card.image.childImageSharp.fluid}
                    alt={card.image.name}
                    style={{ height: `200px` }}
                    imgStyle={{ opacity: `0.7`}}
                    // className="card-glow-img"
                  />
                  <Card.Body>
                    <Card.Subtitle>{card.title}</Card.Subtitle>
                  </Card.Body>
                </Card>
              ))}
            </CardDeck>
            <div className="my-2 text-center">
              <Button href={cardSection2.link} variant="outline-light" className="btn-jumbotron">More details</Button>
            </div>
          </Sensor> */}
        </Container>
        </>
      }


      { verticalTimeline &&
        <VerticalTimeline data={verticalTimeline} />
      }



      { textContent2 &&
        <TextContent title={textContent2.title}>
          <div dangerouslySetInnerHTML={{ __html: textContent2.text }} className="mb-2" />

          { textContent2.image &&
            <Figure className="w-100 mb-2">
              <Img
                fluid={textContent2.image.childImageSharp.fluid}
                alt={textContent2.image.name}
                style={{ maxHeight: `400px` }}
                imgStyle={{ objectFit: `contain` }}
              />
              <Figure.Caption className="text-center">{textContent2.caption}</Figure.Caption>
            </Figure>
          }
        </TextContent>
      }


      <RelatedSection
        otherLinks={otherLinksNew}
        docs={docs}
        galleriesImage={data.allGalleriesImageYaml}
        galleriesVideo={data.allGalleriesVideoYaml}
        updates={data.allUpdatesYaml}
      />



    </Layout>

  )
}
