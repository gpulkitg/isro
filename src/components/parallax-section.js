import React from 'react'
import { Row, Col } from 'react-bootstrap'
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
// import gslv_mk_iii_launcher from '../images/gslv_mk_iii/gslv_mk_iii_launcher.png'

// const ParallaxImage = () => (
//     <Parallax x={[0,0]} y={[-10,10]}>
//       <div className="w-100 p-4">
//         <img src={gslv_mk_iii_launcher} style={{  width: `100%` }}/>
//       </div>
//     </Parallax>
// );
//
// const ParallaxContent = () => (
//     <Parallax className="vh-100" x={[0,0]} y={[-50,50]}>
//
//       <div className="jumbotron-custom-title">
//         4000 kg
//       </div>
//       <div className="jumbotron-custom-title">
//         Payload to GTO
//       </div>
//       <div className="jumbotron-custom-text">
//         Capable of placing the 4 tonne class satellites of the GSAT series into Geosynchronous Transfer Orbits
//       </div>
//
//     </Parallax>
// );


export default function ParallaxSection() {

  return (

    <div className="parallax vh-100">


      <div className="parallax__layer parallax__layer--back">
        <Row>
          <Col lg={6}>
              {/* <img src={gslv_mk_iii_launcher} className="parallax-bg"/> */}
          </Col>
        </Row>
      </div>



      <div className="parallax__layer parallax__layer--base">

        {/* <Row className={`vh-100 justify-content-end`}>
          <Col lg={6} md={8} className={`d-flex flex-column justify-content-center text-center`} style={{ paddingTop: `4rem`, paddingBottom: `4rem`, paddingLeft: `2rem`, paddingRight: `2rem` }}>
            <div className="jumbotron-custom-title">
              4000 kg
            </div>
            <div className="jumbotron-custom-title">
              Payload to GTO
            </div>
            <div className="jumbotron-custom-text">
              Capable of placing the 4 tonne class satellites of the GSAT series into Geosynchronous Transfer Orbits
            </div>
          </Col>
        </Row>

        <Row className={`vh-100 justify-content-end`}>
          <Col lg={6} md={8} className={`d-flex flex-column justify-content-center text-center`} style={{ paddingTop: `4rem`, paddingBottom: `4rem` }}>
            <div className="jumbotron-custom-title">
              8000 kg
            </div>
            <div className="jumbotron-custom-title">
              Payload to LEO
            </div>
            <div className="jumbotron-custom-text">
              The powerful cryogenic stage enables placing heavy payloads into Low Earth Orbits of 600 km altitude.
            </div>
          </Col>
        </Row> */}

        <Row className={`vh-100 justify-content-end`}>
          <Col lg={6} md={8} className={`d-flex flex-column justify-content-center text-center`} style={{ paddingTop: `4rem`, paddingBottom: `4rem` }}>
            <div className="jumbotron-custom-title">
              Cryogenic Upper Stage<br />C25
            </div>
            <div className="jumbotron-custom-text">
              Powered by CE-20, India's largest cryogenic engine<br />Designed and developed by the Liquid Propulsion Systems Centre.
            </div>
          </Col>
        </Row>

        <Row className={`vh-100 justify-content-end`}>
          <Col lg={6} md={8} className={`d-flex flex-column justify-content-center text-center`} style={{ paddingTop: `4rem`, paddingBottom: `4rem` }}>
            <div className="jumbotron-custom-title">
              Solid Rocket Boosters<br />S200
            </div>
            <div className="jumbotron-custom-text">
              Two S200 solid rocket boosters provide huge amount of thrust required for lift off.<br />Developed at Vikram Sarabhai Space Centre.
            </div>
          </Col>
        </Row>

        <Row className={`vh-100 justify-content-end`}>
          <Col lg={6} md={8} className={`d-flex flex-column justify-content-center text-center`} style={{ paddingTop: `4rem`, paddingBottom: `4rem` }}>
            <div className="jumbotron-custom-title">
              Core Liquid Booster<br />L110
            </div>
            <div className="jumbotron-custom-text">
              Powered by two Vikas engines<br />Designed and developed at the Liquid Propulsion Systems Centre.
            </div>
          </Col>
        </Row>

      </div>


    </div>

    // {/* <ParallaxProvider>
    //
    //   <Row className="align-items-center">
    //     <Col lg={6}>
    //       <ParallaxImage />
    //     </Col>
    //     <Col lg={6} className={`d-flex flex-column text-center`} style={{ padding: `4rem` }}>
    //       <ParallaxContent />
    //       <ParallaxContent />
    //       <ParallaxContent />
    //
    //     </Col>
    //
    //   </Row>
    // </ParallaxProvider> */}

  )

}
