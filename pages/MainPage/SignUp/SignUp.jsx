import React from "react";

import './SignUp.scss';
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs';

// import {useEffect}from 'react';
// import { useForm } from 'react-hook-form';
// import { useSelector, useDispatch } from 'react-redux';
// import { signupUser, userSelector } from '../../../redux/Users/userSlice';
// import { unstable_HistoryRouter } from 'react-router-dom';
// import toast from 'react-hot-toast';

import { useState } from "react";
// import { setUserInfo } from "../../../redux/Users/userSlice";
import { useDispatch } from "react-redux";
import { userInfo } from '../../../redux/Users/userSlice';

import { getAuth, createUserWithEmailAndPassword, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import app from "../../../firebase/firebase";
import { signInWithGoogle } from '../../../firebase/firebase';




const SignUp =() => {
    // const [name, setName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const dispatch=useDispatch()
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     dispatch(userInfo({
    //         name:name,
    //         lastName:lastName,
    //         email:email,
    //         password:password,
    //         loggedIn:true
            
    //     }));
    //     window.location.href = '/';
    //     localStorage.setItem('user', JSON.stringify(userInfo));
    // }
    


    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const dispatch=useDispatch()
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     dispatch(userInfo({
    //         name:name,
    //         lastName:lastName,
    //         email:email,
    //         password:password,
    //         loggedIn:true
            
    //     }));
    //     window.location.href = '/Dashboard';
    //     localStorage.setItem('user', JSON.stringify(userInfo));
    // }
    

    const auth = getAuth(app);
    const signup=() => {
       
        createUserWithEmailAndPassword(auth, email, password)
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
        })
        .catch((error)=>{
            alert(error);
            
        })
    }





  
    return(
        <div className="signInOutContainer2" style={{backgroundColor:'white'}}>
          <div className="signContent2">
                <h3 className="start2">Get's started.</h3>
             <div className="signTitle2">           
                 <p className="signUp2">Already have an account? </p>
                 <a className="signUp-add2" href="/LogOut">Sign In</a>
             </div>
             <div className="signInSocial2">
                 <button className="googleBtn2" onClick={signInWithGoogle}><FcGoogle /> Sign in with Google</button>
                <button className="facebookBtn2" onClick={signInWithFacebook}><BsFacebook /> Sign in with Facebook</button>
             </div>
             <p className="orLines2">Or</p>
              <form className="formBox2" >
                 <label className="formLabelText2">First Name</label>
                  <input className="formInputBox2" name="name" type='name'  onChange={(e) => setName(e.target.value)}/>
                  
                  <label className="formLabelText2">Last Name</label>
                  <input className="formInputBox2" name="lastname" type='lastname'  onChange={(e) => setLastName(e.target.value)} />

                  <label className="formLabelText2">Email</label>
                  <input className="formInputBox2" name="email" type='email'  onChange={(e) => setEmail(e.target.value)} />
                  
                  <label className="formLabelText2">Password</label>
                  <input className="formInputBox2" name="password" type='password' onChange={(e) => setPassword(e.target.value)}  />
              </form>
              
              <button className="formSignBtn2" type='subsmit' onClick={signup} >Sign Up</button>
          </div>
        </div>
    )
}


export default SignUp;







    // const [name, setName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const dispatch = useDispatch()


    // const role= window.localStorage.getItem('user')
    // const output = JSON.parse(role);

    // const handleSubmit = (e) => {
    //     console.log('hi from submit ');
    //     let userInfo = {name, lastName, email, password}
    //     // localStorage.setItem('user', JSON.stringify)(userInfo);
    //     // dispatch(setUserInfo(userInfo));
    //     dispatch(setUserInfo(userInfo));
    //     window.location.href = '/'
    // }
  


    
//  const dispatch = useDispatch();
 
//  const history = unstable_HistoryRouter();
//  const {isSuccess, isError, errorMessage } = useSelector( userSelector);
 
//   const onSubmit = (data) => {
//     dispatch(signupUser(data));
//   };
//   useEffect(() => {
//     return () => {
//       dispatch(clearState());
//     };
//   }, []);
//   useEffect(() => {
//     if (isSuccess) {
//       dispatch(clearState());
//       history.push('/');
//     }
//     if (isError) {
//       history.error(errorMessage);
//       dispatch(clearState());
//     }
//   }, [isSuccess, isError]);