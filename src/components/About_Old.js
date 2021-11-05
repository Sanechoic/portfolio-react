import React from 'react'; // Import the Component component from React
import ProjectCarousel from './projectPage/projectCarousel.js'


function About(props) {
  const slides = [
    {
      id:1,
      src:require('./../content/about/1.jpg')
    },
    {
      id:2,
      src:require('./../content/about/2.jpg')
    },
    {
      id:3,
      src:require('./../content/about/3.jpg')
    },
  ]

  const slideInfo = [
    {
      text:
        [
          "Where I'm From",
          'A keen interest in taking machines apart and trying to analyse and understand everything and everyone around me gave me a breadth of interest; never arbitrarily discriminating between Arts and Sciences but rather combining them.',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:
        [
          'Where I Am',
          'Studying Design Engineering at Imperial College London has given me the best of both worlds, developing in me a skillset of analytical, scientific rigour and empathetic, value-centred design thinking. Thinking with "two hats" has always been my style.',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:
        [
          "Where I'm Going",
          "Looking forward, I'm aiming to create as much social, material and emotional value as I can. Fields of interest to me are renewable energy, smart homes, internet of things (software and hardware) and wearable technology. I am concerned with increasing social value and improving the interface between man and machine as much as I am with increasing technical value.",
        ],
      width:'30vw',
      top:'10vh',
    },
  ]

  return(
    <ProjectCarousel
      about={true}
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default About;
