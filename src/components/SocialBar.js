import React from 'react'; // Import the Component component from React
import '../css/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faBehance} from '@fortawesome/free-brands-svg-icons'

function SocialBar(props) {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/william-pepera-15978598/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://www.instagram.com/williamdotkwasi/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://www.behance.net/williampepera" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faBehance} /></a>
    </div>
  );
}

export default SocialBar;
