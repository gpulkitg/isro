import React from 'react'
import { Link } from 'gatsby'
import Card from 'react-bootstrap/Card';


export default function CardBrighten({ title, subtitle, text, link, children }) {

  return (
    <Card className="card-brighten">
      {/* <Card.Img variant="top" src={imgSrc} alt={alt} className="card-glow-img"/> */}
      { children }
      <Card.Body className="text-center">
        { title && <Card.Title>{title}</Card.Title>}
        { subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
        { text && <Card.Text className="text-justify">{text}</Card.Text>}
        { link && <Link to={link} className="stretched-link" />}
      </Card.Body>
      {/* <Card.Footer>
        <Card.Text>{subtitle}</Card.Text>
      </Card.Footer> */}
    </Card>

  )
}
