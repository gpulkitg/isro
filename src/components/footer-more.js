import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

// import facebook_icon from '../images/common/icons8-facebook-circled.svg'
// import twitter_icon from '../images/common/icons8-twitter-circled.svg'


import Separator from '../components/separator'
import FlexibleLink from '../components/flexible-link'


export default function FooterMore() {

  const data = useStaticQuery(graphql`
    query {
      footerYaml {
        listLinks {
          col {
            text
            link
          }
        }
        socialMediaLinks {
          text
          link
          icon {
            name
            publicURL
          }
        }
      }
    }
  `)



  return (
    <div className="bg-secondary">
      <Container>

        <Row>
          { data.footerYaml.listLinks.map(({ col }, index) => (
            <Col key={`col_${index}`} className="p-1" md>
              { col.map((item, ind) => (
                <div key={`${index}_item_${ind}`} className="mb-1">
                  <FlexibleLink url={item.link}>{item.text}</FlexibleLink>
                </div>
              ))}
            </Col>
          ))}

          <Col md>
            <Row>
              <Col className="text-center py-2">
                <h5 className="mb-1">FOLLOW US</h5>
                { data.footerYaml.socialMediaLinks.map((item, ind) => (
                  <a href={item.link} className="no-underline" target="_blank" key={`socialMediaLinks_${ind}`}>
                    <img src={item.icon.publicURL} width="50" height="50" alt={item.text} />
                    {" "}
                  </a>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    </div>

  )

}
