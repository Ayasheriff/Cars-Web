import React from "react";
import './Booking.scss'
import { useState } from "react";
import {FaSync,FaHeart, FaUser } from "react-icons/fa";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import Black1 from '../../../assets/black1.png'
import Black2 from '../../../assets/black2.png'
import Black3 from '../../../assets/blck3.png'
import Blue1 from '../../../assets/blue1.png'
import White1 from '../../../assets/white1.png'
import White2 from '../../../assets/white2.png'

import CardDropdown from "./cardDropdown";
import CardToyota from "./ToyotaCard";
import{MdKeyboardArrowDown} from 'react-icons/md';

import {useDispatch, useSelector} from 'react-redux';
// import { toggleCardHidden } from "../../../Redux/actions/cardActions";
// import { Connect } from "vite";

// import { Connect } from "vite";
// import { toggleCardHidden } from "../../../Redux/actions/cardActions";




const Booking=() =>{
    const [Booking]= useState([
    {
        subtitle:'coupe',
        img: Black1,
        title: 'Porsche 718 Cyman S',
        speed:  '' ,
        type: 'maual',
        price: '$400/d'
    },

    {
        subtitle:'coupe',
        img: Black2,
        title: 'Porsche 718 Cyman S',
        speed:  '' ,
        type: 'maual',
        price: '$400/d',
    },

    {
        subtitle:'coupe',
        img: White1,
        title: 'Porsche 718 Cyman S',
        speed: '' ,
        type: 'maual',
        price: '$400/d'
    },

    {
        subtitle:'coupe',
        img: Blue1,
        title: 'Porsche 718 Cyman S',
        speed:  '' ,
        type: 'maual',
        price: '$400/d'
    },

    {
        subtitle:'coupe',
        img: White2,
        title: 'Porsche 718 Cyman S',
        speed:  '' ,
        type: 'maual',
        price: '$400/d'
    },

    {
        subtitle:'coupe',
        img:Black3,
        title: 'Porsche 718 Cyman S',
        speed: '' ,
        type: 'maual',
        price: '$400/d'
    },
    {
        subtitle:'coupe',
        img:Black1,
        title: 'Porsche 718 Cyman S',
        speed:  '' ,
        type: 'maual',
        price: '$400/d'
    },
    {
        subtitle:'coupe',
        img:Black2,
        title: 'Porsche 718 Cyman S',
        speed: '' ,
        type: 'maual',
        price: '$400/d'
    },
    {
        subtitle:'coupe',
        img:White2,
        title: 'Porsche 718 Cyman S',
        speed:  '' ,
        type: 'maual',
        price: '$400/d'
    },

   
     
    ]);

    const [open, setOpen] = React.useState(false);

    const handleOpenNew = () => {
      setOpen(!open);
    };


    const [view, setView] = React.useState(false);

    const handleOpenToyota = () => {
      setView(!view);
    };


    // const [isRed, setIsRed] = React.useState(false)
    // const [isOrange, setIsOrange] = React.useState(false)
    // const mapDispatchToProps = dispatch =>({
    //     toggleCardHidden: ()=>dispatch(toggleCardHidden())
    // });
    // export default Connect(
    //     null,
    //     mapDispatchToProps
    // )(Booking);

 return (
       <section className="booking-items">
            <h2 className="card-title">Booking</h2>
            <div className="bookingHeader">
                <div className="bookingBtns">
                  <button className="bookingBtn" onClick={handleOpenNew}>New <MdKeyboardArrowDown /></button>
                 {open ? (<CardDropdown/>):null}
                    <button className="bookingBtn2" onClick={handleOpenToyota}>Toyota <MdKeyboardArrowDown/></button>
                    {view ? (<CardToyota/>):null}
                    
                </div>
               
                <div className="bookingIcons">
                     <h3 className='dashboardSquares'><HiOutlineSquares2X2  /></h3>
                    <h3 className='lineCircles'> <HiOutlineAdjustmentsHorizontal /></h3>
                </div>
            </div>
           <div className="booking-container">
                
               {Booking.map((Booking, i)=>(
                 <div className="bookingCard">
                    <div className="bookingCardHeader">
                     <h3 className="booking-cardTitle" key={i}> {Booking.title} </h3>
                    <h3><FaHeart className="booking-heart" /></h3>
                    </div>
                    
                    <h5 className="booking-subTitle" key={i}>{Booking.subtitle}</h5>
                    <img className="booking-img" src={Booking.img} style={{width:"200px"}}></img>
                    
                   <div className="bookingLabels">
                     <div className=" rightIconsBooking">
                        <span  ><FaUser className="booking-redo" /></span>
                          {/* <p className="booking-speed">{count} </p> */}
                          <span key={i}> {Booking.type}</span>
                          <span><FaSync className="booking-cog"/></span>
                    </div>
                     <span className="booking-price" key={i}>{Booking.price}</span>
                   </div>
                    
                 </div>
               ))};
             </div>
           
      </section>
    );

}
  
export default Booking;


// onClick={() => setIsOrange(!isOrange)}
// color={isOrange ? 'Orange' : '#A4A5A6'}
// color={isRed ? 'red' : '#A4A5A6'}