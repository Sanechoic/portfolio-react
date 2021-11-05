import React from 'react';
import ReactPlayer from 'react-player'

function SlideVideo(props) {
  return(
    <div className="slideVideo" style={{top:props.top}}>
      <ReactPlayer
       className='react-player'
       url={props.src}
       playing
       volume={0}
       muted
       loop
       controls
       height='100%'
       width='100%'
      />
    </div>
  )
}

export default SlideVideo;
