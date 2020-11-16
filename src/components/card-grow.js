import React from 'react'
import { Link } from 'gatsby'
import Card from 'react-bootstrap/Card';


// export default function CardGrow({ imgSrc, alt, title, subtitle, text, link }) {
export default function CardGrow({ title, subtitle, text, link, children }) {

  return (
    <Card className="card-grow">
      {/* <Card.Img variant="top" src={imgSrc} alt={alt} className="card-glow-img"/> */}
      { children }
      <Card.Body>
        { title && <Card.Title>{title}</Card.Title>}
        { subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
        { text && <Card.Text>{text}</Card.Text>}
        { link && <Link to={link} className="stretched-link" />}
      </Card.Body>
    </Card>

  )
}
