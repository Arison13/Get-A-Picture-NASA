import React from 'react'
import Footer from './Footer'
import './MainInfo.css'
import VideoPlayer from './VIdeoPlayer'

function MainInfo({state}) {
  
  return (
    <div className='main'> 
    <div className='main-info'> 
      <a href={state.url} target="_blank" rel="noreferrer">
        { 
          state.media_type === "video" 
          ? <VideoPlayer state={state}/>
          : <img src={state.hdurl} alt={state.title}/> 
        }
      </a>

      <div className='explanation-section'> 
          <p className='title'> {state.title}</p>
          <p className='explanation'> {state.explanation}</p>
          <p className='date'>{state.date}</p>
      </div> 

    </div>
      <Footer/>
    </div>
        
  )
}

export default MainInfo