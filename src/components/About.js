import React from 'react'; // Import the Component component from React
import ProjectCarousel from './projectPage/projectCarousel.js'


function About(props) {
  const slides = [
    {
      id:1,
      src:require('./../content/portrait.png')
    },
  ]

  const slideInfo = [
    {
      text:
        [
          "High Ex(perience)",
          "Product, industrial, graphic: design is all about experience. In an increasingly high tech world, my approach as a design engineer is to create meaningful, novel and functional experiences by starting with the human condition.",
          "Currently: Founder and Director @ CosyPro.uk",
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
