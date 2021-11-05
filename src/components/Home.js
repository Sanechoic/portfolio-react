import React, { useEffect, useRef, useState } from 'react'; // Import the Component component from React
import Carousel from 'nuka-carousel';
import '../css/App.css';
import HomepageProject from './homepageProject.js'
import { Link } from 'react-router-dom';

const project_total = "03"

function Home(props) {
  //Carousel Speed
  const speed=500;

  const [currentSlide, changeSlide] = useState(0);

  const [textVis, changeTextVis] = useState(true)


  // Fixes Carousel not loading initially
  const carouselRef = useRef(null)
    useEffect(() => {
      document.title='WP | Design Engineer'
      setTimeout(() => {carouselRef.current.onResize();}, 0);
    }, [])

  return (
      <div>
        <Carousel
          beforeSlide={currentIndex=>{changeTextVis(false);setTimeout(function(){changeTextVis(true)},speed);}}
          afterSlide={(currentIndex,slideCount) => {changeSlide(currentIndex);}}
          slideIndex={currentSlide}
          enableKeyboardControls={true}
          disableEdgeSwiping={false}
          heightMode="max"
          speed={speed}
          className="carousel"
          width="100%"
          vertical={false}
          ref={carouselRef}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          renderBottomLeftControls={({ previousSlide, slideCount }) => (
            <button
              className={`carouselPrev shift-left ${currentSlide===0 ? "invis":""}`}
              onClick={previousSlide}
              style={{left:"100%"}}
              >
              <i className="fa fa-angle-left" />
            </button>
          )}
          renderBottomRightControls={({ nextSlide, slideCount }) => (
            <button
              className={`carouselNext ${currentSlide===slideCount-1 ? "shift-left":"shift-right"}`}
              onClick={currentSlide===slideCount-1 ? () => changeSlide(0):nextSlide}
              style={{right:"100%"}}
              >
              <i className={`${currentSlide===slideCount-1 ? "fa fa-angle-double-left":"fa fa-angle-right"}`}/>
            </button>
          )}
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: "#4A03FF"
            }
          }}
          >
          <div className="intro-wrapper"
               onMouseOver={e => (e.currentTarget.style.background = "#6121ff")}
               onMouseOut={e => (e.currentTarget.style.background = "white")}
          >
            <a>Design engineer based in London.</a>
            <a style={{opacity:0}}>--</a>
            <h5 className="fa fa-long-arrow-right strike" onClick={()=>changeSlide(1)}>featured work</h5>
          </div>
          <HomepageProject
           projectKey={'panaseer'}
           key="01"
           number="01"
           total={project_total}
           colour="#0FFFB0"
           textVis={textVis}
          />
          <HomepageProject
           projectKey={'joyStory'}
           key="02"
           number="02"
           total={project_total}
           colour="#FF491C"
           textVis={textVis}
          />
          <HomepageProject
           projectKey={'spiro'}
           key="03"
           number="03"
           total={project_total}
           colour="#FFEE1C"
           textVis={textVis}
          />
        </Carousel>
        <Link to={{pathname:"/projects",activeCategory:'all'}} className={`similarProjects ${currentSlide===3 ? 'slideUp':'slideDown'}`}><span>more work</span></Link>
      </div>
  );
}

export default Home;
