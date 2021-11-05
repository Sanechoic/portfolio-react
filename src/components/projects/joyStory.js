import React from 'react'; // Import the Component component from React
import ProjectCarousel from './../projectPage/projectCarousel.js'

function JoyStory(props) {
  const slides = [
    {
      id:1,
      type:'video',
      src:require('./../../content/projects/joyStory/hero.mp4')
    },
    {
      id:2,
      src:require('./../../content/projects/joyStory/3.png')
    },
    {
      id:3,
      src:require('./../../content/projects/joyStory/1.png')
    },
    {
      id:4,
      src:require('./../../content/projects/joyStory/2.png')
    },
    {
      id:5,
      src:require('./../../content/projects/joyStory/5.png')
    },
    {
      id:6,
      src:require('./../../content/projects/joyStory/7.png')
    },
    {
      id:7,
      src:require('./../../content/projects/joyStory/4.jpg')
    }
  ]

  const slideInfo = [
    {
      text:[],
      width:'100vw',
      top:'70vh',
    },
    {
      text:
        [
          'Proposal',
          'Joy Story have created a collaborative experience for shared spaces, giving companies the tools to increase employee and customer engagement. Insights from market research drove us to design experiences that encourage collaboration rather than competition with balanced foot controls that require teams to work together to complete the Tilt Maze.',
        ],
      width:'40vw',
      top:'30vh',
    },

    {
      text:
        [
          '',
          '',
        ],
      width:'0vw',
      top:'10vh',
    },
    {
      text:
        [
          'Gathering Insights',
          "As part of a comprehensive research and testing process, we visited train stations and interviewed station managers and transformation teams as well as business owners in order to gather qualitative data from which to draw insights. We also analysed over 10,000 google reviews from the UK's 2500+ train stations, from which this word cloud was generated. We discovered that interactions with between people made a huge difference to people's perception of their experience and these were commonly referenced in reviews (Staff, Service, People).",
        ],
      width:'25vw',
      top:'5vh',
    },
    {
      text:
        [
          'Peak-End Theory',
          "Peak-End Theory suggests that when people reflect on their experiences, the part of the experience with the highest emotional intensity (positive or negative) and the end of the experience are given a lot of weight. This effect was noticed in the analysed reviews and interviews, with people using such anecdotes from an experience to inform their entire opinion of the quality of a space or an experience. In this way, the Giant Tilt Maze is designed to form the peak of an experience within a space.",
        ],
      width:'40vw',
      top:'5vh',
    },
    {
      text:
        [
          'Businesses - Brompton Bicycles',
          'We tested the prototype at the Brompton Bicycles factory is West London. They organised teams to compete against each other and they started to develop different strategies together, holding onto each other for support and encouraging each other.',
        ],
      width:'55vw',
      top:'15vh',
    },
    {
      text:
        [
          'Public Spaces - London Bridge Station',
          "Through Netowrk Rail's transformation team, we had the opportunity to test the tilt maze with passengers on a weekday afternoon at London Bridge station. We received fantastic feedback and engagement with people enjoying the experience. Trying to complete a task together encourages communication which then starts to branch out into a more general discussion.",
        ],
      width:'50vw',
      top:'15vh',
    },
  ]

  return(
    <ProjectCarousel
      projectKey='joyStory'
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default JoyStory;
