import React from 'react'; // Import the Component component from React
import ProjectCarousel from './../projectPage/projectCarousel.js'

function Pacman(props) {
  const slides = [
    {
      id:1,
      src:require('./../../content/projects/pacman/hero-image.png')
    },
    {
      id:2,
      type:'video',
      src:require('./../../content/projects/pacman/1.mov')
    },
    {
      id:3,
      type:'video',
      src:require('./../../content/projects/pacman/2.mov')
    },
    {
      id:4,
      src:require('./../../content/projects/pacman/1.png')
    },
    {
      id:5,
      src:require('./../../content/projects/pacman/2.png')
    },
  ]

  const slideInfo = [
    {
      text:[],
      width:'30vw',
      top:'7vh',
    },
    {
      text:
        [
          'Sample Game 1',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:
        [
          'Sample Game 2',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Pacman - Maximising Score',
        "The 'Point Potential' function uses a breadth first search to 'see' the entire map. The function gives a value to each position on the map: Pacman is then directed towards the position with the highest point potential. This potential increases the further away it is from the ghosts, if there is food on the position and if there is a power up. Pacman prioritises staying away from ghosts and heading towards power-ups. Lastly, it considers food.",
      ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Ghosts - Minimising Score',
        "The 'PacmanTrap' function directs one ghost to the head off Pacman at the next junction and the other ghost to simply chase Pacman. Junctions are identified by the 'NextJunctions' function. The ghosts track each other's positions to determine which should chase Pacman and which should head him off.",

      ],
      width:'30vw',
      top:'10vh',
    },
  ]

  return(
    <ProjectCarousel
      projectKey='pacman'
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default Pacman;
