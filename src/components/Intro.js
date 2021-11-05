import React, { useState } from 'react'; // Import the Component component from React
import Typing from 'react-typing-animation';


function Intro(props) {

  const [introVis, changeIntroVis] = useState(true)

  return (
      <div
        className={`intro-wrapper ${introVis ? "":"introGone"}`}
      >
        <Typing onFinishedTyping={() =>{changeIntroVis(false);}}>
          <a>Hi,<Typing.Delay ms={300}/> I'm William,<Typing.Delay ms={300}/> a design engineer based in London. <Typing.Delay ms={300}/></a>
        </Typing>
      </div>
  );
}

export default Intro;
