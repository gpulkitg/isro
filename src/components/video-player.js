import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { Player, BigPlayButton, LoadingSpinner } from 'video-react'

export default function VideoPlayer({ videoSrcURL, videoTitle, show, onHide }) {


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
      <Modal.Header>
        {videoTitle}
      </Modal.Header>

      <Modal.Body>
        <Player
          autoPlay={true}
          muted={true}
          preload="metadata"
          className="no-outline"
        >
          <source src={videoSrcURL} />
          <BigPlayButton position="center" />
          <LoadingSpinner />
        </Player>
        {/* <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={videoSrcURL}
            title={videoTitle}
            allowFullScreen
            >
            </iframe>
        </div> */}
        {/* <div>
          <ResponsiveEmbed aspectRatio="16by9">
            <embed type="video/mp4" src={videoSrcURL} />
          </ResponsiveEmbed>
        </div> */}
        {/* <div className="video">
          <iframe
            src={videoSrcURL}
            title={videoTitle}
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
