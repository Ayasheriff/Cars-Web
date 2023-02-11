import React from 'react';
import './Services.scss';

import ServicesCards from '../Services/ServicesCards';
import { RiUser2Line } from 'react-icons/ri';
import { GiLightningSpanner } from 'react-icons/gi';
import { MdDirectionsBusFilled } from 'react-icons/md';
import{ BsCircleFill } from 'react-icons/bs';
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import OilLevel from '../../../assets/Ресурс-24.png';
import Brake from '../../../assets/Frame-64-2.png';
import Steering from '../../../assets/00090.png';


const Services =() => {
    const average=33.3;
    return(
     <div className='servicePage'>
          <div className='cardsContainer'>
            <div className='servicesContent'>
               <h3 className='servicesHeadTitle'>Service Station</h3>

               <div className='cardsServices'>
                  <ServicesCards/>
                  <div className='dotsLables'>
                    <p ><BsCircleFill className='dotlabel' style={{color:'white', border:'black solid 1px',borderRadius:'10px'}} /> Ready</p>
                    <p ><BsCircleFill className='dotlabel' style={{color:'#FF6370'}}/>Booked</p>
                    <p ><BsCircleFill className='dotlabel' style={{color:'#A162F7'}}/>Curent Station</p>
                  </div>
               </div>

               <div className='orderBtnGroup'>
                 <div className='orderGroup'>
                 <div className='yourOrder'>
                     <h4>Your Order</h4>
                     <div className='orderPrograss' style={{ width: 140, height: 140 }}>
                     <CircularProgressbar
                      value={average}
                      text={`Service Time 5, 2h`}
                      styles={{
                        root: {},
                        path: {
                          stroke: `rgba(185, 62, 199)`,
                          strokeLinecap: 'butt',
                          transition: 'stroke-dashoffset 0.5s ease 0s',
                          transform: 'rotate(0.75turn)',
                          transformOrigin: 'center center',
                        },
                        trail: {
                          stroke: '#70CF97',
                          strokeLinecap: 'butt',
                          transform: 'rotate(0.25turn)',
                          transformOrigin: 'center center',
                        },
                        text: {
                        
                          fill: 'grey',
                          fontSize: '10px',
                        },
                        background: {
                          fill: '#3e98c7',
                        },
                      }}
                         />
                     </div>
                 </div>
                 <div className='fluidGroup'>
                    <div className='brake'>
                        <BsCircleFill className='dotlabel' style={{color:'#FF6370'}}/>
                        <h4>Brake fluid change</h4>
                        <span style={{color:'#A162F7', backgroundColor:'#a062f73e', borderRadius:'5px', padding:'3px 10px' , marginLeft:'90px'}}>$32</span>
                    </div>
                    <div className='brake'>
                        <BsCircleFill className='dotlabel' style={{color:'#70CF97'}}/>
                        <h4>Diagnostics</h4>
                        <span style={{color:'#A162F7', backgroundColor:'#a062f73e', borderRadius:'5px', padding:'3px 10px' , marginLeft:'140px'}}>$32</span>
                    </div>
                    <div className='brake'>
                        <BsCircleFill className='dotlabel' style={{color:'#A162F7'}}/>
                        <h4>External Washing</h4>
                        <span style={{color:'#A162F7', backgroundColor:'#a062f73e', borderRadius:'5px', padding:'3px 10px' , marginLeft:'100px'}}>$10</span>
                    </div>
                    <div className='AddServices'>
                        <h4>Add Services</h4>
                    </div>
                 </div>
                 </div>
                 <button className='orderPayBtn'>Pay $86</button>
               </div>
            </div>


            <div className='servicesContent2'>
                <h3 className='servicesHeadTitle'>Service required</h3>
                
                <div className='centerCare'>
                    <div className='centerIcons'>
                      <h2 className='centerSelfIcon' style={{color:'#70CF97'}}>  <RiUser2Line /></h2>
                        <h2 className='centerSelfIcon'style={{color:'#A162F7'}}><GiLightningSpanner /></h2>
                       <h2 className='centerSelfIcon' style={{color:'#FF6370'}}> <MdDirectionsBusFilled /></h2>
                    </div>
                    <div className='centerLabels'>
                     <div className='label1'>
                            <h4 className='centerHeader'>Center Care</h4>
                            <div  className='labelContent'>
                              <p>Price:$48</p>
                              <p style={{color:'grey'}}>processing: 1 hours</p>
                            </div>
                     </div>

                     <div className='label2'>
                            <h4 className='centerHeader'>Diagnostics</h4>
                            <div  className='labelContent'>
                              <p>Price:$78</p>
                              <p style={{color:'grey'}}>processing: 1 hours</p>
                            </div>
                     </div>

                     <div className='label3'>
                            <h4 className='centerHeader'>Inner Cleaning</h4>
                            <div  className='labelContent'>
                              <p>Price:$78</p>
                              <p style={{color:'grey'}}>processing: 2 hours</p>
                            </div>
                     </div>
                    </div>
                </div>
                <div className='serviceSchedule'>
                    <h4>Service Schedule</h4>
                    <div className='scheduleContent'>
                        <div><BsCircleFill className='dotlabel' style={{color:'#A162F7'}}/></div>
                       <div  className='scheduleText'>
                         <div>
                              <p>Upgrate your favourite car</p>
                              <p>periodically</p>
                          </div>
                          <div className='schedulePrices'>
                              <p>Today, 10:00</p>
                              <p>Fix Price: $1,200</p>
                          </div>
                       </div>
                        
                    </div>
                    <div className='scheduleContent'>
                        <div><BsCircleFill className='dotlabel' style={{color:'white',border:'1px solid black' ,borderRadius:'10px'}}/></div>
                       <div  className='scheduleText'>
                         <div>
                              <p>Upgrate your favourite car</p>
                              <p>periodically</p>
                          </div>
                          <div className='schedulePrices'>
                              <p>Today, 10:00</p>
                              <p>Fix Price: $1,200</p>
                          </div>
                       </div>
                        
                    </div>
                </div>

            </div>
          </div>

          <div className='levelsBar'>
             <div className='oilLevel'>
                <img className='oilPic' src={OilLevel}></img>
                <p style={{fontSize:'20px'}}>Oil Level</p>
                <div className='engineReplace'>
                    <p>Engine</p>
                    <p>Don't Replace</p>
                </div>
             </div>

             <div className='oilLevel'>
                <img className='oilPic' src={Brake}></img>
                <p style={{fontSize:'20px'}}>Brake Pads</p>
                <div className='engineReplace'>
                    <p>Engine</p>
                    <p>Don't Replace</p>
                </div>
             </div>

             <div className='oilLevel'>
                <img className='oilPic' src={Steering}></img>
                <p style={{fontSize:'20px'}}>Steering</p>
                <div className='engineReplace'>
                    <p>Engine</p>
                    <p>Don't Replace</p>
                </div>
             </div>

             <div className='oilLevel'>
                <img className='oilPic' src={OilLevel}></img>
                <p style={{fontSize:'20px'}}>Oil Level</p>
                <div className='engineReplace'>
                    <p>Engine</p>
                    <p>Don't Replace</p>
                </div>
             </div>
          </div>
     </div>
    )
}

export default Services;