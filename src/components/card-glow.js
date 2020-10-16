import React from 'react'
import { Link } from 'gatsby'
import Card from 'react-bootstrap/Card';


export default function CardGlow({ imgSrc, alt, title, subtitle, text, link }) {

  return (
    <Card className="card-glow">
      <Card.Img variant="top" src={imgSrc} alt={alt} className="card-glow-img"/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{subtitle}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <Link to={link} className="stretched-link" />

      </Card.Body>
      {/* <Card.Footer>
        <Card.Text>{subtitle}</Card.Text>
      </Card.Footer> */}
    </Card>

  )
}
