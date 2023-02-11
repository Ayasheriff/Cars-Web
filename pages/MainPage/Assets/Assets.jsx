import React from "react";
import './Assets.scss';
import Carpana from '../../../assets/Pannamera4.png';
import { BsChat } from 'react-icons/bs'
import { BiErrorCircle } from 'react-icons/bi'
import { TiSpanner } from 'react-icons/ti'
import { AiOutlineLineChart } from 'react-icons/ai'
import CurveChart from "./CurveChart";

const Assets= () =>{
    return(
        <div className="assetsPage">
           
          <h3 className="assets-title">Assets</h3>
            
            
         <div className="assets-divs">
         <div className="assets-div1">
           <div className="blueground">
            <div className="blueLabels">
            <p className="assets-name">Fuel Usage</p>
            <h4 className="assets-numb">2903.89 Ltr</h4>        
            <p className="assets-name">Total Coat</p>
            <h4 className="assets-numb">$300,290.00</h4> 
       
            <p className="assets-name">KM Driven</p>
            <h4 className="assets-numb">2903.89 Ltr</h4>        
            <p className="assets-name">Top Speed</p>
            <h4 className="assets-numb">$5.2K</h4>  
            </div>      
           </div>
            <img className="pannamera" src={Carpana} ></img>
         </div>
         
          <div className="assets-div2">
            <div className="waveChartLine">
             <div className="asset-chart">
              <h4 className="asset-chartTitle">Activity</h4>
              <span className="viewall-chart">View All</span>
             </div>
             <div className="curveChart"  >
               < CurveChart />
               <div className="barChart-made">
                  <div className="LineBar"></div>
                 <div className="lineData">
                    <h5 style={{color:'grey'}}>Traveled last month</h5>
                   <h3>50 Km</h3>
                 </div>
               </div>
              </div>
            </div>
           
        

           <div className="asset-double">
             <div className="asset-icons">
               <h3 className="icons-header">Notes</h3>

               <div className="icons-labels">
                <div className="textIcon">
                  <div><h2 className="icon-logo"><BsChat /></h2></div>
                  <div>
                    <h4 className="icons-date">Monday, 6th April 2020</h4>
                    <p className="icons-para">Book for General Services</p>
                    <button className="btnIcon complete" >COMPLETED</button>
                  </div>
                </div>
                
                <div className="textIcon">
                 <div><h2 className="icon-logo"><BiErrorCircle  style={{color:'red'}}/></h2></div>
                  <div>
                    <h4 className="icons-date">Thursday, 24th october 2021</h4>
                    <p className="icons-para">vechile LV 001 has been marked for recall</p>
                    <button  className="btnIcon">14:07-21/11/2021</button>
                  </div>
                </div>
               
                <div className="textIcon">
                  <div><h2 className="icon-logo"><TiSpanner style={{color:'grey'}}/></h2></div>
                  <div>
                   <h4 className="icons-date">Monday, 18th August 2018</h4>
                   <p className="icons-para">Mentenance Completed, Collect</p>
                   <button  className="btnIcon">14:07-21/11/2021</button>
                  </div>
                </div>
                
               </div>
          
              </div>

              <div className="asset-check">
                <div className="check-header">
                 <h3 className="sensors">Available Sensors</h3>
                 <p className="dropdowen">Assets</p>
                </div>
                <hr className="checkLine"/>
                <div className="check-body">
                  <div className="checkbox" style={{color:'#D43B3B'}}>
                    <div className="checkAsset" style={{color:'#D43B3B'}}>
                    <input  type='checkbox' checked />
                    <label>Asset - Fuel Consumed (10 </label>
                    </div>
                    <h2 className="checkIcon"><AiOutlineLineChart style={{color:'#D43B3B'}}/></h2>
                  </div>

                  <div className="checkbox">
                   <div className="checkAsset">
                   <input type='checkbox' />
                   <label>Asset - Odometer (Km) </label>
                   </div>
                   <h2 className="checkIcon"><AiOutlineLineChart /></h2>
                  </div>

                  <div className="checkbox">  
                   <div className="checkAsset">
                   <input type='checkbox' />
                    <label>Asset - Runtime (Km) </label>
                   </div>
                    <h2 className="checkIcon"><AiOutlineLineChart /></h2>
                  </div>

                  <div className="checkbox">
                    <div className="checkAsset">
                    <input type='checkbox' />
                    <label>Asset - Speed (hr) </label>
                    </div>
                    <h2 className="checkIcon"><AiOutlineLineChart /></h2>
                  </div>

                  <div className="checkbox"> 
                  <div className="checkAsset">
                   <input type='checkbox' />
                    <label>Asset - Speed (hr) </label>
                  </div>
                    <h2 className="checkIcon"><AiOutlineLineChart /></h2>
                  </div>
                </div>
               
                <button className="seeAll">See All</button>
              </div>
            </div>

            <div className="asset-words">
              <div className="reminder-header">
                <h2 className='reminderTitle'>Reminder</h2>
                <button className="addNew">+ Add New</button>
              </div>
              <hr className="textLine"/>
              <div className="firstCol bars">
                <h4>Descriptin</h4>
                <h4>Due</h4>
                <h4>Overdue</h4>
                <h4>Notify</h4>
                <h4>Status</h4>
              </div>
              <hr className="textLine"/>
              <div className=" bars">
                <h4>rgent safty Recall</h4>
                <h4>06/04/2020</h4>
                <h4>08/04/2020</h4>
                <h4>David Demo</h4>
                <h4>Completed</h4>
              </div>
              <hr className="textLine"/>
              <div className=" bars">
                <h4>urgent safty Recall</h4>
                <h4>06/04/2020</h4>
                <h4>08/04/2020</h4>
                <h4>David Demo</h4>
                <h4>Completed</h4>
              </div>
              
            </div>

          </div>

           
         </div>
         
        
           
         

        </div>
    )
}

export default Assets;