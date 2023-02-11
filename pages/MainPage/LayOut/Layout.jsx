import React from "react";
import Navbar from "../../../component/Navbar/Navbar";
import Sidebar from "../../../component/Sidebar/Sidebar";
import './Layout.scss'



const Layout = ({ children}) => {
    
    
   


    return (
        <div className="__layout" style={{ display: 'flex', width:'100%'}}>
           <Sidebar />

            <div className="homePage">
                <Navbar/>
                <div className="children">
                {children}

                </div>

            </div>
        </div>
    );
}
export default Layout;