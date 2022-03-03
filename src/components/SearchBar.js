import React from 'react'
import './SearchBar.css'

function SearchBar(props) {
  return (
   <form onSubmit={props.handleSubmit}> 
      <div className='bar'>
        <input placeholder='YYYY-MM-DD' 
          value={props.dateInput} onInput={e => props.setDateInput(e.target.value)} 
          onSubmit={props.handleSubmit}
          type="date"/>
      </div>
        
        <div className='btns'>
          <button> Search </button> 
          <button onClick={props.handleSubmit}> Get Today</button>
        </div>
        
        <p> <span>Must be after 1995-06-16</span></p>
    </form>

  )
}

export default SearchBar