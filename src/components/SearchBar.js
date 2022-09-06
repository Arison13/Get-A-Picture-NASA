import React from 'react'
import './SearchBar.css'

function SearchBar({currentDate,handleGetToday,dateInput, handleSubmit, setDateInput}) {

  const dateLimit = "1995-06-16";
  
  return (
   <form onSubmit={handleSubmit} > 
      <div className='bar'>
        <input 
          placeholder='Search for your favorite date' 
          value={dateInput} 
          onInput={e => setDateInput(e.target.value)} 
          onSubmit={handleSubmit}
          type="date"
          max={currentDate}
          min={dateLimit}
          />
          <p> <span>Must be after 1995-06-16</span></p>
      </div>

      <div className='btns'>
        <button> Search </button> 
        <button onClick={handleGetToday}> Get Today</button>
      </div>
        
    </form>
  )
}

export default SearchBar