import React from 'react'
import { Carousel } from 'react-bootstrap'


export default function CarouselGallery({ items }) {

  const imgStyles = {
    height: `100%`,
    width: `100%`,
    objectFit: `cover`,
    opacity: `linear-gradient(to bottom, 1, 0.6)`
  }

  return (

    <Carousel interval={null}>

      { items.map((item, ind) => (
        <Carousel.Item key={ind} className="item-gradient">
          <div className="vh-100 w-100">
            <img src={item.imgSrc} alt="" className="h-100 w-100" style={{ objectFit: `cover`, opacity: `0.8` }} />
          </div>
          <Carousel.Caption>
            <h3>{item.captionTitle}</h3>
            <br />
          </Carousel.Caption>
        </Carousel.Item>
      ))}

    </Carousel>
  )
}
