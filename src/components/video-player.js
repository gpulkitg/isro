import React from 'react'
import Modal from 'react-bootstrap/Modal'
// import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
// import { Player, BigPlayButton, LoadingSpinner } from 'video-react'

export default function VideoPlayer({ srcUrl, title, show, onHide }) {


  return (
    <Modal
      size="lg"
      aria-labelledby="modal-video-player"
      show={show}
      onHide={onHide}
      centered
      // dialogClassName="modal-video-player"
      // animation={false}
    >
      {/* <Modal.Header>
        {title}
      </Modal.Header> */}

      <Modal.Body>
        <video className="w-100 h-100" loop muted autoPlay controls playsInline>
          <source src={srcUrl} type="video/mp4" />
          Your browser does not support video tag
        </video>
        {/* <Player
          autoPlay={true}
          muted={true}
          preload="metadata"
          className="no-outline"
        >
          <source src={srcUrl} />
          <BigPlayButton position="center" />
          <LoadingSpinner />
        </Player> */}
        {/* <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={srcUrl}
            title={title}
            allowFullScreen
            >
            </iframe>
        </div> */}
        {/* <div>
          <ResponsiveEmbed aspectRatio="16by9">
            <embed type="video/mp4" src={srcUrl} />
          </ResponsiveEmbed>
        </div> */}
        {/* <div className="video">
          <iframe
            src={srcUrl}
            title={title}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowfullscreen
          />
        </div> */}
      </Modal.Body>
    </Modal>


  )

}
