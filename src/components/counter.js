import React, { useState } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

function Counter({ count, text }) {

  const [animated, setAnimated] = useState(false)

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !animated) {
      setAnimated(true)
    }
  }

  return (
    <div className="text-center">
      <VisibilitySensor active={!animated} onChange={handleVisibilityChange} delayedCall>
        <CountUp
          start={0}
          end={animated ? count : 0}
          duration={2}
          decimal=","
          className="counter"
          // data-sal="fade"
          // data-sal-duration="1000"
          // data-sal-easing="easeOutCirc"
        />
      </VisibilitySensor>
      <h3>{text}</h3>
      {/* <CountUp
        start={animated ? 0 : null}
        end={count}
        duration={2}
        decimal=","
        // className="countup counter"
        // easingFn="easeInSine"
      >
        {({ countUpRef }) => (
          <VisibilitySensor active={!animated} onChange={handleVisibilityChange} delayedCall>
            <span ref={countUpRef} className="countup counter"/>
          </VisibilitySensor>
        )}
      </CountUp> */}
    </div>
  )

}



export default Counter
