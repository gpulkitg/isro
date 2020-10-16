import React from 'react'

import Mission from '../../templates/mission'


const data = {

  seo: {
    title: "AstroSat",
  },

  jumbotronImg: [
    // {
    //   imgSrc: require("../../images/missions/astrosat/aop_feb.png"),
    //   alt: "",
    //   horizontalPosition: "left",
    //   verticalPosition: "bottom",
    //   contentAlignment: "left",
    //   title: "AstroSat discovers Galaxy AUDFs01",
    //   // subtitle: "A major breakthrough",
    //   button: "LEARN MORE",
    //   link: "/missions/astrosat",
    // },
    {
      imgSrc: require("../../images/missions/astrosat/ngc_2336_uvit.png"),
      alt: "",
      horizontalPosition: "left",
      verticalPosition: "bottom",
      contentAlignment: "left",
      title: "NGC 2336",
      subtitle: "A Classic Spiral Galaxy Captured by UVIT",
      button: "SEE MORE",
      link: "/missions/astrosat",
    },
  ],

  splitSection: [
    {
      imgSrc: require("../../images/missions/astrosat/aop_feb.png"),
      alt: "",
      title: "AstroSat discovers Galaxy AUDFs01",
      // description: "A major breakthrough",
      button: "LEARN MORE",
      link: "/missions/astrosat",
    },
  ],

  textContent1: {
    title: "India's First Dedicated Astronomy Mission",
    content: [
      "AstroSat is the first dedicated Indian astronomy mission aimed at studying celestial sources in X-ray, optical and UV spectral bands simultaneously. The payloads cover the energy bands of Ultraviolet (Near and Far), limited optical and X-ray regime (0.3 keV to 100keV). One of the unique features of AstroSat mission is that it enables the simultaneous multi-wavelength observations of various astronomical objects with a single satellite.",
    ],
    objectives: [
      "To understand high energy processes in binary star systems containing neutron stars and black holes",
      "Estimate magnetic fields of neutron stars",
      "Study star birth regions and high energy processes in star systems lying beyond our galaxy",
      "Detect new briefly bright X-ray sources in the sky",
      "Perform a limited deep field survey of the Universe in the Ultraviolet region",
    ],
  },


  cardDeck: [
    {
      title: "Launch Vehicle",
      imgSrc: require("../../images/missions/astrosat/astrosat_lv.jpg"),
      alt: "Launch Vehicle",
      text: "PSLV C-30",
      link: "launchers/pslv",
    },
    {
      title: "Spacecraft",
      imgSrc: require("../../images/missions/astrosat/astrosat_spacecraft.jpg"),
      alt: "Spacecraft",
      text: "Multi-wavelength Astronomy Satellite",
      link: "/missions/astrosat/spacecraft",
    },
    {
      title: "Ground Segment",
      imgSrc: require("../../images/missions/astrosat/astrosat_ground_segment.jpeg"),
      alt: "Ground Segment",
      text: "ISRO Telemetry Tracking and Command Network (ISTRAC)",
      link: "/missions/astrosat/ground-segment",
    },
    {
      title: "Payloads",
      imgSrc: require("../../images/missions/astrosat/astrosat_payloads.png"),
      alt: "Payloads",
      text: "X-ray, optical and UV spectral bands",
      link: "/missions/astrosat/payloads",
    },
  ],

  gallery: {
    photos: [
      {
        src: require("../../images/missions/astrosat/astrosat-image.jpg"),
        width: 1,
        height: 1,
      },
      // {
      //   src: require("../../images/missions/astrosat/astrosat_uv_deep_field_0.png"),
      //   width: 4,
      //   height: 3,
      //
      // },
      {
        src: require("../../images/missions/astrosat/1851_2.jpg"),
        width: 2,
        height: 1,
      },
      {
        src: require("../../images/missions/astrosat/aspom_april2018_jellyfish_inthe_sky.png"),
        width: 1,
        height: 1,

      },
      // {
      //   src: require("../../images/missions/astrosat/apom_oct18.jpg"),
      //   width: 3,
      //   height: 1,
      //
      // },
      {
        src: require("../../images/missions/astrosat/apom_dec2017-pic.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("../../images/missions/astrosat/ast.png"),
        width: 9,
        height: 4,
      },

    ],

    link: "/media/astrosat"
  },

  textContent2: {
    title: "Launch & Operation",
    content: [
      "AstroSat with a lift-off mass of 1515 kg was launched on September 28, 2015 into a 650 km orbit inclined at an angle of 6 deg to the equator by PSLV-C30 from Satish Dhawan Space Centre, Sriharikota. The minimum useful life of the AstroSat mission is expected to be 5 years.",

      "After injection into Orbit, the two solar panels of AstroSat were automatically deployed in quick succession. The spacecraft control centre at Mission Operations Complex (MOX) of ISRO Telemetry, Tracking and Command Network (ISTRAC), Bengaluru manages the satellite during its entire mission life.",

      "The science data gathered by five payloads of AstroSat are telemetered to the ground station at MOX. The data is then processed, archived and distributed by Indian Space Science Data Centre (ISSDC) located at Bylalu, near Bengaluru.",

      "At present, all the payloads are operational and are observing the cosmic sources. The spacecraft and payloads are healthy. The first six months was dedicated for performance verification and calibration of payloads .After that, the science observations by the payloads began.",
    ]
  }



}





export default function AstroSat() {

  return (
    <Mission data={data} />
  )
}
