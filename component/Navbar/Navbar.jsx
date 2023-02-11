import React from "react";
import { useState } from "react";
// import { useState } from "react";
import { FaRegBell, FaSistrix } from 'react-icons/fa';

// import { FaRegWindowClose } from 'react-icons/fa';
// import { Link } from "react-router-dom";
import './Navbar.scss';
import profile from '../../assets/profile.png';
// import { useDispatch, useSelector } from "react-redux";


import { useDispatch, useSelector } from 'react-redux';
import  {selectUser } from '../../redux/Users/userSlice';

// import { signInWithGoogle } from "../../firebase/firebase";

// import {useAuthState} from 'react-firebase-hooks/auth';
// import { auth } from '../../firebase/firebase';

const Navbar = () =>{
   
    const [count , setCount]=useState(0);
    const handleIncrement =() =>{
        setCount(count + 1);
    };


    // const [user,loading] =useAuthState(auth);
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    
    // const user = useSelector();

    // const dispatch=useDispatch()
    // let user = localStorage.getItem("user");
    // let user = JSON.parse()
    // dispatch(user)

    // const user= useSelector(state => state.user)
    // localStorage.setItem("name",name);
    // localStorage.setItem("lastName",lastName);

    return(

        <div className="navbar">
            <div className="input-group">
                
                <input className="input" type='search' placeholder= "Search"></input>
                <span className="search"><FaSistrix /></span>
            </div>
            <div className="nav-content">
                <p className="bellNumber">{count}</p>
             <h2 className="bell"><FaRegBell onClick={handleIncrement}/></h2>
             <img className="profile" src={profile} style={{width:'50px'}}></img>
             <p className="userNameNav">{user?.name}{user?.lastName}</p>
             {/* <p>{localStorage.getItem("name")}</p> */}
             {/* {!user &&(
                <p className="userNameNav">{user.name}</p>
             )} */}
            </div>
        </div>

    )
}

export default Navbar;





     {/* <Link to="#" className='menu-bars'>
                <FaBars />
            </Link>  */}
            {/* <div className="logo">
                <h3 className="motiv"><FaMonero style={{ color: ' blueviolet' }}/> Motiv.</h3>
             </div> */}





// const Navbar = () =>{
//     const [sidebar, setSidebar] = useState(false);

//     const showSidebar =() => setSidebar(!sidebar);
//     return(
//        <>
//            <div className="navbar">
//               <Link to="#" className='menu-bars'>
//                   <FaBars onClick={showSidebar}/>              
//               </Link> 
//                <FaSistrix />
//              <input className="input" placeholder="search"></input>
//           </div>
//          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//             <ul className="nav-menu-items">
//               <li className="navbar-toggle">
//                   <Link to='#' className="menu-bars">
//                     <FaRegWindowClose/>
//                   </Link>
//               </li>
//             </ul>
//          </nav>
//             {Sidebar.map((item, index) =>{
//                 return(
//                     <li key={index} className={item.cName}>
//                         <Link to={item.path}>
//                             {item.icon}
//                             <span>{item.title}</span>
//                         </Link>
//                     </li>
//                 )
//             })}
//        </>
//     )
// }

// export default Navbar;
