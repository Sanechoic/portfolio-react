import React, { useEffect, useRef, useState } from 'react'; // Import the Component component from React
import Carousel from 'nuka-carousel';
import ProjectDataLoader from './../projectData.js';
import { Link } from 'react-router-dom';
import SlideImage from './../projectPage/slideImage.js'
import SlideVideo from './../projectPage/slideVideo.js'


function ProjectCarousel(props) {
  //Carousel Speed
  const speed=500;

  // Fixes Carousel not loading initially
  const carouselRef = useRef()

  // Text Slide on and foo
  const [textVis, changeTextVis] = useState(true)

  // Changes slide info based on slide
  const [currentSlide, changeSlide] = useState(0);

  var slideInfo = props.slideInfo;

  var project = [];

  if (props.about){
    // about
     project={
      'title':'About Me',
      'category':['all']
    }
  } else {
    //Get project data
    const projectData = ProjectDataLoader();
    for (var i =0; i<projectData.length; i++){
      if (projectData[i].key === props.projectKey){
        project = projectData[i]
        //console.log(project)
        break
      }
    }
    slideInfo[0].text=['', project.question,`Responsibilties: ${project.contribution}`,project.year]
  }

  useEffect(() => {
    document.title=project.title;
    setTimeout(() => {carouselRef.current.setDimensions(null);}, 0);
  }, [])

  // Lightbox
  const [lightbox, toggleLightbox] = useState(false)

  useEffect(() => {
    const handleClick = e => {
      if (carouselRef.current.getChildNodes()[currentSlide].contains(e.target)){
        toggleLightbox(!lightbox);
        return;
      }
    };
    // add when mounted
    document.addEventListener("click", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [lightbox,currentSlide]);



  return(
    <div key={props.projectKey}>
      <div className="carouselWrapper">
        <Carousel
          beforeSlide={currentIndex=>{changeTextVis(false);setTimeout(function(){changeTextVis(true)},speed);}}
          afterSlide={currentIndex => {changeSlide(currentIndex);}}
          enableKeyboardControls={true}
          slideIndex={currentSlide}
          disableEdgeSwiping={true}
          className="carousel"
          disableAnimation={false}
          heightMode="max"
          speed={speed}
          width="100%"
          vertical={false}
          dragging={true}
          ref={carouselRef}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          renderBottomLeftControls={({ previousSlide, slideCount }) => (
            <button
              className={`carouselPrev shift-left ${currentSlide===0 ? "invis":""}`}
              onClick={previousSlide}
              style={{left:"100%",bottom:"5vh"}}
              >
              <i className="fa fa-angle-left" />
            </button>
          )}
          renderBottomRightControls={({ nextSlide, slideCount }) => (
            <button
              className={`carouselNext ${currentSlide===slideCount-1 ? "shift-left":"shift-right"}`}
              onClick={currentSlide===slideCount-1 ? () => changeSlide(0):nextSlide}
              style={{right:"100%",bottom:"5vh"}}
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
          {props.slides.map((slide) => (
            (slide.type==='video')?
            <SlideVideo
              key={slide.id}
              src={slide.src}
              />
              :
            <SlideImage
              key={slide.id}
              src={slide.src}
              />
          ))}
        </Carousel>
      </div>
      <Link to={{pathname:"/projects",activeCategory:project.category[0]}} className={`similarProjects ${currentSlide===props.slides.length-1 ? 'slideUp':'slideDown'}`}><span>{`${props.about?'See My Work':'Similar Work'}`}</span></Link>
      <a className={`moreAbout ${currentSlide===props.slides.length-1 ? 'slideUp':'slideDown'}`} href={project.moreAbout} style={{display:`${project.moreAbout?'':'none'}`}} target="_blank" rel="noopener noreferrer">More Detail</a>
      <div className="projectTitle">
        <h1>{project.title}</h1>
        <h2>{ `${props.about ? '':`0${currentSlide+1} / 0${props.slides.length}`}`}</h2>
      </div>
      <div
        className={`slideInfo ${textVis ? 'slideIn':'slideOut'}`}
        style={{width:slideInfo[currentSlide].width?slideInfo[currentSlide].width:null,top:slideInfo[currentSlide].top}}
        >
        <h2>{slideInfo[currentSlide].text[0]}</h2>
        <h3>{slideInfo[currentSlide].text[1]}</h3>
        <h4>{slideInfo[currentSlide].text[2]}</h4>
        <h5>{slideInfo[currentSlide].text[3]}</h5>
      </div>
    </div>
  )
}

export default ProjectCarousel;
