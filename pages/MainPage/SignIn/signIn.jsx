import React from "react";
import { useState } from "react";
import './signIn.scss';
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs';

import { getAuth, signInWithEmailAndPassword ,signInWithPopup, FacebookAuthProvider} from "firebase/auth";
import app from "../../../firebase/firebase";
import { signInWithGoogle } from '../../../firebase/firebase';



const LogOut =() => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const auth = getAuth(app);
    const signIn=() => {
       
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // alert("Successfully created an account");
            // localStorage.setItem("name", name);
            // localStorage.setItem("lastName", lastName);
            window.location.href = '/Dashboard';
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
            // const errorMessage = error.message;
            // alert(errorCode);
            // ..
          });
    }
    const signInWithFacebook = () =>{
        const provider= new FacebookAuthProvider();
        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result);
            const user = result.user;

            const credential = FacebookAuthProvider.credentialFromResult(result);

            const accessToken = credential.accessToken;

        })
        .catch((error)=>{
            alert(error);
            console.log(error);
            const credential = FacebookAuthProvider.credentialFromError(error);
            const email = error.customData.email;


        })
    }
  
    return(
        <div className="signInOutContainer" style={{backgroundColor:'white'}}>
          <div className="signContent">
                <h3 className="start">Get's started.</h3>
             <div className="signTitle">           
                 <p className="signUp">Don't have an account? </p>
                 <a className="signUp-add" href="/SignUp">Sign up</a>
             </div>
             <div className="signInSocial">
                 <button className="googleBtn" onClick={signInWithGoogle}><FcGoogle /> Sign in with Google</button>
                <button className="facebookBtn" onClick={signInWithFacebook}><BsFacebook /> Sign in with Facebook</button>
             </div>
             <p className="orLines">Or</p>
              <form className="formBox">
                  <label className="formLabelText">Email</label>
                  <input className="formInputBox" name="email" type='email' required  onChange={(e)=> setEmail(e.target.value)}/>
                  
                  <label className="formLabelText">Password</label>
                  <input className="formInputBox" name="password" type='password' required onChange={(e)=> setPassword(e.target.value)}/>
              </form>
              <div className="checkAndText">
                 <div className="checkBoxLabel">
                     <input type='checkbox' className="checkBoxInput" />
                        <label >Remember me</label>
                 </div>
                 <a className="checkBoxPara">Forget your pasword?</a>
              </div>
              <button className="formSignInBtn" type='submit' value='Sign in' onClick={signIn} >Sign In</button>
              
          </div>
        </div>
    )
}


export default LogOut;