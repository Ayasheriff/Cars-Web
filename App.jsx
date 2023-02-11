import React from 'react';
import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Navbar from './component/Navbar/Navbar';


import CarCards from './pages/MainPage/Dashboard/CarCards';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Dashboard from './pages/MainPage/Dashboard/Dashboard';
import Assets from './pages/MainPage/Assets/Assets';
import LogOut from './pages/MainPage/SignIn/signIn';
import Booking from './pages/MainPage/Booking/Booking';
import SellCars from './pages/MainPage/SellCars/Sell';
import CalenderPage from './pages/MainPage/Calender/Calender';
import Services from './pages/MainPage/Services/Services';
import Messages from './pages/MainPage/Messages/Messages';
import Settings from './pages/MainPage/Settings/Settings';
import SignUp from './pages/MainPage/SignUp/SignUp';

import Layout from './pages/MainPage/LayOut/Layout';

// import { auth } from './firebase/firebase';



function App() {

  const routes = createBrowserRouter([
    {
      path: "/Dashboard",
      element: <Layout>
       <Dashboard />
      </Layout>,
    },
    {
      path: "/Assets",
      element: <Layout >
      <Assets />
    </Layout>,
    },
    {
      path: "/Booking",
      element: <Layout>
        <Booking />
      </Layout>,
    },
    {
      path: "/Sell",
      element: <Layout>
        <SellCars />
      </Layout>,
    },
    {
      path: "/Calender",
      element: <Layout>
        <CalenderPage />
      </Layout>,
    },
    {
      path: "/Services",
      element: <Layout>
        <Services />
      </Layout>,
    },
    {
      path: "/Messages",
      element: <Layout>
        <Messages />
      </Layout>,
    },
    {
      path: "/Settings",
      element: <Layout>
        <Settings />
      </Layout>,
    },
    {
      path: "/",
      element: 
      <LogOut style={{background:'white'}} />
    
    },
    {
      path: "/Dashbord",
      element: 
      <LogOut style={{background:'white'}} />
    
    },


    {
      path: "/SignUp",
      element: 
        <SignUp  style={{background:'white'}} />
      ,
    },

  ]);
  

  // const [name, setName] = useState('')
  //   const [lastName, setLastName] = useState('')
  //   const [email, setEmail] = useState('')
  //   const [password, setPassword] = useState('')
  //   const [isChanged, setIsChanged] = useState('false')
  //   const addUser = (e) =>{
  //     e.preventDefault();
  //     setIsChanged(true)
  //   }



  return (
    
    <div className='App' style={{display: 'flex'}}>
    <RouterProvider router={routes} />
    
    </div>
  );
      
}
export default App;
// {
//   path: "/",
//   element: <Layout aya={1}>
//    <Dashboard />
//   </Layout>,
// },