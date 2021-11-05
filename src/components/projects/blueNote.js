import React from 'react'; // Import the Component component from React
import ProjectCarousel from './../projectPage/projectCarousel.js'

function BlueNote(props) {
  console.log(props)

  const slides = [
    {
      id:1,
      src:require('./../../content/projects/blueNote/hero.mp4'),
      type:'video'
    },
    {
      id:2,
      src:require('./../../content/projects/blueNote/4.png')
    },
    {
      id:3,
      src:require('./../../content/projects/blueNote/5.png')
    },
    {
      id:4,
      src:require('./../../content/projects/blueNote/8.png')
    },
    {
      id:5,
      src:require('./../../content/projects/blueNote/9.png')
    },
    {
      id:6,
      src:require('./../../content/projects/blueNote/10.png')
    },
    {
      id:7,
      src:require('./../../content/projects/blueNote/3.png')
    },
    {
      id:8,
      src:require('./../../content/projects/blueNote/2.png')
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
          'Tube Lines',
          "A notification is sent via the app in the instance of a disruption to a selected line at a time and place of the user's choosing. The app was built using Flutter to have a shared codebase for IOS and Android."
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:
        [
          "BLE Beacons",
          "Users can select which bluetooth beacons to use for position detecting."
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Notifications',
        ''
      ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'TFL Data - Predicting Disruption',
        "The proportion of readings during any given hour that are disruptive is used to estimate the probability of disruption. The disruption peaks around the morning “rush-hour”."

      ],
      width:'40vw',
      top:'10vh',
    },
    {
      text:[
        'BLE Data - Detecting Location',
        "The phone location could be determined by triangulating the signal strenghts of the BLE Beacons. K-Means clustering was used to categorise the rooms"
      ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        "System Diagram",
        "The main communications protocols employed are HTTP and BLE. Each BLE scan triggers a corresponding HTTP POST request that sends data to the respective database. TFL API data and BLE RSSI (Signal Strength) data are collected periodically by the phone app."

      ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        "Data Storage",
        "Tube line status is collected using the TFL API (https://api.tfl.gov.uk). The data is stored in AWS (Amazon Web Services) DynamoDB NoSQL tables. The serverless, AWS Lambda script which pulls the data from the TFL API is triggered using an HTTP request with API key authentication periodically from the phone app. The phone app periodically checks the respective RSSIs (received signal strength indication) of the BLE beacons."

      ],
      width:'30vw',
      top:'10vh',
    },
  ]

  return(
    <ProjectCarousel
      projectKey='blueNote'
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default BlueNote;
