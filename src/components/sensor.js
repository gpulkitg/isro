import React, { useState } from 'react'

import VisibilitySensor from 'react-visibility-sensor'



export default function Sensor({children}) {

  const [visible, setVisible] = useState(false)

  const handleOnChange = (isVisible) => (
    setVisible(isVisible)
  )


  return (
    <VisibilitySensor active={!visible} onChange={handleOnChange} partialVisibility>
      <div className={visible ? "animate-appear" : "opacity-zero"}>
        {children}
      </div>
    </VisibilitySensor>
  )
}
