import React from 'react'; // Import the Component component from React
import ProjectCarousel from './../projectPage/projectCarousel.js'

function Spiro(props) {
  const slides = [
    {
      id:1,
      src:require('./../../content/projects/spiro/hero-image.png')
    },
    {
      id:2,
      src:require('./../../content/projects/spiro/1.png')
    },
    {
      id:3,
      src:require('./../../content/projects/spiro/11.png')
    },
    {
      id:4,
      src:require('./../../content/projects/spiro/7.jpg')
    },
    {
      id:5,
      src:require('./../../content/projects/spiro/14.jpg')
    },
  ]

  const slideInfo = [
    {
      text:[],
      width:'30vw',
      top:'70vh',
    },
    {
      text:
        [
          'Background - COPD',
          'Indoor air pollution - generated largely by inefficeint and poorly ventilated stoves burning biomass fuels such as wood, crop waste and dung, or coal - is responsible for the deaths of an estimated 1.6 million people annually. More than half of these deaths occur amongst children under five years of age.',
        ],
      width:'40vw',
      top:'10vh',
    },
    {
      text:
        [
          'Measuring Lung Tidal Volume',
          'The goal of this project was to create a device that cheaply and efficiently measures tidal lung volume (volume of unforced breathing. Subsaharan countries don’t have access to spirometers so most of the data regarding Chronic Obstructive Pulmonary Disease (COPD) is neither accurate nor real. More than 90% of COPD deaths occur in low­ and middle­ income countries, where effective strategies for prevention and control are not always implemented or accessible. The idea is to raise awareness of these lung related issues within local populations. A constraint was that the device has to work with quiet breathing: full inspiration and expiration can be used but no forced manoeuvres.',
        ],
      width:'40vw',
      top:'10vh',
    },
    {
      text:
        [
          'Prototyping',
          'The "works-like" prototype was built to demonstrate the measurement of tidal lung volume. A single turbine measures the breath rate using hall-effect sensors. The breath rate can then be integrated with respect to time to give a volume reading. In this way, the patient can breath several times and the readings can be averaged into an estimate of the exhale volume which can then be doubled to give an estimate of the tidal volume, as exhale and inhale volume are practically identical. This avoided the need for a second turbine to measure inhale volume.',
        ],
      width:'40vw',
      top:'20vh',
    },
    {
      text:
        [
          'Technical Drawing',
          '',
        ],
      width:'30vw',
      top:'20vh',
    },
  ]

  return(
    <ProjectCarousel
      projectKey='spiro'
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default Spiro;
