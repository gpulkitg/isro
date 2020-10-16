import React, { useState, useEffect } from 'react'
// import Odometer from 'react-odometerjs'
import CountUp from 'react-countup';
// import "../../node_modules/odometer/themes/odometer-theme-minimal.css";

function Counter({ count, text }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(count)
  }, []);

  return (
    <div className="text-center">
      <CountUp
        end={count}
        duration={2}
        decimal=","
        className="countup counter"
        // easingFn="easeInSine"
      />
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
