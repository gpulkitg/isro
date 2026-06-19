import React from 'react'

import { Card } from 'react-bootstrap'
import { PlayFill } from 'react-bootstrap-icons'


export default function CardVideo({ children, title, subtitle, onClick }) {


  return (

    <Card className="card-brighten">
      {children}
      <PlayFill style={{ position: `absolute`, top: `50%`, left: `50%`, width: `4em`, height: `4em`, transform: `translate(-50%, -50%)`, boxShadow: `0 0 10px 2px rgba(0,0,0,1)`, borderRadius: `50%`, backgroundColor: `red` }} />

      <Card.Body className="text-center">
        { title && <Card.Title>{title}</Card.Title> }
        { subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle> }
        {/* <Button onClick={() => setShowModalVideoPlayer(true)} className="stretched-link"/> */}
        <a style={{ cursor: 'pointer' }} onClick={onClick} className="stretched-link" alt="pointer"/>
      </Card.Body>
    </Card>
  )

}
