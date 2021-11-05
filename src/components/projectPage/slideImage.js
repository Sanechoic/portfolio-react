import React, { useState, useEffect } from 'react';

function SlideImage(props) {
  const mobile = useWindowWidth() <= 991;


  return(
    <div className="slide" style={{backgroundImage:"url("+(mobile ? "" : props.src)+")"}}>
      <img src={mobile ? props.src : ""} style={{display:(mobile ? "" : "none")}} alt="default"/>
    </div>
  )
}

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[windowWidth]);

  return windowWidth;
};

export default SlideImage;
