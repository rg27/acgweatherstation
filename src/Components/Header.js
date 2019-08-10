import React from 'react';
import logo from '../images/logo.png';

class NavBar extends React.Component{
    render(){
     
        return(
    
            <div className="site-header">
            <div className="container">
                <a href="index.html" className="branding">
                <img src={logo} alt="logo" className="logo"/>
                    <div className="logo-type">
                        <h1 className="site-title">ACGWeatherStation</h1>                     
                    </div>
                </a>
    
              
                <div className="main-navigation">
                    <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                    <ul className="menu">
                        <li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
                        <li className="menu-item"><a href="index.html">Chatto</a></li>
                        <li className="menu-item"><a href="index.html">Anzano</a></li>
                        <li className="menu-item"><a href="index.html">Gualvez</a></li>
                        
                    </ul>
                </div>
                <div className="mobile-navigation"></div>
            </div>
        </div> 
        )
    }

}



export default NavBar