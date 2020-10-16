import React from 'react'
import { graphql } from 'gatsby'

import Mission from '../../templates/mission'


const data = {

  seo: {
    title: "Mars Orbiter Mission",
  },

  jumbotronImg: [
    {
      imgSrc: require("../../images/missions/mom/mom1.jpg"),
      alt: "",
      horizontalPosition: "left",
      verticalPosition: "bottom",
      contentAlignment: "left",
      title: "Mars Orbiter Mission",
      subtitle: "Breathtaking pictures by Mars Color Camera",
      button: "SEE MORE",
      link: "/about",
    },
    {
      imgSrc: require("../../images/missions/mom/mom2.jpg"),
      alt: "",
      horizontalPosition: "right",
      verticalPosition: "center",
      contentAlignment: "left",
      title: "Mars Orbiter Journey",
      subtitle: "From launch to Martian orbit",
      button: "LEARN MORE",
      link: "/about",
    },
  ],


  textContent1: {
    title: "India's First Interplanetary Mission",
    content: [
      "Marking India's first venture into the interplanetary space, MOM will explore and observe Mars surface features, morphology, mineralogy and the Martian atmosphere. Further, a specific search for methane in the Martian atmosphere will provide information about the possibility or the past existence of life on the planet",

      "The enormous distances involved in interplanetary missions present a demanding challenge; developing and mastering the technologies essential for these missions will open endless possibilities for space exploration. After leaving Earth, the Orbiter will have to endure the Interplanetary space for 300 days before Mars capture. Apart from deep space communications and navigation-guidance-control capabilities, the mission will require autonomy at the spacecraft end to handle contingencies.",

      "Once India decided to go to Mars, ISRO had no time to lose as the nearest launch window was only a few months away and it could not afford to lose the chance, given the next launch would present itself after over 780 days, in 2016. Thus, mission planning, manufacturing the spacecraft and the launch vehicle and readying the support systems took place swiftly.",
    ],
  },

  cardDeck: [
    {
      title: "Launch Vehicle",
      imgSrc: require("../../images/missions/mom/mom_lv.png"),
      alt: "Launch Vehicle",
      text: "PSLV C-25",
      link: "launchers/pslv",
    },
    {
      title: "Spacecraft",
      imgSrc: require("../../images/missions/mom/mom_spacecraft.png"),
      alt: "Spacecraft",
      text: "Mars Orbiter Mission (MOM)",
      link: "/spacecraft/mom",
    },
    {
      title: "Ground Segment",
      imgSrc: require("../../images/missions/mom/mom_ground_segment.png"),
      alt: "Ground Segment",
      text: "Indian Deep Space Network (ISDN)",
      link: "/missions/mars-orbiter-mission/ground-segment",
    },
    {
      title: "Mission Profile",
      imgSrc: require("../../images/missions/mom/mom_mission_profile.png"),
      alt: "Mission Profile",
      text: "Rendezvous problem",
      link: "/missions/mars-orbiter-mission/profile",
    },
  ],

  gallery: {
    photos: [
      {
        src: require("../../images/missions/mom/mom_gallery1.jpg"),
        width: 4,
        height: 3,
      },
      {
        src: require("../../images/missions/mom/mom_gallery2.jpg"),
        width: 1,
        height: 1,

      },
      {
        src: require("../../images/missions/mom/mom_gallery3.png"),
        width: 1,
        height: 1,

      },
      {
        src: require("../../images/missions/mom/mom_gallery4.jpg"),
        width: 4,
        height: 3,
      },
    ],

    link: "/media/mars-orbiter-mission"
  }


}




export default function MarsOrbiterMission() {

  return (
    <Mission data={data} />
  )
}
