import React, { useState, useEffect } from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import ProjectDataLoader from './projectData.js';

function Projects(props) {
  const projects = ProjectDataLoader()

  const [activeCategory, updateCategory] = useState(props.location.activeCategory)

  useEffect(() => {
    document.title='WP | Work';
  }, [])

  return (
      <section className="portfolio-section">
        <div className="portfolio-section-background set-bg" style={{backgroundImage:"url(" + require("./../content/background.png") + ")"}}/>
    		<div className="container">
    			<ul className="portfolio-filter">
    				<li className={`strikeNav ${(activeCategory==='all') ? "filter-active" : "filter-inactive"}`} onClick={() => updateCategory('all')}>All</li>
    				<li className={`strikeNav ${(activeCategory==='ind') ? "filter-active" : "filter-inactive"}`} onClick={() => updateCategory('ind')}>Industrial</li>
    				<li className={`strikeNav ${(activeCategory==='dig') ? "filter-active" : "filter-inactive"}`} onClick={() => updateCategory('dig')}>Digital</li>
    			</ul>
    		</div>
        <TransitionGroup>
          <CSSTransition
                classNames="portfolioFade"
                timeout={800}
                key={activeCategory}
            >
        		<div className="container-fluid p-md-0 ">
        			<div className="row portfolio-area" >
                {((activeCategory==='all' || activeCategory===null || activeCategory===undefined) ? projects : projects.filter(project => project.category.includes(activeCategory))).map((thumbnail) => (
                  <Thumbnail
                    key={thumbnail.title}
                    link={thumbnail.link}
                    image={thumbnail.image}
                    title={thumbnail.title}
                    question={thumbnail.question}
                    col={thumbnail.col}
                    />
                ))}
        			</div>
        		</div>
          </CSSTransition>
        </TransitionGroup>
    	</section>
  )
}

export default Projects;
