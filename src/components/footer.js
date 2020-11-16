import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
// import Img from "gatsby-image"
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';

import Separator from '../components/separator'
import FlexibleLink from '../components/flexible-link'


export default function Footer() {

  const data = useStaticQuery(graphql`
    query {
      footerYaml {
        # listLinks {
        #   col {
        #     text
        #     link
        #   }
        # }
        navbarLinks {
          text
          link
        }
      }
    }
  `)

  // const { listLinks, navbarLinks } = data.footerYaml


  return (
    <Container>

      <Navbar variant="dark" bg="dark">
        <Nav className="d-flex justify-content-center align-items-center flex-wrap w-100">
          { data.footerYaml.navbarLinks.map((item, ind) => (
            <Navbar.Text className="footer-item" key={`navbarLinks_${ind}`}>
              <FlexibleLink url={item.link}>{item.text}</FlexibleLink>
            </Navbar.Text>
            // <Navbar.Text className="footer-item">
            //   <a href="http://www.facebook.com/isro" className="no-underline">
            //     <img src={facebook_icon} width="50" height="50" />
            //   </a>
            // </Navbar.Text>
            // <Navbar.Text className="footer-item">
            //   <a href="http://www.twitter.com/isro" className="no-underline">
            //     <img src={twitter_icon} width="50" height="50" />
            //   </a>
            // </Navbar.Text>
            // <Nav.Link href="https://www.facebook.com" className="footer-item text-white">Facebook</Nav.Link>
            // <Button href="https://www.facebook.com" variant="outline-light">Twitter</Button>
          ))}
        </Nav>
      </Navbar>

      <div className="text-center text-muted mb-2">
        Copyright © 2020 ISRO, All Rights Reserved.
      </div>

    </Container>
  )

}
