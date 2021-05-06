// import {React,useState,useEffect} from "react";
// import './LineGraph.css'
// import { Line } from "react-chartjs-2";





// export default function LineGraph({currentWeather, ...props}) {
 

//   var sec = currentWeather.dt;
//   var date = new Date(sec*1000);
//   var timestr = date.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    
//   console.log("DATEEE",date,timestr);
 
//   function chartdata(){
//     let i = currentWeather.main.temp
//     let time = []
//     let data_temp = []
//     for ( i in currentWeather){
//         time.push(timestr)
//         data_temp.push(currentWeather.main.temp)
//     }

    
//   }

//   let counter = setInterval(chartdata, 10000)

//   console.log("Counter",counter)
//   return (
//     <div className={props.className}>
//       <div className="tempGraph">
//         <Line 
//               options={options}
//               data={{
//                 labels:time, //time
//               datasets: [{
//                   data: data_temp,
//                   fill: true,
//                   borderColor: "#111111",
//                   pointBackgroundColor: '#D68520'
//               }],
              
//               }} />
            
//       </div>
//       <div className="humGraph">
//         <Line 
//               options={options}
//               data={{
                
//                 datasets: [
//                   {
//                     data: [currentWeather.main.humidity],
//                     fill: true,
//                     borderColor: "#111111",
//                     pointBackgroundColor: '#D68520'
//                   },
//                 ]
//               }} />
//       </div>
//       <div className="preGraph">
//         <Line 
//               options={options}
//               data={{
                
//                 datasets: [
//                   {
//                     data: [currentWeather.main.pressure],
//                     fill: true,
//                     borderColor: "#111111",
//                     pointBackgroundColor: '#D68520'
//                   },
//                 ]
//               }} />
//       </div>
//     </div>
//   );
// }
