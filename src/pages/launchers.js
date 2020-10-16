import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import { Container, Row, Col, Figure, Button } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextContent from '../components/text-content'
import ListItems from '../components/list-items'
import SplitSection from '../components/split-section'
import JumbotronImg from '../components/jumbotron-img'



export const query = graphql`
  query {
    yaml: launchersLandingYaml {
      seo {
        title
      }
      jumbotronImg {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title {
          line
        }
      }
      textContent1 {
        title
        text
      }
      splitSections {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content {
          title
          text
          slug
          button
        }
      }
      launchersList {
        title
        contents {
          slug
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
    splitSections,
    launchersList,
    figure,
  } = data.yaml

  return (
    <Layout>
      <SEO title={seo.title} />


      <div className="jumbotron jumbotron-container">
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
      </div>
      {/* <JumbotronImg imgSrc={cus_test} horizontalPosition="center" verticalPosition="center" contentAlignment="center">
        { jumbotronImg.overlay.map(({title}, ind) => (
          <h1 className="display-4" key={`jumbotronImg__${ind}`}>{title}</h1>
        ))}
      </JumbotronImg> */}



      <Container>
        <TextContent title={textContent1.title}>
          <div dangerouslySetInnerHTML={{__html: textContent1.text}} />
          {/* { textContent1.text.map(({ para }, ind) => (
             <p key={`textContent1_${ind}`}>{para}</p>
          ))} */}
          {/* <p>
            Launchers or Launch Vehicles are used to carry spacecraft to space. India has two operational launchers: <Link to="#" className="link-underline">Polar Satellite Launch Vehicle (PSLV)</Link> and <Link to="#" className="link-underline">Geosynchronous Satellite Launch Vehicle (GSLV)</Link>.
          </p>
          <p>
            GSLV with indigenous Cryogenic Upper Stage has enabled the launching up to 2 tonne class of communication satellites. The next variant of GSLV is GSLV Mk III, with indigenous high thrust cryogenic engine and stage, having the capability of launching 4 tonne class of communication satellites.
          </p> */}
        </TextContent>
      </Container>

      <Container>

        { splitSections.map((splitSection, ind) => (
          <Row key={`splitSections_${ind}`}>
            <Col className={`d-flex order-md-${ind*2%4} p-2`} md>
              <Img
                fluid={splitSection.image.childImageSharp.fluid}
                className="vh-100 w-100"
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center text-center order-md-1" md>
              <h1 className="mb-2">{splitSection.content.title}</h1>
              <p className="mb-2">{splitSection.content.text}</p>
              <div className="mb-2">
                <Button href={splitSection.content.slug} variant="outline-light" className="btn-jumbotron">{splitSection.content.button}</Button>
              </div>
            </Col>
          </Row>
        ))}


        {/* <SplitSection imgSrc={pslv_c44} imgObjectFit="cover" textAlignment="center">
            <h1 className="mb-4">PSLV</h1>
            <p className="mb-4">
              Polar Satellite Launch Vehicle was developed to launch Low Earth Orbit satellites into Polar and Sun Synchronous Orbits. It has since proved its versatility by launching Geosynchronous, Lunar and Interplanetary spacecraft successfully.
            </p>
            <div className="mb-4">
              <Button href="/about" variant="outline-light" className="btn-jumbotron">MORE INFO</Button>
            </div>

        </SplitSection>

        <SplitSection imgSrc={gslv_f11_gsat_7a} imgObjectFit="cover" textPosition="left" textAlignment="center">
          <h1 className="mb-4">GSLV</h1>
          <p className="mb-4">
            Geosynchronous Satellite Launch Vehicle was developed to launch the heavier INSAT class of Geosynchronous satellites into orbit. In its third and final stage, GSLV uses the indigenously developed Cryogenic Upper Stage.
          </p>
          <div className="mb-4">
            <Button href="/about" variant="outline-light" className="btn-jumbotron">MORE INFO</Button>
          </div>
        </SplitSection>

        <SplitSection imgSrc={sounding_rocket} imgObjectFit="cover" textAlignment="center">
          <h1 className="mb-4">Sounding Rocket</h1>
          <p className="mb-4">
            ISRO launches smaller rockets from the Rohini series on suborbital and atmospheric flights for aeronomy and meteorological studies. ATV, ISRO's heaviest sounding rocket, can be used for microgravity experiments and for precursor experiments to characterise new technologies.
          </p>
          <div className="mb-4">
            <Button href="/about" variant="outline-light" className="btn-jumbotron">MORE INFO</Button>
          </div>
        </SplitSection> */}

      </Container>



      <br />

      <TextContent title="All launchers">
      </TextContent>

      <Container>
        <Row>
          { launchersList.map( (items, ind) => (
            <Col key={ind} sm>
              <ListItems items={items} />
            </Col>
          ))}
          {/* { listLaunchers.map( (items, ind) => (
            <Col key={ind} sm>
              <ListItems items={items} />
            </Col>
          ))} */}
        </Row>
      </Container>
      

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


      <Container>
        <TextContent title={textContent2.title}>
          <div dangerouslySetInnerHTML={{ __html: textContent2.text }} />
          {/* <p>
            In order to achieve high accuracy in placing satellites into their orbits, a combination of accuracy, efficiency, power and immaculate planning are required. ISRO's Launch Vehicle Programme spans numerous centres and employs over 5,000 people.
          </p>
          <p>
            <a href="http://www.vssc.gov.in" className="link-underline">Vikram Sarabhai Space Centre</a>, located in Thiruvananthapuram, is responsible for the design and development of launch vehicles.
            <br />
            <a href="http://www.lpsc.gov.in" className="link-underline">Liquid Propulsion Systems Centre</a> and <Link to="/about/isro-propulsion-complex" className="link-underline">ISRO Propulsion Complex</Link>, located at Valiamala and Mahendragiri respectively, develop the liquid and cryogenic stages for these launch vehicles.
            <br />
            <Link to="/about/satish-dhawan-space-centre-sdsc-shar" className="link-underline">Satish Dhawan Space Centre, SHAR</Link>, is the space port of India and is responsible for integration of launchers. It houses two operational launch pads from where all GSLV and PSLV flights take place.
          </p> */}
        </TextContent>
      </Container>



    </Layout>

  )

}
