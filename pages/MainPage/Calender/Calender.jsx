import {React, useState } from "react";
import './Calender.scss';
import Calender from 'react-calendar';
import { IoIosArrowBack , IoIosArrowForward} from 'react-icons/io';
import { BsCalendar2Minus } from 'react-icons/bs';


const CalenderPage =() =>{
    const [value, onChange] = useState(new Date());
    return(
        <div className="calenderContainer">
            <div className="calenderHeader">
                <h2 className="calenderTitle">Calender</h2>
            
                <div className="calenderbox">
                    <Calender className='calenderNumb' onChange={onChange} value={value}/>
                </div>
                <div className="upcomingEvents">
                   <h2 className="eventTitle">Upcoming Events</h2>
                   <div className="upcomingContent">
                        <ul className="listTime">
                            <li>8:00</li>
                            <li>9:00</li>
                            <li>10:00</li>
                            <li className="halfTen">10:15</li>
                            <li>11:00</li>
                            <li>12:00</li>
                            <li>1:00</li>
                        </ul>
                        <div className="driftSeries">
                            <div className="driftTitle1">
                                <h3 className="driftFire">Drift Series Fire Round</h3>
                                <h3 className="jdm">JDM</h3>
                            </div>
                            <hr className="driftLine" />
                            <div className="driftTitle2">
                                <h3 className="driftFire">Drift Series Fire Round</h3>
                                <h3 className="jdm">JDM</h3>
                            </div>
                        </div>
                   </div>
                </div>
                            
            </div>

            <div className="calenderHeader2">
                <div className="calender-narbar">
                    <button className="navCalenderBtn">Day</button>
                    <button className="navCalenderBtn"><BsCalendar2Minus /> Mar 15,2022</button>
                    <button className="navCalenderBtn"><IoIosArrowBack /> <IoIosArrowForward /></button>
                </div>
                <div className="navCalenderContent">
                    <ul className="calenderList2">
                            <li>8:00 AM</li>
                            <li>9:00 AM</li>
                            <li>10:00 AM</li>
                            <li>11:00 AM</li>
                            <li>12:00 AM</li>
                            <li>1:00 PM</li>
                            <li>2:00 PM</li>
                            <li>3:00 PM</li>
                            <li>4:00 PM</li>
                    </ul>
                    <div className="calenderTimeLabel">
                        <div className="calenderBarLabel1">
                            <div className="timeSpeed">
                            <p>8:00 am</p>
                            <p>154K</p>
                            </div>
                            <p>Moto Track Day</p>
                            <p>All Motorbikes</p>
                        </div>

                        <div className="calenderBarLabel2">
                            <div className="timeSpeed2">
                            <p>9:45 am</p>
                            <p>1h 45 min</p>
                            </div>
                            <p>Drift Swries Second Round</p>
                            <p>JDM</p>
                        </div>

                        <div className="calenderBarLabel3">
                            <div className="timeSpeed3">
                                <div className="timeSpeed5">
                                <p>10:00 am</p>
                                <p>154K</p>
                                </div>
                                <p>Moto Track Day</p>
                                <p>All Motorbikes</p>
                            </div>
                           <div className="timeSpeed4">
                           <div className="timeSpeed6">
                                <p>10:45 am</p>
                                <p>154K</p>
                                </div>
                                <p>Moto Track Day</p>
                                <p>All Motorbikes</p>
                           </div>
                        </div>

                        <div className="calenderBarLabel4">
                            <div className="timeSpeed44">
                            <p>1:00 pm</p>
                            <p>154K</p>
                            </div>
                            <p>Moto Track Day</p>
                            <p>All Motorbikes</p>
                        </div>

                        <div className="calenderBarLabel5">
                            <div className="timeSpeed55">
                            <p>2:00 pm</p>
                            <p>154K</p>
                            </div>
                            <p>Moto Track Day</p>
                            <p>All Motorbikes</p>
                        </div>

                        <div className="calenderBarLabel6">
                            <div className="timeSpeed66">
                            <p>10:45 am</p>
                            <p>154K</p>
                            </div>
                            <p>Moto Track Day</p>
                            <p>All Motorbikes</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default CalenderPage ;