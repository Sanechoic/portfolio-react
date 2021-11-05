import React from 'react'; // Import the Component component from React
import ProjectCarousel from './../projectPage/projectCarousel.js'

function Panaseer(props) {
  const slides = [
    {
      id:1,
      src:require('./../../content/projects/panaseer/hero-image.png')
    },
    {
      id:2,
      src:require('./../../content/projects/panaseer/1.png')
    },
    {
      id:3,
      src:require('./../../content/projects/panaseer/5.png')
    },
    {
      id:4,
      src:require('./../../content/projects/panaseer/15.png')
    }
  ]

  const slideInfo = [
    {
      text:[],
      width:'30vw',
      top:'50vh',
    },
    {
      text:
        [
          'Key Features',
          'The core technology behind Panaseer is Infrared spectroscopy which allows for the identification of organic compunds by projecting a range of infrared frequencies onto the compund and measuring which frequencies are returned, as different types of chemical bond absorb different frequencies. Taking the types and numbers of bonds into account, specific compounds can be identified by comparison to a database.',
        ],
      width:'30vw',
      top:'40vh',
    },

    {
      text:
        [
          'User Experience',
          'Panaseer is designed to be primarily worn on the wrist of the user’s dominant hand with the module on the underside of the wrist. This is to allow for passive scanning of everything the user picks up. A short wave infrared semi-conductor sensor uses a thin-film encapsulation technique to allow IR spectroscopy at a small scale, a technology developed by Hertzstück. Whilst Panaseer can also be used as a handheld device, active scanning, particularly with younger users, may, at a point, feel tedious. Some level of protection is therefore added by the passive scanning and active scanning can be used where there is a greater need for scanning or an indication of danger.',
        ],
      width:'60vw',
      top:'10vh',
    },
    {
      text:
        [
          'Output and Feedback',
          'The LED indicator lights on the module and wristband are usually off. They turn to the relevant colour in the situations described above. If a foodstuff scanned contains both beneficial and harmful substances, the colour will be red, erring on the side of caution. Using the classic, traffic light scheme wll be intuitive for the vast majority of users. If the foodstuff might be harmful to your health, the indicator turns red. If it contains an allergen, it will also vibrate.',
        ],
      width:'30vw',
      top:'20vh',
    }
  ]

  return(
    <ProjectCarousel
      projectKey='panaseer'
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default Panaseer;
