import React from 'react'; // Import the Component component from React
import ProjectCarousel from './../projectPage/projectCarousel.js'

function PeoplePod(props) {
  const slides = [
    {
      id:1,
      src:require('./../../content/projects/peoplePod/hero-image.png')
    },
    {
      id:2,
      src:require('./../../content/projects/peoplePod/1.png')
    },
    {
      id:3,
      src:require('./../../content/projects/peoplePod/17.jpg')
    },
    {
      id:4,
      src:require('./../../content/projects/peoplePod/5.png')
    },
    {
      id:5,
      src:require('./../../content/projects/peoplePod/7.png')
    },
    {
      id:6,
      src:require('./../../content/projects/peoplePod/12.png')
    },
    {
      id:7,
      src:require('./../../content/projects/peoplePod/9.png')
    },

  ]

  const slideInfo = [
    {
      text:[],
      width:'25vw',
      top:'20vh',
    },
    {
      text:
        [
          'Brief and Background',
          'Designing the interior of a dual-occupant, autonomous public transport vehicle and build a full scale mock-up of the design'
        ],
      width:'25vw',
      top:'10vh',
    },
    {
      text:
        [
          'Final Build',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Inital Concepts',
        "We focused on the 'last mile' problem, insufficient transportation links between existing transport infrastructures or from an existing transport link to a final destination (e.g. from a train station to an office). A modular pod design (ModPod) makes it accessible for all users. The relevant pod would be ordered by the user, for example a pod with an extra seat. Automated transport means that the 'dead time' of travelling can now be productive."
      ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Layout',
        "The entire pod had to fit into a 2m x 2m space. The layout was designed with reference to anthropometric data concerning chair height, leg-room, arm size etc. There also needed to be enough space for ingress and egress of wheelchair users. The layout designed had enough space for two fixed chairs, one folding chair and a table."
      ],
      width:'25vw',
      top:'10vh',
    },
    {
      text:[
        '3D Model',
        "The final design was mocked up in Solidworks, a 3D design software. The design features the sturdy but visually diffuse 'rib' chairs and table. As well as two emergency buttons, one for the occupants of the rib chairs and one for that of the folding chair. On the right, a visual of two pods joined together is shown. The pods are able to join together to form a 'train' for motorway journeys where all the pods are travelling in one direction."
      ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'User Interface',
        "The interface is how the user chooses their destination and gives the user(s) as much control over their environment as possible. The interface can be accessed from a touch pad embedded within the table or from a connected smartphone. The interface screen is at the front of the pod. The interface can also be used for internet browsing and has a host of other entertainkment features."

      ],
      width:'30vw',
      top:'20vh',
    },
  ]

  return(
    <ProjectCarousel
      projectKey='peoplePod'
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default PeoplePod;
