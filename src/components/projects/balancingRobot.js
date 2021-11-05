import React from 'react'; // Import the Component component from React
import ProjectCarousel from './../projectPage/projectCarousel.js'

function BalancingRobot(props) {
  const slides = [
    {
      id:1,
      src:require('./../../content/projects/balancingRobot/hero-image.png')
    },
    {
      id:2,
      type:'video',
      src:require('./../../content/projects/balancingRobot/1.mp4'),
      top:"20%"
    },
    {
      id:3,
      type:'video',
      src:require('./../../content/projects/balancingRobot/2.mp4'),
      top:'30%'
    },
    {
      id:4,
      type:'video',
      src:require('./../../content/projects/balancingRobot/3.mp4'),
      top:'30%'
    },
  ]

  const slideInfo = [
    {
      text:[],
      width:'90vw',
      top:'70vh',
    },
    {
      text:
        [
          'Rhythm: Signal Processing',
          'By measuring the energy of the sound signal, the beat of the song can be determined. On the beat, the energy of the sound peaks. The LED flash was then used to make sure that the program is detecting the beat correctly.',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:
        [
          'Balancing: PID Control',
          'By using PID (Proportional, Integral, Derivative) control the robot can balance on its own by using readings from the accelerometer and gyroscope and controlling the motors to counteract the motion of the robot as it falls over.',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Dancing: Putting It All Together',
        'Now that we are detecting the beat of the song and controlling the robot we can add some dance steps. By giving the robot some preset dance moves and arranging them into a list, the next dance move can be initiated on each beat. In the video on the left the robot performs its version of the traditional, Scottish "Strip the Willow" dance, wearing the proper attire of course.',
      ],
      width:'30vw',
      top:'10vh',
    },
  ]

  return(
    <ProjectCarousel
      projectKey='balancingRobot'
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default BalancingRobot;
