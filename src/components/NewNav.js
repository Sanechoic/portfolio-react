import React, { useEffect, useRef, useState } from 'react'; // Import the Component component from React
import { NavLink } from 'react-router-dom';
import SocialBar from './SocialBar.js';

function Nav(props) {
  const menu = useRef();
  const [isExpanded, toggleExpanded] = useState(false);

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isExpanded]);

  const handleClick = e => {
    if (!menu.current.contains(e.target)) {
      toggleExpanded(false);
      return;
    }
  };


  return (
    <div className='navigation'>
      <div className="logo-wrapper">
        <h1><NavLink exact to="/" activeClassName="activePage" className="logo">William Pepera</NavLink></h1>
      </div>
      <nav className="nav" ref={menu}>
        <i
          className={`${isExpanded ? "fa fa-times" : "fa fa-bars"}`}
          aria-hidden="true"
          onClick={() => {toggleExpanded(!isExpanded);}}
        />
        <div className={`menu ${isExpanded ? "expanded" : "collapsed"}`}>
          <ul>
            <li><NavLink to="/projects" className="strikeNav" activeClassName="activePage" onClick={() => {toggleExpanded(!isExpanded);}}>Work</NavLink></li>
            <li><NavLink to="/about" className="strikeNav" activeClassName="activePage" onClick={() => {toggleExpanded(!isExpanded);}}>About</NavLink></li>
            <li><a className='strikeNav' href="mailto:wpepera@icloud.com?Subject=Hello,%20William" target="_blank" rel="noopener noreferrer" onClick={() => {toggleExpanded(!isExpanded);}}>Contact</a></li>
            <li><SocialBar/></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
