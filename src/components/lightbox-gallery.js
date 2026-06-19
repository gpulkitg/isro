import React, { useState, useCallback } from 'react'

import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images"
// import Lightbox from 'react-image-lightbox'
// import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
// import Gallery from 'react-grid-gallery'

export default function LightboxGallery({ photos, columns }) {

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentPhoto(index);
    setLightboxIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentPhoto(0);
    setLightboxIsOpen(false);
  };


  return (

    <>
    {/* <Gallery images={photos} backdropClosesModal={true} /> */}

    <Gallery
      photos={photos}
      direction="column"
      columns={columns}
      onClick={openLightbox}
      margin={8}
    />

    {/* { lightboxIsOpen && (
      <Lightbox
        mainSrc={photos[currentPhoto].src}
        nextSrc={photos[(currentPhoto + 1) % photos.length].src}
        prevSrc={photos[(currentPhoto -1 + photos.length) % photos.length].src}
        onCloseRequest={() => {
          setLightboxIsOpen(false)
          setCurrentPhoto(0)
        }}
        onMovePrevRequest={() => setCurrentPhoto((currentPhoto - 1 + photos.length) % photos.length)}
        onMoveNextRequest={() => setCurrentPhoto((currentPhoto + 1) % photos.length)}
        animationOnKeyInput={true}
      />
    )} */}

    <ModalGateway>
      {lightboxIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentPhoto}
            views={photos.map(x => ({
              ...x,
              srcset: x.srcSet,
              // caption: x.title
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>

    </>

  )
}
