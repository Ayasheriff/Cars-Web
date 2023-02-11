import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { useEffect } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyAQ6sO_552AzTllCc2AsRupuYhEYl_9_2s",
  authDomain: "cars-project-498d2.firebaseapp.com",
    // authDomain: "cars-project-498d2.ayasherif.com",
  projectId: "cars-project-498d2",
  storageBucket: "cars-project-498d2.appspot.com",
  messagingSenderId: "399354671471",
  appId: "1:399354671471:web:e0a173fa86f6283ae5789a",
  measurementId: "G-YBWGGHLWLT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export default app;


// const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({ prompt: "select_account" });

// export const signInWithGoogle = () =>
//   signInWithPopup(auth, googleProvider);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
    
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
       
    })
    .catch((error)=>{
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
    })
    useEffect(() => {
        localStorage.getItem('name', name);
        localStorage.getItem("email", email);
      }, []);
}




// export const signInWithGoogle =async () =>{
//     try {
//         const result = await signInWithPopup (auth,GoogleAuthProvider);
//         console.log(result.user);
//         route.push('/Dashboard');
//     } catch (error) {
//     console.log(error)
//     }
// }


// // import firebase from 'firebase/app';
// // import 'firebase/firestore';
// // import 'firebase/auth';


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";


// export const config ={
//     apiKey: "AIzaSyAQ6sO_552AzTllCc2AsRupuYhEYl_9_2s",
//     authDomain: "cars-project-498d2.firebaseapp.com",
//     projectId: "cars-project-498d2",
//     storageBucket: "cars-project-498d2.appspot.com",
//     messagingSenderId: "399354671471",
//     appId: "1:399354671471:web:e0a173fa86f6283ae5789a",
//     measurementId: "G-YBWGGHLWLT",
// };
// // export default config;

// // firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const app = initializeApp(config);
//   const analytics = getAnalytics(app);

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompet: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
