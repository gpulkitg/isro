import React from "react"
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'gatsby';
// import Img from "gatsby-image"

// import facebook_icon from '../images/facebook_icon.svg';

export default function Footer() {

  return (
    <Navbar variant="dark" expand="lg" bg="dark">
        <Nav className="mx-auto">
          <Nav.Link href="https://www.facebook.com" className="mx-4 text-white">Facebook</Nav.Link>
          <Navbar.Text className="mx-4"><Link to="/test">Instagram</Link></Navbar.Text>
          <Button href="https://www.facebook.com" variant="outline-light">Twitter</Button>
        </Nav>
    </Navbar>
  )

}
