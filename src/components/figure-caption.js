import React from 'react'
import Figure from 'react-bootstrap/Figure';


export default function FigureCaption({ src, alt, caption }) {
  return (
    <div className="text-center">
      <Figure>
        <Figure.Image src={src} alt={alt} fluid/>
        <Figure.Caption className="text-center">
          {caption}
        </Figure.Caption>
      </Figure>
    </div>
  )
}
