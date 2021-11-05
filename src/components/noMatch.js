import React from 'react';
import { Link } from 'react-router-dom';

function NoMatchPage(props) {
  return(
    <div>
      <div className='noMatchBg set-bg' style={{backgroundImage:"url(" + require("./../content/background.png") + ")"}}/>
      <div className='noMatch' >
        <h1>404 Page Not Found</h1>
        <Link to={{pathname:"/projects",activeCategory:'all'}} className={`noMatchBtn`} ><span>{`See My Work`}</span></Link>
      </div>
    </div>
  )
}

export default NoMatchPage;
