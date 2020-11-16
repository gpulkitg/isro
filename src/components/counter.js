import React, { useState, useEffect } from 'react'
// import Odometer from 'react-odometerjs'
import CountUp from 'react-countup';
// import "../../node_modules/odometer/themes/odometer-theme-minimal.css";
import VisibilitySensor from 'react-visibility-sensor'

function Counter({ count, text }) {
  // const [value, setValue] = useState(0)

  // useEffect(() => {
  //   setValue(count)
  // }, []);

  const [animated, setAnimated] = useState(false)

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !animated) {
      setAnimated(true)
    }
  }

  return (
    <div className="text-center">
      <CountUp
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
      </CountUp>
      {/* <Odometer
        value={value}
        format="(,ddd)"
        duration={2000}
        theme="minimal"
      /> */}
      <h3>{text}</h3>
    </div>
  )

}



export default Counter
