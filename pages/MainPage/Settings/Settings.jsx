import React from "react";
import './Settings.scss';

import Grandpa from '../../../assets/man9.png';


const Settings =() =>{

    



    return(
        <div className="settingPage">
            <h2 className="settingTitle">Settings</h2>
            <ul className="settingIcons">
               <li className="setIcon"> <a>My details</a></li>
               <li className="setIcon"> <a>Profile</a></li>
               <li className="setIcon"> <a>Password</a></li>
               <li className="setIcon"> <a>Email</a></li>
               <li className="setIcon"> <a>Notificatio</a></li>
            </ul>
            <div className="settingProfile">
                <h4 style={{fontSize:'20px'}}>Profile</h4>
                <p className="update">Update your photo and personal details here</p>
                <hr className="profileLine"/>
            </div>
            <div className="inputs">
                <div className="firstInput">
                    <label className="inputLabel">Live in</label>
                    <input className="inputText" placeholder=" lives" type='text'></input>
                </div>
                <div className="firstInput">
                    <label className="inputLabel">Street Address</label>
                    <input className="inputText" placeholder=" Address" type='text'></input>
                </div>
            </div>
            <div className="emailAddress">
                <label className="emailAddressLabel">Email Address</label>
                <input className="emailAddressInput" type='text' placeholder="Email Address"></input>
            </div>

            <div className="inputs">
                <div className="firstInput">
                    <label className="inputLabel">Date Of Birth</label>
                    <input className="inputText" placeholder=" DD/MM/YYYY" type='text'></input>
                </div>
                <div className="firstInput">
                    <label className="inputLabel">Gender</label>
                    <input className="inputText" placeholder=" Gender" type='text'></input>
                </div>
            </div>
            <hr className="profileLine2"/>
            <div className="profileContentImg">
               <div className="profileContentNamed">
                 <div className="profileTextNamed">
                      <h3 className="yourPhoto">Your photo</h3>
                      <p className="profileDisplayed">This will be displayed on your profile.</p>
                  </div>
                  <div><img  className="profilePhoto" src={Grandpa}></img></div>
               </div>
                <div className="profileLabelBtns">
                    <a href="#" className="linkProfile">Update</a>
                    <a href="#" className="linkProfile">Delete</a>
                </div>
            </div>
            <hr className="profileLine2"/>

            <div className="lastProfileLabels">
                <h3 className="socialprofileText">social Profiles</h3>
                <div className="socialInputs">
                    <input type='text' className="socialInput" placeholder="facebook.com/"></input>
                    <input type='text' className="socialInput" placeholder="twitter.com/"></input>
                </div>
            </div>
        </div>

    )
}

export default Settings;