import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
// import Img from "gatsby-image"
import { Navbar, Nav, Container } from 'react-bootstrap';

import Separator from '../components/separator'
import LinkVersatile from '../components/link-versatile'


export default function Footer() {

  const data = useStaticQuery(graphql`
    query {
      footerYaml {
        navbarLinks {
          text
          link
        }
        copyright
      }
    }
  `)

  // const { listLinks, navbarLinks } = data.footerYaml


  return (
    <Container>
      <Separator />

      <Navbar variant="dark" bg="dark">
        <Nav className="d-flex justify-content-center align-items-center flex-wrap w-100">
          { data.footerYaml.navbarLinks.map((item, ind) => (
            <Navbar.Text className="footer-item" key={`navbarLinks_${ind}`}>
              <LinkVersatile url={item.link} className="no-underline">{item.text}</LinkVersatile>
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
        {data.footerYaml.copyright}
        {/* Copyright © 2020 ISRO, All Rights Reserved. */}
      </div>

    </Container>
  )

}
