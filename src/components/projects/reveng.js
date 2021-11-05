import React from 'react'; // Import the Component component from React
import ProjectCarousel from './../projectPage/projectCarousel.js'

function Reveng(props) {
  const slides = [
    {
      id:1,
      src:require('./../../content/projects/reveng/thumbnail.jpg')
    },
    {
      id:2,
      src:require('./../../content/projects/reveng/1.jpg')
    },
    {
      id:3,
      src:require('./../../content/projects/reveng/2.png')
    },
    {
      id:4,
      src:require('./../../content/projects/reveng/3.png')
    },

  ]

  const slideInfo = [
    {
      text:[],
      width:'30vw',
      top:'40vh',
    },
    {
      text:
        [
          'Product Teardown',
          'The product was stripped down as far as possible. All the components were listed and each material identified. After this the components were placed on a teardown display board in order to illustrate how the product was constructed. The process was to determine how best to reduce the energy consumption of the product at the design stage. Factors considered of the embodied energy of the materials, the manufacturing processes used and the usage of the product by consumers. Making these decisions at the design stage hugely reduces cost, as once manufacturing has begun it is very expensive to make alterations to the product, due to the cost of metal and plastic moulds.',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:
        [
          'Eco Audit',
          'The Eco Audit Tool of the CES EduPack 2015 program was used in order to determine the environmental impact of the materials and manufacturing processes used within the product. Usage over lifetime and transport were also taken into account. The materials used in the product had by far the biggest contribution to the embodied energy of the product (65 %).',
        ],
      width:'30vw',
      top:'10vh',
    },
    {
      text:[
        'Eco-friendly Redesign',
        "Using recycled metal vastly reduced the embodied energy. Polycarbonate and Polyethylene were both substituted with PVC to reduce cost and embodied energy, whilst still retaining the required thermal, mechanical and food-safe qualities required. The embodied energy was reduced from a total of 48.3 MJ to 26.6 MJ."
      ],
      width:'25vw',
      top:'10vh',
    },
  ]

  return(
    <ProjectCarousel
      projectKey='reveng'
      slides={slides}
      slideInfo={slideInfo}
    />
  )
}

export default Reveng;
