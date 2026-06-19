import React from 'react'

import Container from 'react-bootstrap/Container';
// import VisibilitySensor from 'react-visibility-sensor'


export default function TextContent({ title, children }) {

  // const [visible, setVisible] = useState(false)
  //
  // const handleVisibilityChange = (isVisible) => {
  //   setVisible(isVisible)
  // }



  return (
    <Container className="pt-3 pb-2">

      <div
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="easeOutCubic"
        >
        { title && <h2 className="text-center mb-2">{title}</h2> }
        {children}
      </div>

      {/* <VisibilitySensor active={!visible} onChange={handleVisibilityChange} partialVisibility>
        <div className={visible ? "animate-appear" : "opacity-zero"}>
          <h2 className="text-center mb-2">{title}</h2>
          {children}
        </div>
      </VisibilitySensor> */}

    </Container>
  )


}
