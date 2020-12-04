import React from "react"
import { graphql, useStaticQuery } from 'gatsby';

import { Container, Row, Col } from 'react-bootstrap';

// import Separator from '../components/separator'
import LinkVersatile from '../components/link-versatile'
// import facebook_icon from '../images/common/icons8-facebook-circled.svg'
// import twitter_icon from '../images/common/icons8-twitter-circled.svg'


export default function FooterMore() {

  const data = useStaticQuery(graphql`
    query {
      footerMoreYaml {
        listLinks {
          col {
            text
            link
            doc {
              publicURL
            }
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
          { data.footerMoreYaml.listLinks.map(({ col }, index) => (
            <Col key={`col_${index}`} className="p-1" md>
              { col.map((item, ind) => (
                <div key={`${index}_item_${ind}`} className="mb-1">
                  { item.link &&
                    <LinkVersatile url={item.link} className="no-underline">{item.text}</LinkVersatile>
                  }
                  { item.doc &&
                    <a href={item.doc.publicURL} className="no-underline" target="_blank" rel="noreferrer enclosure">{item.text}</a>
                  }
                </div>
              ))}
            </Col>
          ))}

          <Col md>
            <Row>
              <Col className="text-center py-2">
                <h5 className="mb-1">FOLLOW US</h5>
                { data.footerMoreYaml.socialMediaLinks.map((item, ind) => (
                  <a href={item.link} className="no-underline" target="_blank" rel="noreferrer external" key={`socialMediaLinks_${ind}`}>
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
