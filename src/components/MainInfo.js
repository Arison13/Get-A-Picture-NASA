import React from 'react'
import './MainInfo.css'

function MainInfo({state}) {
    
  return (
    <div className='main'> 
    <div className='main-info'> 
      <a href={state.url} target="_blank" rel="noreferrer">
        <img src={state.hdurl} alt={state.title}/>
      </a>
      <div className='explanation-section'> 
          <p className='title'> {state.title}</p>
          <p className='explanation'> {state.explanation}</p>
          <p className='date'>{state.date}</p>
      </div> 
    </div>
      <footer> 
        <p> Made By 
          <a className='linkedIn' href='https://www.linkedin.com/in/arisonarias/' target="_blank" rel="noreferrer"> Arison Arias </a>
        </p>
      </footer>
    </div>
        
  )
}

export default MainInfo