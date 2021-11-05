import React from 'react'; // Import the Component component from React
import ProjectCarousel from './../projectPage/projectCarousel.js'

function Beatbox(props) {
  const slides = [
    {
      id:1,
      src:require('./../../content/projects/beatbox/hero.mp4'),
      type:'video',
    },
    {
      id:2,
      src:require('./../../content/projects/beatbox/1.jpg')
    },
    {
      id:3,
      src:require('./../../content/projects/beatbox/2.jpg')
    },
    {
      id:4,
      src:require('./../../content/projects/beatbox/1.mp4'),
      type:'video',
    },
  ]

  const slideInfo = [
    {
      text:[],
      width:'35vw',
      top:'20vh',
    },
    {
      text:
        [
          'Containing the Heart',
          'We put the heart into a box that was painted black and the interior was lined with black felt. A wooden frame was made and glued into the interior of the box. A black felt screen hides the mechanism.',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:
        [
          'Matching Heart Rate',
          'An Arduino Uno takes an input from the heart rate sensor and uses that to determine the PWM duty cycle of the motor: the faster the heartbeat, the faster the motor. The heart rate sensor output also controls the brightness of the LED strip.',

        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Pumping the Heart',
        'The "heart plates" were hand moulded. Foil was then spray painted and glued to the plates. A motor is connected to a gear which drives a larger gear connected to a shaft. A snail cam on the shaft drives the heart plates and springs moves them back. ',
      ],
      width:'30vw',
      top:'10vh',
    },
  ]

  return(
    <ProjectCarousel
      projectKey='beatbox'
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default Beatbox;
