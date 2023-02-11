import React, { useState } from "react";
import './Dashboard.scss';
// import Img from '../assets/1.png';
// import redcar from '../assets/car-red.png';
// import CarCards from "../CarCards";
import { FaBolt, FaArrowsAltV,  FaTint } from "react-icons/fa";
import { GiStoneWheel } from "react-icons/gi";
import { Link } from "react-router-dom";
import CarCards from './CarCards';
import Chart from "./charts";

import Layout from "../../../component/Sidebar/Sidebar";
// import { CircularProgressbar } from "react-circular-progressbar";
// import 'react-circular-progressbar/dist/CircularProgressbar.css';
// import ReviewsProvider from "./progressbar";
// import { Value } from "sass";
// import DoughnutChart from "../Chart/Doughnut";
// import PieChart from '../Chart/PieChart'
// import Yellow from '../../assets/yello.png';
// import Purple from '../../assets/purple.png';
// import Pink from '../../assets/pink.png';
// import White from '../../assets/white.png';
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';



const Dashboard = () => {
  const percentage = 45;
  const percentage1 = 57;
  const percentage2 = 9;
  const percentage3 = 25;
  
  
  
 

  return (
    <div className="cards">
      <div className="card first">
        <h2 className="simbol"><FaBolt  className='boltt'/></h2>
        <h3 className="letter">Energ</h3>
        <div className="circularBar">
          <p className="precentageNumb">45%</p>
          <CircularProgressbar value={percentage}
             styles={buildStyles({  
               rotation: 0.5,
               strokeLinecap: 'butt',
               textSize: '24px',
               pathTransitionDuration: 0.5,
               transition: 'stroke-dashoffset 0.5s ease 0s',
               transformOrigin: 'center center',
               pathColor: `orange`,
               textColor: 'black',
               trailColor: '#d6d6d6',
               backgroundColor: '#3e98c7',
          })} />
        </div>
        {/* <div className="pieChart" style={{width:100}}><PieChart /></div> */}
       
      </div>

      <div className="card other">
        <h2 className="simbol"><FaArrowsAltV style={{ color: '#FF7E86' }} /></h2>
        <h3 className="letter">Range</h3>
        <div className="circularBar">
        <p className="precentageNumb">157k%</p>
        <CircularProgressbar value={percentage1}
               styles={buildStyles({
               rotation: 0.35,
               strokeLinecap: 'butt',
               textSize: '24px',
               pathTransitionDuration: 0.5,
               transition: 'stroke-dashoffset 0.5s ease 0s',
               transformOrigin: 'center center',
               pathColor: `#FF7E86`,
               textColor: 'black',
               trailColor: '#d6d6d6',
               backgroundColor: '#3e98c7',
          })} />
        </div>
        {/* <div className="doughnutChart" style={{width:100}}><DoughnutChart /></div> */}
        {/* <img className="pieChart" src={Pink}></img> */}
      </div>

      <div className="card other">
        <h2 className="simbol"><FaTint className="tint" style={{ color: 'rgb(73, 219, 255)' }} /></h2>
        <h3 className="letter">Break fluid</h3>
        <div className="circularBar">
        <p className="precentageNumb">9%</p>
        <CircularProgressbar
         value={percentage2}
         
         styles={{
           root: {},
           path: {
             stroke: `rgb(73, 219, 255)`,
             strokeLinecap: 'butt',
             transition: 'stroke-dashoffset 0.5s ease 0s',
             transform: 'rotate(0.75turn)',
             transformOrigin: 'center center',
           },
           trail: {
             stroke: '#d6d6d6',
             strokeLinecap: 'butt',
             transform: 'rotate(0.25turn)',
             transformOrigin: 'center center',
           },
           text: {
            
             fill: 'black',
             fontSize: '24px',
           },
           background: {
             fill: '#3e98c7',
           },
         }}
      />
        </div>
        {/* <img className="pieChart" src={Purple}></img> */}
      </div>

      <div className="card other">
        <h2 className="simbol"><GiStoneWheel style={{ color: '#F6CC0D' }} /></h2>
        <h3 className="letter">Tire Wear</h3>
        <div className="circularBar">
        <p className="precentageNumb">25%</p>
        <CircularProgressbar
         value={percentage3}
         
         styles={{
           root: {},
           path: {
             stroke: `#F6CC0D`,
             strokeLinecap: 'butt',
             transition: 'stroke-dashoffset 0.5s ease 0s',
             transform: 'rotate(0.25turn)',
             transformOrigin: 'center center',
           },
           trail: {
             stroke: '#d6d6d6',
             strokeLinecap: 'butt',
             transform: 'rotate(0.25turn)',
             transformOrigin: 'center center',
           },
           text: {
            
             fill: 'black',
             fontSize: '24px',
           },
           background: {
             fill: '#3e98c7',
           },
         }}
      />
    </div>
        {/* <img className="pieChart" src={Yellow} ></img> */}
      </div>



      <Chart />
      <CarCards />

      
    </div>
  );
}
export default Dashboard;







// const [cards, setCards] = useState([
 //     { name: 'Energy' },
 //     { name: 'Range' },
 //     { name: 'Break fluid'},
 //     { name: 'Tire Wear' },
 // ])
 // const {score} =props;
 // const calcColor =(precent, start, end) =>{
 //   let a = precent /100,
 //   b= (end-start) * a,
 //   c= b + start;
 //   return "hsl(" + c + ", 100%, 50%)";
 // }


{/* <div className="content">
              {
                  cards.map(cards => <h1 key={cards.id}> {cards.name} </h1>)
              }
          </div> */}

      {/* {contents.map(contents =>(
            <CarCards 
             key={contents.id}
             title={contents.title}
             image={contents.image}
             name={contents.name}
             price={contents.price}
             sales={contents.sales}

            />
          ))} */}



 {/* <ReviewsProvider valueStart={0} valueEnd={score}>
          {(value) =>(
            <CircularProgressbar
             value={score}
             text={'${value}%'}
             circleRatio={0.7}
             styles={{
              trail: {
                strokeLinecap: 'butt',
                transform: 'rotate(-126deg)',
                transformOrigin: "center center"
              },
              path: {
                strokeLinecap: 'butt',
                transform: 'rotate(-126deg)',
                transformOrigin: "center center",
                stroke: calcColor(value, 0, 120),
              },
              text: {
                fill: '#ddd'
              },
          }}
          strokeWidth={10}
        />
          )}
        </ReviewsProvider> */}