import React from 'react'; // Import the Component component from React
import ProjectCarousel from './../projectPage/projectCarousel.js'

function Pause(props) {
  const slides = [
    {
      id:1,
      src:require('./../../content/projects/pause/hero-image.png')
    },
    {
      id:2,
      src:require('./../../content/projects/pause/4.png')
    },
    {
      id:3,
      src:require('./../../content/projects/pause/10.png')
    },
    {
      id:4,
      src:require('./../../content/projects/pause/12.png')
    },
    {
      id:5,
      src:require('./../../content/projects/pause/13.png')
    },

  ]

  const slideInfo = [
    {
      text:[],
      width:'50vw',
      top:'70vh',
    },
    {
      text:
        [
          'Breaking the Flow',
          "Pause is an app, targeted at adolescents, that aims to address excessive use of social networking sites by empowering the user to control their screen time. The longer the user scrolls, the longer content takes to load and the harder scrolling becomes, breaking the flow. This break is leveraged as a positive nudge to stop scrolling. Scrolling and loading speed will slowly recover as a reward when social media isn't being used. Pause is inspired by the EAST framework, making scrolling less easy and by using social and timely intervenions.",
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:
        [
          'Main Screen',
          "Contains a visual representation of remaining scroll time. Highlights remaining time, rather than used time, motivating the user to use their remaining time wisely. Includes a streak for how many days they have stayed on target, photos of their Friends (with a button to add more), and navigation buttons."
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Notification',
        "When the user reaches their scroll time limit, this message box appears. It is timely (once the user has reached their self-defined limit) and social (it encourages users to engage with others in using social media less)."
      ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Friends',
        "Allows users to manage which Friends they have added in Pause. These could be peers, parents, teachers etc. with whom the user is engaging in managing their social media use."
      ],
      width:'30vw',
      top:'10vh',
    }
  ]

  return(
    <ProjectCarousel
      projectKey='pause'
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default Pause;
