import './App.css';
import axios from 'axios';
import { useState } from 'react'
import SearchBar from './components/SearchBar';
import MainInfo from './components/MainInfo';
import { handleDate } from './helpers';

function App() {
  const [state, setState] = useState()
  const [dateInput, setDateInput] = useState("")
  const [error, setError] = useState(false)
  const currentDate = handleDate(); 


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!dateInput){
      setError(true)
      setState(null)
    }
    else {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${dateInput}`)
        .then(res => {
          setError(false)
          setState(res.data)
        })
        .catch(err => {
          setError(true)
          console.log(err)
        })
    }
  }

  const handleGetToday = (e) => {
    
    e.preventDefault();
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${currentDate}`)
    .then(res => {
      setError(false)
      setState(res.data)
    }).catch(err => console.log(err))
  }
  
  return (
    <div className="App">
      <h1>WELCOME</h1>
      <h4> Enter A Date To See The Picture That NASA Took On That Date</h4>      
      <SearchBar 
        errorState={error}
        currentDate={currentDate} 
        handleGetToday={handleGetToday} 
        handleSubmit={handleSubmit} 
        dateInput={dateInput} 
        setDateInput={setDateInput} 
      />
      
      {error && <h2> ERROR! <br/> Please choose a date to continue </h2>}
     
      {
        state ? <MainInfo state={state}/> : <h4>Choose a date to see what picture did APOD feature on your birthday!</h4>
      }
      
    </div>
  );
}

export default App;
