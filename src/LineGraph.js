import {React,useState,useEffect} from "react";
import './LineGraph.css'
import { Line } from "react-chartjs-2";

const options = {
  legend: {
    display: false,
  },
  title: {
    display:true,
    text:'Temperature',
    fontSize:20,
    fontColor: '#111111'
  },
  scales: {
    xAxes: [{
        gridLines: {
            borderDash: [8, 4],
            color: "#111111",
            lineWidth: 0.3,
          
        }
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



export default function LineGraph({currentWeather, ...props}) {
  
  if (!currentWeather) {
    return <div>Loading...</div>; 
  }  
  console.log(currentWeather)

  const chartData = [];
  const time = []
  for (let i =0; i<=8;i++)
  {
    chartData.push(currentWeather.main.temp)
  }
  console.log(chartData)





  return (
    <div className={props.className}>
      <div className="tempGraph">
        <Line 
              options={options}
              data={{
                labels: ["0:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "0:00"],
                datasets: [
                  {
                    data: chartData,
                    fill: true,
                    borderColor: "#111111",
                    pointBackgroundColor: '#D68520'
                  },
                ]
              }} />
      </div>
      <div className="humGraph">
        <Line 
              options={options}
              data={{
                labels: ["0:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "0:00"],
                datasets: [
                  {
                    data: [currentWeather.main.humidity],
                    fill: true,
                    borderColor: "#111111",
                    pointBackgroundColor: '#D68520'
                  },
                ]
              }} />
      </div>
      <div className="preGraph">
        <Line 
              options={options}
              data={{
                labels: ["0:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "0:00"],
                datasets: [
                  {
                    data: [currentWeather.main.pressure],
                    fill: true,
                    borderColor: "#111111",
                    pointBackgroundColor: '#D68520'
                  },
                ]
              }} />
      </div>
    </div>
  );
}
