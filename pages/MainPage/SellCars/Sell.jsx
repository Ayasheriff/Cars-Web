import React from "react";
import BlueLarge from '../../../assets/bluelargecar.png';

import SellChart from "../SellCars/SellChart";
import Vectoroval from '../../../assets/Vectoroval.png';
import './Sell.scss';
// import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
// import Stroke from '../../assets/Stroke.svg';
import {HiArrowNarrowRight } from 'react-icons/hi';
import GreenChart1 from '../../../assets/chartgreen2.png';
import GreenChart2 from '../../../assets/chartgreen1.png';
import { RiCarLine } from 'react-icons/ri';
import { RiShareForwardLine } from 'react-icons/ri';
import { BiDollar } from 'react-icons/bi';
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';



const SellCars =() =>{
    const percentage = 85;
    
    return(
        <div className="sell-container">
            <h2 className="sellTitle">Sell Cars</h2>

            <div className="sellimgChart">
                <div className="sellImg">
                    <h2 className="sellimgTitle">2022 Mecredes benz</h2>
                   
                    <img className="oval" src={Vectoroval}></img>
                    
                   
                    <img className="sellimgPic" src={BlueLarge}></img>
                    
                </div>
                <div className="sellChart">
                    <h3 className="sellchartTitle">Tracking History</h3>
                    <div  className='barChartSell' >
                    <SellChart />
                    </div>
                </div>
            </div>

           <div className="sellHeader2">
             <h2 className="sellTitle2">Offers</h2>
               <div className="sellbtns">
                    <button className="sellbtn">New</button>
                    <button className="sellbtn">Toyota</button>
               </div>
           </div>

            
            <div className="sellBars">
                <div className="FirstBar">
                    <div className="divbarTitle">
                        <h3>Killan James</h3>
                        <h4 className="averagePrice"><span className="dollarnumb">$16,609</span> avarage price</h4> 
                        <h4 className="marketAvarage">market avarage is $16,224</h4>
                        <button className="arrowbtn"><HiArrowNarrowRight /></button>
                    </div>
                    <div className="prgrassDivLine">
                        <img className="grrn1" src={GreenChart1} ></img>
                        <p className="impressionShare">Impression Share</p>
                    </div>
                    <div className="manyProgress"  style={{ width: 90, height: 90 }}>
                        <CircularProgressbar value={percentage}
                            text={`$811`}
                              styles={buildStyles({
                                // dominantBaseline: 'middle',
                                // textAnchor: 'middle',
                              rotation: 0.35,
                              strokeLinecap: 'butt',
                              textSize: '18px',
                              pathTransitionDuration: 0.5,
                              transition: 'stroke-dashoffset 0.5s ease 0s',
                              transformOrigin: 'center center',
                              pathColor: `#FF7E86`,
                              textColor: 'black',
                              trailColor: '#d6d6d6',
                              backgroundColor: '#3e98c7',
                         })} />
                    </div>
                    <div className="carIcon">
                       <h2 className='carLine'> <RiCarLine /></h2>
                       <h3 className="carPrice">$1,174</h3>
                       <p className="modelSpend1">Model Spend</p>
                    </div>
                    <div className="shareIcon">
                       <h2 className='share'> <RiShareForwardLine /></h2>
                       <h3 className="sharePrice">$1,174</h3>
                       <p className="modelSpend2">Model Spend</p>
                    </div>
                    <div className="dollarIcon">
                       <h2 className='dollar'> <BiDollar /></h2>
                       <h3 className="dollarIconPrice">$1,174</h3>
                       <p className="modelSpend3">Model Spend</p>
                    </div>
                    
                </div>



                <div className="FirstBar">
                <div className="divbarTitle">
                        <h3>Killan James</h3>
                        <h4 className="averagePrice"><span className="dollarnumb">$16,609</span> avarage price</h4> 
                        <h4 className="marketAvarage">market avarage is $16,224</h4>
                        <button className="arrowbtn"><HiArrowNarrowRight /></button>
                    </div>
                    <div className="prgrassDivLine">
                        <img className="grrn1" src={GreenChart2} ></img>
                        <p className="impressionShare">Impression Share</p>
                    </div>
                    <div className="manyProgress"  style={{ width: 90, height: 90 }}>
                    <CircularProgressbar value={percentage}
                            text={`$811`}
                              styles={buildStyles({
                              rotation: 0.35,
                              strokeLinecap: 'butt',
                              textSize: '18px',
                              pathTransitionDuration: 0.5,
                              transition: 'stroke-dashoffset 0.5s ease 0s',
                              transformOrigin: 'center center',
                              pathColor: `#FF7E86`,
                              textColor: 'black',
                              trailColor: '#d6d6d6',
                              backgroundColor: '#3e98c7',
                         })} />
                    </div>
                    <div className="carIcon">
                       <h2 className='carLine'> <RiCarLine /></h2>
                       <h3 className="carPrice">$1,174</h3>
                       <p className="modelSpend1">Model Spend</p>
                    </div>
                    <div className="shareIcon">
                       <h2 className='share'> <RiShareForwardLine /></h2>
                       <h3 className="sharePrice">$1,174</h3>
                       <p className="modelSpend2">Model Spend</p>
                    </div>
                    <div className="dollarIcon">
                       <h2 className='dollar'> <BiDollar /></h2>
                       <h3 className="dollarIconPrice">$1,174</h3>
                       <p className="modelSpend3">Model Spend</p>
                    </div>
                </div>
            </div>
        </div>
    )
 }


export default SellCars;