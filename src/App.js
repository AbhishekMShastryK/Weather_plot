import {React,useState,useEffect} from 'react';
import './App.css'
import LineGraph from './LineGraph.js'
import Geolocation from './Component/Geolocation.js'



function geo(){
  return
}

function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const location =  Geolocation();
  // setLatitude(location.coordinates.lat)
  // setLongitude(location.coordinates.lng)
  const api = {
    key: "164cf4f8f37048ac1ab5c343313e2cb9",
    base: 'https://api.openweathermap.org/data/2.5/weather?'
  }
  
//  console.log("CALUEEEE",);
  

  const [errorMessage, setErrorMessage] = useState(null)  
  const [currentWeather, setCurrentWeather] = useState()
   const [unitSystem, setunitSystem] = useState('metric')

    console.log(  "Hsjjh",   location.loaded ? JSON.stringify(location) : "NOT")
    useEffect(() =>{
      
      load()
    },[unitSystem])
    async function load(){
      
        setErrorMessage(null)



        const weatherUrl = `${api.base}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${api.key}`
        console.log(weatherUrl)
        
        
        const response = await fetch(weatherUrl)
        
        const result = await response.json()
        
        if(response.ok){
          // console.log(result)
          setCurrentWeather(result)
        
        }
        
        else{
          setErrorMessage(result.message)
        } 
      }
    
  return (
    <div className="app">
      <div className="app_header">
        <h1>Micro Weather Station</h1>
      </div>
      <div className="Line_Graph">
        <LineGraph className="app_graph" currentWeather={currentWeather }/> 
      </div>
    </div>
  );
}



export default App;
