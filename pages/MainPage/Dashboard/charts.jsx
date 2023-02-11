import React from "react";
import './chart.scss'


import BarChart from "./BarChart";
import { useState } from "react";
// import { UserData } from "./Chart/Data";
import LineChart from './lineChart';


const Chart =() =>{
   // const [UserData, setUserData]=useState({
   //    labels:UserData.map((data)=>data.name),
   //    datasets:[{
   //       label: 'Users Gained',
   //       data: UserData.map ((data)=>data.userGain),
   //       backgroundColor:['lightgrey','blue'],
   //    }]
   // })
  
    return(
        <div className="charts">
           <div className="chart-col">
             <h3 className='chart-title'>Mile <span className="stat">statistics</span> </h3>
             <div className="chartMiniTitle">
                  <ul className="chart-subtitle">
                     <li className='min-title'>Day</li> 
                     <li className='min-title'>Week</li> 
                     <li className='min-title'>Month</li> 
                  </ul>
                  <span className="chart-miles">256 Miles</span>
                  
             </div>
             <div className="barChart" style={{width:400}}>
             <BarChart />
             </div>
             
               {/* <div style={{width:700}}>
                  <BarChart chartData={UserData} />
                */}
             {/* <ul className="chart-items">
                <li>1 PM</li>
                <li>2 PM</li>
                <li>3 PM</li>
                <li>4 PM</li>
                <li>5 PM</li>
                <li>6 PM</li>
                <li>7 PM</li>
             </ul> */}
           </div>

           <div className="chart-wave">
               <h3 className="chart-title">Car <span className="stat">Statistics</span></h3>
             
             <div className="wave-subtitle">
                <div className="wave-date">20 february 2022</div>
                <ul className="wave-day">
                    <li className="mini-wav">Day</li>
                    <li className="mini-wav">Week</li>
                    <li className="mini-wav">Month</li>
                </ul>
             </div>
             
             <div className="wavyChart">
                <LineChart />
             </div>
           </div>

        </div>
    )
}

export default Chart ;