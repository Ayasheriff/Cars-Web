import React from "react";
import { useState } from "react";
import './ServicesCards.scss';


const ServicesCards=() =>{
    const [CardsNumb]= useState([
        {backgroundColor:'white', title: 'A1', textColor:'gray'},
        {backgroundColor:'white', title: 'A2', textColor:'gray'},
        {backgroundColor:'white', title: 'A3', textColor:'gray'},
        {backgroundColor:'#FF6370', title: 'A4',textColor:'white'},
        {backgroundColor:'white', title: 'A5', textColor:'gray' },
        {backgroundColor:'white', title: 'A6', textColor:'gray'},
        {backgroundColor:'white', title: 'A7', textColor:'gray'},
        {backgroundColor:'white', title: 'A8', textColor:'gray'},
        {backgroundColor:'white', title: 'A9', textColor:'gray'},
        {backgroundColor:'#FF6370', title: 'A10',textColor:'white'},

        {backgroundColor:'#FF6370', title: 'B1', textColor:'white'},
        {backgroundColor:'white', title: 'B2', textColor:'gray'},
        {backgroundColor:'white', title: 'B3', textColor:'gray'},
        {backgroundColor:'white', title: 'B4', textColor:'gray'},
        {backgroundColor:'white', title: 'B5', textColor:'gray'},
        {backgroundColor:'white', title: 'B6', textColor:'gray'},
        {backgroundColor:'#FF6370', title: 'B7', textColor:'white'},
        {backgroundColor:'white', title: 'B8', textColor:'gray'},
        {backgroundColor:'white', title: 'B9', textColor:'gray'},
        {backgroundColor:'#A162F7', title: 'B10', textColor:'white'}, 
    ]);
    return(
        <div className="cardsNumber">
       {CardsNumb.map((CardsNumb, i)=>(
         <div className="cardnumber" style={{backgroundColor:CardsNumb.backgroundColor}}>
            <h5  className="cardNumb-title" key={i} style={{color:CardsNumb.textColor}}> {CardsNumb.title}</h5>
         </div>
       ))}
     </div>
   
    );

}
export default ServicesCards ;