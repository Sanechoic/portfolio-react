import React from 'react'; // Import the Component component from React
import ProjectCarousel from './../projectPage/projectCarousel.js'

function Embla(props) {
  const slides = [
    {
      id:1,
      src:require('./../../content/projects/embla/hero-image.png')
    },
    {
      id:2,
      src:require('./../../content/projects/embla/1.png')
    },
    {
      id:3,
      src:require('./../../content/projects/embla/3.png')
    },
    {
      id:4,
      src:require('./../../content/projects/embla/4.png')
    },
    {
      id:5,
      src:require('./../../content/projects/embla/5.png')
    },
    {
      id:6,
      src:require('./../../content/projects/embla/9.png')
    },
    {
      id:7,
      src:require('./../../content/projects/embla/10.png')
    },
    {
      id:8,
      src:require('./../../content/projects/embla/7.png')
    },
    {
      id:9,
      src:require('./../../content/projects/embla/8.png')
    },
    {
      id:10,
      src:require('./../../content/projects/embla/6.png')
    },
  ]

  const slideInfo = [
    {
      text:[],
      width:'50vw',
      top:'65vh',
    },
    {
      text:
        [
          'Workplace Stress',
          '',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:
        [
          'Sympathetic Environments',
          "Temperatures above 21° C have been shown to trigger thermo-sensitive physiological mechanisms. Red and pink hues were shown to negatively affect stress perception and increased mental stimulation, whereas blue or green hues had a more calming effect. The disruption of the circadian rhythm is proven to lead to serious physical and mental health problems, including impulsivity, reduced mental flexibility and lower levels of happiness. The sense of smell demonstrates a powerful link between the nose, the limbic system and emotional states. Embla combines all of these to minimise workplace stress by providing localised workplace environments that adapt to the user's stress level.",

        ],
      width:'40vw',
      top:'20vh',
    },
    {
      text:[
        'System Diagram',
        "Knowing what stresses them out and what calms them down is of huge value to the user. They will be the only one with guaranteed access to all of their personal data. They can use this to develop insights about themselves, which sort of environments suit them best, when, where and how they work best. They will have the option to share this data with whomever they like and will be able to seek help and inform others, including healthcare professionals, about their condition with reliable data, without having to worry about not being believed or taken seriously.",
      ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:
        [
          'User Interface',
          '',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:
        [
          'Market Analysis',
          '',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Biometrics',
        "Stress is a difficult parameter to measure and quantify. In fact, many people in the field suggest that it is illogical to create a scale for emotions such as stress. Biological data varies between individuals, as do stressors. We are not aiming to give absolute measurements for stress with our readings as we believe this is an unrealistic task to accomplish technologically even in the future. Instead, we aim to detect moments at which the wearer is likely to be more stressed.",
      ],
      width:'80vw',
      top:'5vh',
    },
    {
      text:[
        'Sympathetic Work Environments',
        'We constructed a full-scale realistic mockup of a generic office room as an environment to carry out testing to validate our proposed outputs. The office was complete with Embla-enabled, radio-controlled lighting, scent generation through a diffuser, a projection system that could display scenes from different times of the day in order to bias circadian rhythm and rudimentary temperature control using directional fans. These outputs could all be controlled remotely in order to identify their trends with the data gathered from the biometric measurement prototype worn by test users working inside our office.',
      ],
      width:'40vw',
      top:'10vh',
    },
    {
      text:[
        'Virtual Reality Experience',
        "",
      ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Prototyping',
        "Test users were asked to provide qualitative user feedback about the environment and the test in general, before filling out a Perceived Stress Scale test (PSS), which is a widely implemented normalised tool used to measure non-specific perceived stress. The results from these, varied considerably between individuals, and we would require more tests to conclude that the office environment made a significant difference."
      ],
      width:'30vw',
      top:'10vh',
    },
  ]

  return(
    <ProjectCarousel
      projectKey='embla'
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default Embla;
