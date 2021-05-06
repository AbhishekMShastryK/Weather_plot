import {React,useState,useEffect, useRef} from 'react';
import './App.css'
import { Line } from "react-chartjs-2";

import axios from "axios";



const options = {
  legend: {
    display: false,
  },

  scales: {
    xAxes: [{
        gridLines: {
            borderDash: [8, 4],
            color: "#111111",
            lineWidth: 0.3,
          
        },
        
       
    }],

    yAxes: [{
        gridLines: {
            borderDash: [8, 4],
            color: "#111111",
            lineWidth: 0.3
        },
    }]
}

}

// function geo(){
//   return
// }
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};



const  App = () => {
  const [latitude, setLatitude] = useState(13.3409)
  const [longitude, setLongitude] = useState(74.7421)
  // const location =  Geolocation();
  const [chartData, setChartData] = useState({});
  const [humidityData, sethumidityData] = useState({});
  const [prevTemp , setTemp] = useState([])
  const [prevHumd , setHumd] = useState([]) 
  const [prevTime, setTime] = useState([])
  // setLatitude(location.coordinates.lat)
  // setLongitude(location.coordinates.lng)
  
 

  const api = {
    key: "db92dbd0e5ed39b512b44ff3fa2f11d4",
    base: 'https://api.openweathermap.org/data/2.5/weather?'
  }
  
  
  

  const [errorMessage, setErrorMessage] = useState(null)  
  const [currentWeather, setCurrentWeather] = useState()
  const [unitSystem, setunitSystem] = useState('metric')

   const chart =() => {
    //  let temp =[]
    //  let hours = []
     const weatherUrl = `${api.base}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${api.key}`
     axios
     .get(weatherUrl)
     .then(res =>{
       console.log(res)
       setCurrentWeather(res.data)
           // console.log("time",t, res.data.main.temp)
           var sec = res.data.dt;
           var date = new Date(sec*1000);
           const t = date.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
         
           if (prevTemp.length === 10 || prevTime.length === 10 || prevHumd.length === 10){
              setTemp(prev => prev.slice(1))
              setTime(prev => prev.slice(1))
              setHumd(prev => prev.slice(1))
            }

           setTime(prev => [...prev,t])
           setHumd(prev => [...prev,res.data.main.humidity])
           setTemp (prev=> [...prev, res.data.main.temp])
           console.log(prevTime,prevTemp)
           setChartData({
            labels: prevTime,
            datasets:[
              {
             data: prevTemp,
             fill: true,
             borderColor: "#111111",
             pointBackgroundColor: '#D68520'
              }
            ]
          })

          sethumidityData({
            labels: prevTime,
            datasets:[
              {
             data: prevHumd,
             fill: true,
             borderColor: "#111111",
             pointBackgroundColor: '#D68520'
              }
            ]
          })
           
     })
     .catch(err => {
       console.log(err);
     })
     console.log(prevTime,prevTemp)
     console.log(prevHumd)
      // console.log( currentWeather)

    };

    // useEffect(()=>{
    //  chart()
    // },[])


    useInterval(() => {
      chart()
    }, 10000)
   

   
  return (
    
    <div className="app">
      <div className="app_header">
        <h1>Micro Weather Station</h1>
      </div>
      <div className="Line_Graph">
     
      <h3> Temperature </h3>
      

       <Line 
              options={options}
              data={chartData}
              
             />     
      <h3> Humidity </h3>
     
        <Line 
              options={options}
              data={humidityData}
              
             />      
      </div>
    </div>
  );
}



export default App;
