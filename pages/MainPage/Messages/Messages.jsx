import React from "react";
import { useState } from "react";
import './Messages.scss';
import { TiPencil ,TiPin } from 'react-icons/ti';
import Man1 from '../../../assets/man1.png';
import Man2 from '../../../assets/man2.png';
import Man3 from '../../../assets/man3.png';

import Man4 from '../../../assets/man4.png';
import Man5 from '../../../assets/man5.png';
import Man6 from '../../../assets/man6.png';
import Man7 from '../../../assets/man7.png';
import Man8 from '../../../assets/man8.png';

import {ImFire} from 'react-icons/im';
import {BiCheckDouble} from 'react-icons/bi';
import {MdMessage} from 'react-icons/md';
import {MdOutlineSettingsVoice} from 'react-icons/md';
import {IoVideocamOutline } from 'react-icons/io5';
import {IoCallOutline} from 'react-icons/io5';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import {BsFillEmojiHeartEyesFill} from 'react-icons/bs';
import {FaPauseCircle} from 'react-icons/fa';
import {AiOutlineAlignCenter} from 'react-icons/ai';
import {TbPaperclip} from 'react-icons/tb';
import {FaPaperPlane} from 'react-icons/fa';

const Messages =() =>{

    const [PinChat]=  useState([
        {
            img:Man1,
            name:'Killan James',
            title:'Typing..',
            titleColor:'#258C60',
            subTitle:'4:30 PM',
            number:'2',
            numberColor:'white',
            numberBackgroundColor:'#FF6370',
            numberBorderRaduis:'50px',
        },
        {
            img:Man2,
            name:'Desian Tam',
            title:'Hello! Everyone',
            titleColor:'black',
            subTitle:'9:36 AM',
            number:<BiCheckDouble />,
            numberColor:'#41D37E',
            numberBackgroundColor:'',
            numberBorderRaduis:'',
        },
        {
            img:Man3,
            name:'Ahmed medi',
            title:'Wow really Cool',
            titleColor:'#A9ABAD',
            subTitle:'1:15 AM',
            number:<ImFire />,
            numberColor:'orangered',
            numberMargin:'-20px',
            numberBackgroundColor:'',
            numberBorderRaduis:'',
           
        },
    ]);

    const [AllChat]=  useState([
        {
            img:Man4,
            name:'Claudia Maudi',
            title:'Nice',
            titleColor:'#258C60',
            subTitle:'4:30 PM',
            number:'',
            numberColor:'',
            numberBackgroundColor:'',
            numberBorderRaduis:'',
        },
        {
            img:Man5,
            name:'Novita',
            title:'Yeah, nice desgin',
            titleColor:'black',
            subTitle:'9:36 AM',
            number:'2',
            numberColor:'white',
            numberBackgroundColor:'#FF6370',
            numberBorderRaduis:'50px',
        },
        {
            img:Man6,
            name:'Milie Nose',
            title:'Awsome',
            titleColor:'#A9ABAD',
            subTitle:'8:20 PM',
            subTitleMargin:'30px',
            titleIcon:<ImFire />,
            titleIconColor:'orangered',
            number:'1',
            numberMargin:'60px',
            numberColor:'white',
            numberBackgroundColor:'#FF6370',
            numberBorderRaduis:'50px',
           
        },
        {
            img:Man7,
            name:'Ikhsan SD',
            title:'Voice message',
            titleIcon2:<MdOutlineSettingsVoice />,
            titleColor:'#A9ABAD',
            subTitle:'yesterday',
           
            number:'',
            numberColor:'',
            numberMargin:'-',
            numberBackgroundColor:'',
            numberBorderRaduis:'',
           
        },
        {
            img:Man8,
            name:'Aditya',
            title:'publish now',
            titleColor:'#A9ABAD',
            subTitle:'yesterday',
            subTitleMargin:'40px',
            number:'',
            numberColor:'',
          
            numberBackgroundColor:'',
            numberBorderRaduis:'',
           
        },
    ]);


    return(
        <div className="msgContainer">
            <div className="namesList">
                <div className="nameTitle">
                    <h2>Messages</h2>
                    <h2 style={{color:'#A162F7', textDecoration:'underLine'}}><TiPencil /></h2>
                </div>
                <input type='search' className="chatSearch" placeholder="Search"></input>
                <div className="pinned">
                   <p> <TiPin/></p>
                    <p>PINNED</p>
                </div>
                <div className="pinChatting">
                    {PinChat.map((PinChat,i)=>(
                       <div className="pinLAbel">
                          <div className="imgTextName">
                          <div> <img className="pinedImg" src={PinChat.img}></img></div>
                            <div className="pinedName">
                             <h3 style={{fontSize:'16px'}}>{PinChat.name}</h3>
                             <p style={{color:PinChat.titleColor}}>{PinChat.title}</p>
                            </div>
                          </div>
                            <div className="pinedTime">
                             <p>{PinChat.subTitle}</p>
                             <p className="numberChat" style={{color:PinChat.numberColor ,backgroundColor:PinChat.numberBackgroundColor, borderRadius:PinChat.numberBorderRaduis ,marginLeft:PinChat.numberMargin}}>{PinChat.number}</p>
                            </div>
                       </div>
                    ))}
                </div>
                <div className="allMsg">
                    <p><MdMessage /></p>
                    <p>All Messages</p>
                </div>
                <div className="pinChatting">
                    {AllChat.map((AllChat,i)=>(
                        <div className="pinLAbel">
                          <div className="imgTextName">
                          <div> <img className="pinedImg" src={AllChat.img}></img></div>
                            <div className="pinedName">
                             <h3 style={{fontSize:'16px'}}>{AllChat.name}</h3>
                             <p style={{color:AllChat.titleColor}}>{AllChat.titleIcon2}{AllChat.title}<span style={{color:AllChat.titleIconColor}}>{AllChat.titleIcon}</span></p>
                            </div>
                          </div>
                            <div className="pinedTime">
                             <p style={{marginLeft:AllChat.subTitleMargin}}>{AllChat.subTitle}</p>
                             <p className="numberChat" style={{color:AllChat.numberColor ,backgroundColor:AllChat.numberBackgroundColor, borderRadius:AllChat.numberBorderRaduis ,marginLeft:AllChat.numberMargin}}>{AllChat.number}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>


            <div className="chattingBox">
                <div className="chatBoxNav">
                    <div className="navImgTitle">
                       <div> <img className="profileImg" src={Man1}></img></div>
                        <div className="profileName">
                            <h3>Killan james</h3>
                            <p style={{color:'grey', fontSize:'12px'}}>Active Now</p>
                        </div>
                    </div>
                    <div className="profileIcons">
                      <h3 className="profileVideo">  <IoVideocamOutline /></h3>
                       <h3 className="profileVideo"> <IoCallOutline /></h3>
                       <h3 className="profileVideo"> <BiDotsVerticalRounded /></h3>
                    </div>
                </div>
                <div className="firstChat">
                   <div className="imgTextChatting">
                   <div><img className="firstChatImg" src={Man1} ></img></div>
                    <p className="firstChatPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Porro, esse suscipit harum dolore ex exercitationem minima nobis illo pariatur nihil iusto, 
                    ea hic maiores odit rerum voluptatem repellendus! Inventore, quas.</p>
                   </div>
                    <p className="firstChatTime">4:30 PM</p>
                </div>

                <div className="secondtChat">
                    
                   <div className="imgTextChatting2">
                     <p className="firstChatPara2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Porro, esse suscipit harum dolore ex exercitationem minima. </p>
                        <div><img className="secondChatImg" src={Man5} ></img></div>
                   </div>
                </div>

                <div className="firstChat">
                   <div className="imgTextChatting">
                   <div><img className="firstChatImg" src={Man1} ></img></div>
                    <p className="firstChatPara">Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit  
                    hretgc hhsj jdcn there no item Porro.<span className="emoji"><BsFillEmojiHeartEyesFill/></span></p>
                   </div>
                   <p className="firstChatParaAgain">Lorem ipsum dolor sit amet consectetur adipisicing elit
                   dolor sit amet consectetur adipisicing elit Porro, esse suscipit harum dolore.</p>
                    <p className="firstChatTime">4:30 PM</p>
                </div>

                <div className="secondtChat">
                    
                    <div className="imgTextChatting2">
                      <p className="firstChatPara2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Porro, esse suscipit harum dolore ex exercitationem minima. </p>
                         <div><img className="secondChatImg" src={Man5} ></img></div>
                    </div>
                </div>


                <div className="firstChat">
                   <div className="imgTextChatting">
                   <div><img className="firstChatImg" src={Man1} ></img></div>
                    <h2 className="firstChatRec"><FaPauseCircle /> <AiOutlineAlignCenter className='linesIcon'/>
                    <AiOutlineAlignCenter className='linesIcon2'/>
                    <AiOutlineAlignCenter className='linesIcon3'/>
                    <AiOutlineAlignCenter className='linesIcon4'/>
                    <AiOutlineAlignCenter className='linesIcon5'/>
                    <AiOutlineAlignCenter className='linesIcon6'/> <p className="lastChatTime">1:25</p></h2>
                    
                   </div>
                    
                </div>

                <div className="chattingBar">
                    <div className="typingIcon">
                        <p ><span style={{fontSize:'20px'}}><TbPaperclip /></span> Type Something... </p>
                         <h3 style={{color:'#A162F7'}}>   <FaPaperPlane/></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;