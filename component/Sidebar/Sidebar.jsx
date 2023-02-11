import React from "react";

import { Link } from "react-router-dom";

import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { VscAccount } from 'react-icons/vsc';
import { BsChatSquareText } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { BiCar } from 'react-icons/bi';
import { AiOutlineShopping } from 'react-icons/ai';
import { BsScissors } from 'react-icons/bs';
import { BiCog } from 'react-icons/bi';
import { BsCalendar2Minus } from 'react-icons/bs';
import { SlLogout } from 'react-icons/sl';
import { FaMonero } from 'react-icons/fa';



import './Sidebar.scss';
// import './Sidebar.scss';
// import '../../../node_modules/sass/sass';

// const Sidebar =[
//    {
//       title: 'Dashboard',
//       path: '/',
//       icon: <FaThLarge />,
//       cName: 'nav-text'
//    },
//    {
//       title: 'Assets',
//       path: '/Assets',
//       icon: <FaUserCircle />,
//       cName: 'nav-text'
//    },
//    {
//       title: 'Booking',
//       path: '/Booking',
//       icon: <FaCarAlt />,
//       cName: 'nav-text'
//    },
//    {
//       title: 'Sell Cars',
//       path: '/SellCars',
//       icon: <FaShoppingBag />,
//       cName: 'nav-text'
//    },
//    {
//       title: 'Buy Cars',
//       path: '/BuyCars',
//       icon: <FaShoppingCart />,
//       cName: 'nav-text'
//    },
//    {
//       title: 'Services',
//       path: '/Services',
//       icon: <FaCut />,
//       cName: 'nav-text'
//    },
//    {
//       title: 'Calender',
//       path: '/Calender',
//       icon: <FaCalendarAlt />,
//       cName: 'nav-text'
//    },
//    {
//       title: 'Messages',
//       path: '/Messages',
//       icon: <FaCommentDots />,
//       cName: 'nav-text'
//    },
//    {
//       title: 'Settings',
//       path: '/Settings',
//       icon: <FaWhmcs />,
//       cName: 'nav-text'
//    },
//    {
//       title: 'Log Out',
//       path: '/LogOut',
//       icon: <FaPowerOff />,
//       cName: 'nav-text'
//    },
// ]

// export default Sidebar;












const Sidebar= () =>{
    return(
      <div className="sidebar">
        <ul className="menu-bars"> 
           <div className="logo">
            <h2 className='logoIcon'><FaMonero style={{ color: ' #A162F7' }} /></h2>
              <span className="motiv"> Motiv.</span>
           </div>

          

           <div className="title">
              <h2> <HiOutlineSquares2X2  className="sideIcon" style={{ color: ' #5F6165' }}/></h2>
              <Link to='/' className="word" >  Dashboard</Link>
           </div>

           <div className="title">
              <h2><VscAccount className="sideIcon" style={{ color: ' #5F6165' }}/></h2>
              <Link to="/Assets" className="word" > Assets</Link>
           </div>

           <div className="title">
              <h2><BiCar className="sideIcon" style={{ color: ' #5F6165' }}/></h2>
              <Link to="/Booking" className="word"> Booking</Link>
           </div>

           <div className="title">
             <h2> <AiOutlineShopping className="sideIcon" style={{ color: ' #5F6165' }}/></h2>
              <Link to="/Sell" className="word"> Sell Cars</Link>
           </div>

           <div className="title">
              <h2><FiShoppingCart className="sideIcon" style={{ color: ' #5F6165' }}/></h2>
              <Link to="/Buy" className="word"> Buy Cars </Link>
           </div>

           <div  className="title">
              <h2><BsScissors className="sideIcon" style={{ color: ' #5F6165' }}/></h2>
              <Link to="/Services" className="word"> Services</Link>
           </div>

           <div className="title">
              <h2><BsCalendar2Minus className="sideIcon" style={{ color: ' #5F6165' }}/></h2>
              <Link to="/Calender" className="word"> Calender</Link>
           </div>

           <div className="title">
              <h2><BsChatSquareText className="sideIcon"  style={{ color: ' #5F6165' }}/></h2>
              <Link to="/Messages" className="word"> Messages</Link>
           </div>




         

           <div className="lastIcons">
           <div className="title">
              <h2><BiCog className="sideIcon setting" style={{ color: ' #5F6165' }}/></h2>
              <Link to="/Settings" className="word setting"> Settings</Link>
           </div>

           <div className="title">
              <h2><SlLogout className="sideIcon " style={{ color: ' #5F6165' }}/></h2>
              <Link to="/LogOut" className="word log"> Log Out</Link>
           </div>
           </div>
        </ul>
      </div>
    )
}

export default Sidebar;