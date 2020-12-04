import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import { Container, Row, Col, Figure, Button } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextContent from '../components/text-content'
import ListItems from '../components/list-items'
import Separator from '../components/separator'
import JumbotronImg from '../components/jumbotron-img'
import SplitSection from '../components/split-section'


export const query = graphql`
  query {
    launchersYaml {
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
      listLaunchers {
        title
        content {
          link
          text
        }
      }
      figure {
        image {
          name
          extension
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        caption
      }
      textContent2 {
        title
        text
      }
    }
  }
`


export default function LaunchersPage({ data }) {

  const {
    seo,
    jumbotronImg,
    textContent1,
    textContent2,
    splitSection,
    listLaunchers,
    figure,
  } = data.launchersYaml

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
      {/* <div className="jumbotron jumbotron-container">
        <Img
          fluid={jumbotronImg.image.childImageSharp.fluid}
          style={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}
          imgStyle={{ opacity: `0.8` }}
        />

        <Container className="lead">
          <Row className="vh-100 justify-content-center">
            <Col lg={6} md={8} className="d-flex flex-column justify-content-center text-center py-4">
              { jumbotronImg.title.map(( {line}, ind) => (
                <h1 className="display-4" key={`jumbotronImg_${ind}`}>{line}</h1>
              ))}
            </Col>
          </Row>
        </Container>
      </div> */}


      <TextContent title={textContent1.title}>
        <div dangerouslySetInnerHTML={{__html: textContent1.text}} />
      </TextContent>


      <Separator title="All launchers" />
      <ListItems items={listLaunchers} />


      <Figure className="vh-100 w-100">
        { figure.image.extension === "svg" ? (
          <Figure.Image className="h-100 w-100" src={figure.image.publicURL} alt={figure.image.name} style={{ objectFit: `contain`, opacity: `0.8` }} />
        ) : (
          <Img
            fluid={figure.image.childImageSharp.fluid}
            className="h-100 w-100"
            imgStyle={{ opacity: `0.8` }}
          />
        )}
        <Figure.Caption className="text-center">{figure.caption}</Figure.Caption>
      </Figure>


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
      {/* <Container>
        { splitSection.map((item, ind) => (
          <Row key={`splitSection_${ind}`}>
            <Col className={`vh-100 d-flex order-md-${ind*2%4} py-2`} md>
              <Img
                fluid={item.image.childImageSharp.fluid}
                className="h-100 w-100"
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center text-center order-md-1" md>
              <h1 className="mb-2">{item.content.title}</h1>
              <p className="mb-2">{item.content.text}</p>
              <div>
                <Button href={item.content.slug} variant="outline-light" className="btn-jumbotron">{item.content.button}</Button>
              </div>
            </Col>
          </Row>
        ))}
      </Container> */}



      <TextContent title={textContent2.title}>
        <div dangerouslySetInnerHTML={{ __html: textContent2.text }} />
      </TextContent>



    </Layout>

  )

}
