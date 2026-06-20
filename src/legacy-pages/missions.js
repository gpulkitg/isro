import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import { Container, Button } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ListItems from '../components/list-items'
import Separator from '../components/separator'
// import TabSection from '../components/tab-section'
import JumbotronImg from '../components/jumbotron-img'
import SplitSection from '../components/split-section'
// import VisibilitySensor from 'react-visibility-sensor'

export const query = graphql`
  query {
    missionsYaml {
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
      listTrendingMissions {
        title
        content {
          link
          text
        }
      }
      # tabSection {
      #   title
      #   content {
      #     text
      #     link
      #   }
      # }
    }
    allMasterListYaml(sort: {order: DESC, fields: launchDate}, limit: 4) {
  	  edges {
  	    node {
          id
  	      launcherName
          launcherLink
          spacecraftName
          spacecraftLink
  	    }
  	  }
  	}
  }
`



export default function MissionsPage({ data }) {

  const {
    seo,
    jumbotronImg,
    splitSection,
    listTrendingMissions,
    // tabSection,
  } = data.missionsYaml

  let listLatestMissions = {
    "title": "Latest",
    "content": [],
  }

  data.allMasterListYaml.edges.map(({ node }, ind) => {
    let lnk = node.launcherLink ? node.launcherLink : node.spacecraftLink
    let txt = node.launcherLink ? node.launcherName : node.spacecraftName

    listLatestMissions.content.push({
      "text": txt,
      "link": lnk,
    })
  })

  const listAllMissions = [listTrendingMissions, listLatestMissions]



  return (

    <Layout>
      <SEO title={seo.title} />

      { jumbotronImg.map((item, ind) =>
        // <VisibilitySensor key={`jumbotronImg_${ind}`}>
        //   {({isVisible}) =>
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
              // isVisible={isVisible}
              >
                <Img
                  fluid={item.image.childImageSharp.fluid}
                  alt={item.image.name}
                  // className="animate-appear-fast"
                  style={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}
                  imgStyle={{ opacity: `0.7` }}
                />
            </JumbotronImg>
        //   }
        //
        // </VisibilitySensor>
        )}


      {/* <div className="jumbotron jumbotron-container">
        <Img
          fluid={jumbotronImg.image.childImageSharp.fluid}
          alt={jumbotronImg.image.name}
          style={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}
          imgStyle={{ opacity: `0.7` }}
        />

        <Container className="lead">
          <Row className="vh-100 justify-content-start">
            <Col lg={6} md={8} className="d-flex flex-column justify-content-center py-4">
              <h1 className="mb-2 display-4">{jumbotronImg.title}</h1>
              <h3 className="mb-2">{jumbotronImg.subtitle}</h3>
              <div className="mb-2">
                <Button href={jumbotronImg.link} variant="outline-light" className="btn-jumbotron">MORE INFO</Button>
              </div>
            </Col>
          </Row>

        </Container>
      </div> */}


      { splitSection.map((item, ind) =>
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
        )}


        <Separator />
        <ListItems list={listAllMissions} />

        <div className="text-center my-1">
          <Button href="/list-of-spacecrafts" variant="outline-light" className="btn-jumbotron">
            LIST OF ALL MISSIONS
          </Button>
        </div>
        {/* <Separator title="Glossary" />
        <TabSection items={tabSection} /> */}


        {/* { splitSection.map((item, ind) => (
          <Row key={`splitSection_${ind}`}>
            <Col className={`vh-100 d-flex order-md-${ind*2%4} py-2`} md>
              <Img
                fluid={item.image.childImageSharp.fluid}
                alt={item.image.name}
                className="h-100 w-100"
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center order-md-1" md>
              <h2 className="mb-2">{item.title}</h2>
              <p className="mb-2">{item.description}</p>
              <h4 className="mb-2">{item.subtitle}</h4>
              <div>
                <Button href={item.link} variant="outline-light" className="btn-jumbotron">LEARN MORE</Button>
              </div>
            </Col>
          </Row>
        ))} */}





      </Layout>
  )

}
