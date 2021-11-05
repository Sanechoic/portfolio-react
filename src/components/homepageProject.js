import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import ProjectDataLoader from './projectData.js';

function HomepageProject(props) {
  const projectData = ProjectDataLoader();
  //console.log(projectData);


  for (var i =0; i<projectData.length; i++){
    if (projectData[i].key === props.projectKey){
      var project = projectData[i]
      //console.log(project)
      break
    }
  }

  return (
    <div className="" style={{width:"100%"}}>
      <Link to={project.link}>
        <div className="homepageProject"
          onMouseOver={e => (e.currentTarget.style.background = props.colour)}
          onMouseOut={e => (e.currentTarget.style.background = "white")}
        >
          <div className="homepageProject-img set-bg grow" style={{backgroundImage: "url(" + project.image + ")"}}/>
          <div className={`hp-inner ${props.textVis ? 'hpAppear':'hpDisappear'}`}>
            <h4 className="project-number">{props.number+" / "+props.total}</h4>
            <h2 className="">{" "+project.title}</h2>
            <h3 className={"project-question"}>{project.question}</h3>
            <h5 className="fa fa-long-arrow-right strike"> see more</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HomepageProject;
