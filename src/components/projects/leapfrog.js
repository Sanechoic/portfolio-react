import React from 'react'; // Import the Component component from React
import ProjectCarousel from './../projectPage/projectCarousel.js'

function LeapFrog(props) {
  const slides = [
    {
      id:1,
      src:require('./../../content/projects/leapfrog/thumbnail.png')
    },
    {
      id:2,
      src:require('./../../content/projects/leapfrog/1.png')
    },
    {
      id:3,
      src:require('./../../content/projects/leapfrog/2.png')
    },
    {
      id:4,
      src:require('./../../content/projects/leapfrog/3.png')
    },
    {
      id:5,
      src:require('./../../content/projects/leapfrog/4.png')
    },
  ]

  const slideInfo = [
    {
      text:[],
      width:'25vw',
      top:'50vh',
    },
    {
      text:
        [
          'Preliminary Analysis',
          'An optimum takeoff angle of 76 degrees calculated as the x and y distance are equal (no tradeoff between horizontal and vertical distance).',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:
        [
          'Tranmission',
          'A gear ratio of 48 was determined to be suitable. Using spur gears the maximum ratio between two gears is 5. To reduce the mechanism size as much as possible without compromising torque and efficiency too much, a module of 0.5 was determined. The minimum number of teeth for a spur gear is 12 and so the gear ratio in terms of tooth size was determined as such: 12/50, 12/34, 14/57. This would step the motor rpm down from 19000 to 395 (a step down of factor 48).',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Structural Integrity',
        'The head plate has to withstand the force of the spring when it is fully compressed and so a static analysis was performed on it, modelling the force on the bottom of the head plate. The safety factor was determined to be 0.45 and so would not withstand the force. Supports were added to the bottom of the head plate to give it extra rigidity, especially around the spring support where the spring has an interference fit. This increased the safety factor to 1.85',
      ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Technical Drawing',
      ],
      width:'30vw',
      top:'60vh',
    },
  ]

  return(
    <ProjectCarousel
      projectKey='leapfrog'
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default LeapFrog;
