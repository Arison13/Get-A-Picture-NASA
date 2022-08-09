import './App.css';
import axios from 'axios';
import { useState } from 'react'
import SearchBar from './components/SearchBar';
import MainInfo from './components/MainInfo';

function App() {
  const [state, setState] = useState([])
  const [dateInput, setDateInput]= useState("")
  let currentDate; 
  
  const handleDate = () => {
    const Today = new Date();
    let month = Today.getMonth() + 1;
    let day = Today.getDate();
    let year = Today.getFullYear();
  
      if(month < 10) {
        month = `0${month.toString()}`
      }
      if(day < 10 ){
        day = `0${day.toString()}`
      }
    return currentDate = `${year}-${month}-${day}`
  }
  handleDate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${dateInput}`)
    .then(res => {
      setState(res.data)
    }).catch(err => console.log(err))
  }
  
  const handleGetToday = (e) => {
    e.preventDefault();
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${currentDate}`)
    .then(res => {
      console.log(res)
      setState(res.data)
    }).catch(err => console.log(err))
  }
  
  console.log(currentDate)
  return (
    <div className="App">
      
      <h1>WELCOME</h1>
      <h4> Enter A Date To See The Picture That NASA Took On That Date</h4>      
      <SearchBar currentDate={currentDate} handleGetToday={handleGetToday} handleSubmit={handleSubmit} dateInput={dateInput} setDateInput={setDateInput} />
      <MainInfo state={state}/>
      <footer> 
        <p> Made By 
          <a className='linkedIn' href='https://www.linkedin.com/in/arisonarias/' target="_blank" rel="noreferrer"> Arison Arias </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
