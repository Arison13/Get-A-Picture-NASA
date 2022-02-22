import React from 'react'
import './MainInfo.css'

function MainInfo(props) {
    let state = `Date Posted: ${props.state.date}`

    if(!props.state.date){
        state = ""
    }
    
  return (
    <div className='main'> 
        <img src={props.state.hdurl} alt={props.state.title}/>
        <div className='explanation-section'> 
            <p className='title'> {props.state.title}</p>
            <p className='explanation'> {props.state.explanation}</p>
            <p className='date'>{state}</p>
        </div> 
    </div>
        
  )
}

export default MainInfo