import React from 'react'
import { Link } from 'gatsby'
import Card from 'react-bootstrap/Card'


export default function CardBrighten({ imgSrc, alt, title, subtitle, text, link }) {

  return (
    <Card className="card-brighten">
      <Card.Img variant="top" src={imgSrc} alt={alt} className="card-brighten-img"/>
      {/* <img src={imgSrc} className="card-brighten-img" /> */}
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Subtitle>{subtitle}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <Link to={link} className="stretched-link" />
      </Card.Body>
    </Card>

  )
}
