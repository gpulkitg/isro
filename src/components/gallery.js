import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


export default function Gallery({ images }) {

  return (
    <Carousel>
      { images.map( (image) => (
        <Carousel.Item>
          <img
            src={image}
            className="d-block w-100"
            alt="image"
            // style={{ 'objectFit': `cover` }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )

}
