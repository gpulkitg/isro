import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
// import throttle from "lodash.throttle"
import { Navbar, Nav } from 'react-bootstrap'
import debounce from "lodash/debounce"

// import isro_logo from '../images/isro_icon_black.png'


export default function Header() {

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "common/isro_icon_black.png"}) {
        name
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)


  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true)
  const [positionTop, setPositionTop] = useState(true)

  // const [showLauncherDropdown, setShowLauncherDropdown] = useState(false)


  useEffect(() => {

    const handleScroll = () => {

      const currentScrollY = window.scrollY
      const scrollSensitivity = 10

      if (currentScrollY > lastScrollY + scrollSensitivity) {
        if (show) {
          setShow(false)
        }
      } else if (currentScrollY <= lastScrollY - scrollSensitivity && currentScrollY > scrollSensitivity){
        if (!show) {
          setShow(true)
          setPositionTop(false)
        }
      } else {
        setShow(true)
        setPositionTop(true)
      }

      setLastScrollY(currentScrollY)
    }

    const handleScrollDebounched = debounce(handleScroll, 50)

    document.addEventListener('scroll', handleScrollDebounched, { passive: true})

    return () => {
      document.removeEventListener('scroll', handleScrollDebounched)
    }

  }, [lastScrollY, show])


  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      // bg={positionTop ? "dark": ""}
      className={positionTop ? "navbar-bg-top" : "navbar-bg" }
      style={{ transform: `translate(0, ${show ? "0px": "-80px"})`, transition: `all 300ms linear` }}
      >

      <Navbar.Brand href="/">
        {/* <img src={isro_logo} width="30" height="30" className="d-inline-block align-top" alt="ISRO logo" /> */}
        <Img
          fixed={data.logo.childImageSharp.fixed}
          className="d-inline-block align-top"
          alt={data.logo.name}
        />
      </Navbar.Brand>
      <Navbar.Brand href="/" className="no-underline">ISRO</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" label="More"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          {/* <Nav.Link href="/missions" className="mx-4 text-white">Missions</Nav.Link> */}
          {/* <Navbar.Text className="mx-2"><Link to="/home" className="no-underline">Home</Link></Navbar.Text> */}
          <Navbar.Text className="mx-2"><Link to="/missions" className="no-underline">Missions</Link></Navbar.Text>
          <Navbar.Text className="mx-2"><Link to="/spacecraft" className="no-underline">Spacecraft</Link></Navbar.Text>
          <Navbar.Text className="mx-2"><Link to="/launchers" className="no-underline">Launchers</Link></Navbar.Text>
          <Navbar.Text className="mx-2"><Link to="/media" className="no-underline">Media</Link></Navbar.Text>
          <Navbar.Text className="mx-2"><Link to="/about" className="no-underline">About</Link></Navbar.Text>
          <Navbar.Text className="mx-2"><Link to="/contact" className="no-underline">Contact</Link></Navbar.Text>
          <Navbar.Text className="mx-2"><Link to="/updates" className="no-underline">Updates</Link></Navbar.Text>
          <Navbar.Text className="mx-2"><Link to="/test" className="no-underline">Test</Link></Navbar.Text>

          {/* <Dropdown
            as={Nav.Item}
            show={showLauncherDropdown}
            onMouseEnter={() => setShowLauncherDropdown(true)}
            onMouseLeave={() => setShowLauncherDropdown(false)}
            >
            <Navbar.Text><Link to="/launchers">Launchers</Link></Navbar.Text>
            <Dropdown.Menu>
              <NavDropdown.Item href="/launchers/pslv">PSLV</NavDropdown.Item>
              <NavDropdown.Item href="/launchers/gslv-mk-ii">GSLV MK II</NavDropdown.Item>
              <NavDropdown.Item href="/launchers/gslv-mk-iii">GSLV MK III</NavDropdown.Item>
              <NavDropdown.Item href="/launchers/sounding-rockets">Sounding Rockets</NavDropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

          {/* <NavDropdown title="Launchers" id="launchers-dropdown" show={showLauncherDropdown} onMouseEnter={() => setShowLauncherDropdown(true)} onMouseLeave={() => setShowLauncherDropdown(false)}>
            <NavDropdown.Item href="/launchers/pslv">PSLV</NavDropdown.Item>
            <NavDropdown.Item href="/launchers/gslv-mk-ii">GSLV MK II</NavDropdown.Item>
            <NavDropdown.Item href="/launchers/gslv-mk-iii">GSLV MK III</NavDropdown.Item>
            <NavDropdown.Item href="/launchers/sounding-rockets">Sounding Rockets</NavDropdown.Item>
          </NavDropdown> */}
          {/* <Nav.Link href="/launchers" className="mx-4 text-white">Launchers</Nav.Link> */}

        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )

}
