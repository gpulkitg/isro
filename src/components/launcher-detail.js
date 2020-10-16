import React from 'react'
import { Link } from 'gatsby'

import { Container, Row, Col, Tabs, Tab, Figure, Button } from 'react-bootstrap'

import JumbotronVideo from '../components/jumbotron-video'
import JumbotronImg from '../components/jumbotron-img'
import ClickReveal from '../components/click-reveal'
import ParallaxSection from '../components/parallax-section'
import TextContent from '../components/text-content'
import FigureCaption from '../components/figure-caption'
import { DynamicTabs } from '../components/dynamic-tabs'
import CarouselSection from '../components/carousel-section'
import TableList from '../components/table-list'
import SplitSection from '../components/split-section'
import FixBgSection from '../components/fix-bg-section'


import GSLV_MkIII_teaser_cover from '../videos/GSLV_MkIII_teaser_cover.mp4'
import gslv_mk_iii_launcher from '../images/gslv_mk_iii/gslv_mk_iii_launcher.png'
import gslv_mk_iii_m1_2 from '../images/gslv_mk_iii/gslv_mk_iii_m1_2.jpg'
import gslv_mk_iii_07 from '../images/gslv_mk_iii/gslv_mk_iii_07.jpg'
import gslv_mk_iii_d2_2 from '../images/gslv_mk_iii/gslv_mk_iii_d2_2.jpg'
import gslv_mk_iii_d2_3 from '../images/gslv_mk_iii/gslv_mk_iii_d2_3.jpg'
import cus_test from '../images/cus_test.jpg'



const vehicleSpecs = {
  body: [
    ['Height', '43.43 m'],
    ['Vehicle Diameter', '4.0 m'],
    ['Heat Shield (Payload Fairing) Diameter', '5.0 m'],
    ['Number of Stages', '3'],
    ['Lift Off Mass', '640 tonnes'],
  ],
}

const listOfLaunches = {
  head: [
    "Title",
    "Launch Date",
    "Payload",
  ],
  body: [
    [
      "GSLV-Mk III - M1 / Chandrayaan-2 Mission", "Jul 22, 2019", "Chandrayaan2"
    ],
    [
      "GSLV Mk III-D2 / GSAT-29 Mission", "Nov 14, 2018", "GSAT-29"
    ],
    [
      "GSLV Mk III-D1/GSAT-19 Mission", "Jun 05, 2017", "GSAT-19"
    ],
    [
      "LVM-3/CARE Mission", "Dec 18, 2014", "Crew module Atmospheric Re-entry Experiment (CARE)"
    ],
  ]
}

const fixBgData = [
  {
    title: "4000 kg",
    subtitles: ["Payload", "Geosynchronous Transfer Orbit"],
  },
  {
    title: "8000 kg",
    subtitles: ["Payload", "Low Earth Orbit"],
  },

]


export default function LauncherDetail() {

  return (
    <>


    <JumbotronImg imgSrc={gslv_mk_iii_d2_2} horizontalPosition="center" verticalPosition="center" contentAlignment="center">
      {/* <div className="jumbotron-img-title"> */}
        <h1 className="mb-4">GSLV MK III</h1>
      {/* </div> */}
      <div className="jumbotron-img-text">
        India's most powerful launcher
      </div>
    </JumbotronImg>


    <FixBgSection imgSrc={gslv_mk_iii_d2_3} contents={fixBgData} />


    <Container>
      <SplitSection imgSrc={gslv_mk_iii_launcher} imgObjectFit="contain">
        <h1 className="text-center">Vehicle Specifications</h1>
        <div className="py-4">
          <TableList data={vehicleSpecs} />
        </div>
      </SplitSection>
    </Container>


    <TextContent title="About launcher">
      <p>
        GSLV MkIII, chosen to launch Chandrayaan-2 spacecraft, is a three-stage heavy lift launch vehicle developed by ISRO. The vehicle has two solid strap-ons, a core liquid booster and a cryogenic upper stage.
      </p>
      <p>
        GSLV Mk III is designed to carry 4 ton class of satellites into Geosynchronous Transfer Orbit (GTO) or about 10 tons to Low Earth Orbit (LEO), which is about twice the capability of the GSLV Mk II.
      </p>
      <p>
        The two strap-on motors of GSLV Mk III are located on either side of its core liquid booster. Designated as ‘S200’, each carries 205 tons of composite solid propellant and their ignition results in vehicle lift-off. S200s function for 140 seconds. During strap-ons functioning phase, the two clustered Vikas liquid Engines of L110 liquid core booster will ignite 114 sec after lift -off to further augment the thrust of the vehicle. These two engines continue to function after the separation of the strap-ons at about 140 seconds after lift -off.
      </p>
    </TextContent>


    {/* <Container>
      <DynamicTabs />
    </Container> */}

    <CarouselSection />



    <JumbotronVideo videoSrc={GSLV_MkIII_teaser_cover}>
      <h1>GSLV MK III</h1>
      <h1>CHANDRAYAAN 2 LAUNCH</h1>
      <div>
        <Button href="/about" variant="outline-light">WATCH FULL VIDEO</Button>
      </div>
    </JumbotronVideo>



    <TextContent title="Launches till date">

      <TableList data={listOfLaunches} />

      <br />
      <p>
        The first experimental flight of LVM3, the LVM3-X/CARE mission lifted off from Sriharikota on December 18, 2014 and successfully tested the atmospheric phase of flight. Crew module Atmospheric Reentry Experiment was also carried out in this flight. The module reentered, deployed its parachutes as planned and splashed down in the Bay of Bengal.
      </p>

      <p>
        The first developmental flight of GSLV Mk III, the GSLV-Mk III-D1 successfully placed GSAT-19 satellite to a Geosynchronous Transfer Orbit (GTO) on June 05, 2017 from SDSC SHAR, Sriharikota.
      </p>

      <p>
        GSLV MkIII-D2, the second developmental flight of GSLV MkIII successfully launched GSAT-29, a high throughput communication satellite on November 14, 2018 from Satish Dhawan Space Centre SHAR, Sriharikota
      </p>

      <p>
        GSLV MkIII-M1, successfully injected Chandrayaan-2, India’s second Lunar Mission, in to Earth Parking Orbit on July 22, 2019 from Satish Dhawan Space Centre SHAR, Sriharikota.
      </p>


    </TextContent>


    <Figure className="vh-100">
      <Figure.Image className="h-100 w-100" src={gslv_mk_iii_m1_2} alt="gslv_mk_iii_m1_2" style={{ objectFit: `cover`, opacity: `0.8` }} />
      <Figure.Caption className="text-center">
        GSLV MkIII - M1 vehicle outside Vehicle Assembly Building
      </Figure.Caption>
    </Figure>


    {/* <Figure className="vh-100">
      <Figure.Image className="h-100 w-100" src={cus_test} alt="cus_test" style={{ objectFit: `cover`, opacity: `0.8` }} />
      <Figure.Caption className="text-center">
        Hot fire testing of C25
      </Figure.Caption>
    </Figure> */}

    {/* <FigureCaption src={gslv_mk_iii_m1_2} alt={} caption="GSLV MarkIII-M1 vehicle outside Vehicle Assembly Building" /> */}


        {/* <Container>
          <Tabs
            id="uncontrolled-tab"
            defaultActiveKey="home"
            // onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="C25" title="Cryogenic Upper Stage : C25">
              <TableList data={launcherData} />
            </Tab>
            <Tab eventKey="S200" title="Solid Rocket Boosters : S200">
              <TableList data={launcherData} />
            </Tab>
            <Tab eventKey="L110" title="Core Liquid Stage : L110">
              <TableList data={launcherData} />
            </Tab>
          </Tabs>
        </Container> */}



    </>



  )

}
