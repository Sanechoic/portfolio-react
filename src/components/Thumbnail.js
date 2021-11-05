import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component


function Thumbnail(props) {
  return (
    <div className={props.col} key={props.title}>
      <Link to={props.link}>
        <div className="portfolio-item">
          <div className="portfolio-item-img set-bg" style={{backgroundImage: "url(" + props.image + ")"}}>
            <div className="pi-inner">
              <h3 className="project-question">{props.question}</h3>
              <h2 className="project-title">{props.title}</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
