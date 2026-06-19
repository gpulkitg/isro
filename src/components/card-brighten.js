import React from 'react'
import { Link } from 'gatsby'
import Card from 'react-bootstrap/Card'
import LinkVersatile from '../components/link-versatile'

export default function CardBrighten({ title, subtitle, text, link, doc, children }) {

  return (
    <Card className="card-brighten">
      { children }
      <Card.Body className="text-center">
        { title && <Card.Title>{title}</Card.Title>}
        { subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
        { text && <Card.Text className="text-justify">{text}</Card.Text>}
        { link && <LinkVersatile url={link} className="stretched-link" />}
        { doc && <a href={doc.publicURL} className="stretched-link" target="_blank" rel="noreferrer" />}
      </Card.Body>
      {/* <Card.Footer>
        <Card.Text>{subtitle}</Card.Text>
      </Card.Footer> */}
    </Card>

  )
}
