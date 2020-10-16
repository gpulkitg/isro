import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'gatsby'

export default function CardZoom({ imgSrc, title, link }) {
  return (

    <Card text="white" className="card-zoom">
        <Card.Img variant="top" src={imgSrc} className="card-zoom-img"/>
        <Card.ImgOverlay>
            <Card.Title className="card-zoom-title">{title}</Card.Title>
        </Card.ImgOverlay>
        <Link to={link} className="stretched-link"></Link>
    </Card>

  )
}
