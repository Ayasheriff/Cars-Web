import React from "react";
import { useState } from "react";
import './CarCards.scss';
// import redCar from '../assets/car-red.png';
// import silverCar from '../assets/car-silver.png';
// import whiteCar from '../assets/car-white.png';
// import { Link } from "react-router-dom";
import {FaCog, FaBolt, FaRedo, FaSync } from "react-icons/fa";
import {GrSync } from "react-icons/gr";
import {TbArrowsRandom } from "react-icons/tb"; 
import CarSilver from '../../../assets/car1.png';
import CarWhite from '../../../assets/car2.png';
import CarRed from '../../../assets/car3.png';


const CarCards=() =>{
const [CarCards]= useState([


    {
        subtitle:'74% Recommend',
        img: CarSilver,
        backgroundColor:'#E1DFA4',
        title: 'Mini Cooper',
        speed: '130k',
        price: '$28/h',
    },

    {
        subtitle:'64% Recommend',
        img: CarWhite,
        backgroundColor:'#E3ECF1',
        title: 'Porsche 911 Carrera',
        speed: '132k',
        price: '$32/h'
    },
    {
        subtitle:'64% Recommend',
        img: CarRed,
        backgroundColor:'#F4E3E5',
        title: 'Porsche 911 Carrera',
        speed: '132k',
        price: '$32/h'
    },



   
     
]);
 return (
       
     <div className="carCards">
       {CarCards.map((CarCards, i)=>(
         <div key={i} className="carCard" style={{backgroundColor:CarCards.backgroundColor}}>
            <h5 className="subtitle" key={i}><TbArrowsRandom className="sync"/> {CarCards.subtitle}</h5>
        
            <div className="cardHeader">
              
              <img className="card-img" src={CarCards.img} style={{width:"170px"}}></img>
              <h3 className="card-title">{CarCards.title}</h3>
            </div>
           
           <div className="card-items">
              <p className="speed"> <GrSync className="redo" /> {CarCards.speed} <FaCog className="cog" />  <FaBolt className="bolt"/></p>
             <span className="price">{CarCards.price}</span> 
           </div>
         </div>
       ))};
     </div>
   
    );

}
  
export default CarCards;

// import React from "react";
// import {FaCog, FaBolt, FaRecycle, FaSync } from "react-icons/fa";

// export function CarCards(props) {
//     return(
//         <div className="car-list">
//            <div key={props.id} className='carCard'>
//               <FaRecycle className="recycle" />
//               <div className="cardTitle">{props.title}</div>
//              <img src={props.image} alt='card-img' className="cardimage"></img>
             
//               <div className="content">
//                  <h3 className="cardName">{props.name}</h3>
//                  <div className="displayStack">
//                     <FaSync className="sync" />
//                     <div className="cardPrice">{props.price}</div>
//                     <FaCog className="cog" />
//                     <FaBolt className="boldSolid" />
//                     <div className="cardSales">{props.sales}</div>
//                  </div>
//               </div>
//            </div>
//         </div>
//     )
// }