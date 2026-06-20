"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

const NAV_LINKS: [label: string, href: string][] = [
  ["Missions", "/missions"],
  ["Spacecraft", "/spacecraft"],
  ["Launchers", "/launchers"],
  ["Media", "/media"],
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Updates", "/updates"],
];

// Navbar that hides on scroll-down and reveals on scroll-up.
export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const [positionTop, setPositionTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const sensitivity = 10;
      if (y > lastScrollY + sensitivity) {
        if (show) setShow(false);
      } else if (y <= lastScrollY - sensitivity && y > sensitivity) {
        if (!show) {
          setShow(true);
          setPositionTop(false);
        }
      } else {
        setShow(true);
        setPositionTop(true);
      }
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, show]);

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      className={positionTop ? "navbar-bg-top" : "navbar-bg"}
      style={{
        transform: `translate(0, ${show ? "0px" : "-80px"})`,
        transition: "all 300ms linear",
      }}
    >
      <Navbar.Brand href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/isro_logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="ISRO logo"
        />
      </Navbar.Brand>
      <Navbar.Brand href="/" className="no-underline">
        ISRO
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" label="More" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          {NAV_LINKS.map(([label, href]) => (
            <Navbar.Text className="mx-2" key={href}>
              <Link href={href} className="no-underline">
                {label}
              </Link>
            </Navbar.Text>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
