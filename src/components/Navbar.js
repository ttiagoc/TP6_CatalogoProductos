import React from 'react'
import {Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
    return (
       
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <Link to={"/"}>
                            <img src="/Fakeshop.png" height="30" alt="" />
                        </Link>
                    </a>
                  
                    <div className="collapse navbar-collapse" id="navbarResponsive" style={{justifyContent:'flex-end'}}>
                        <ul className="navbar-nav ml-auto">
                           
                            <li className="nav-item">
                                <Link to={"/products"} className="nav-link" style={{color:'white'}}>Products</Link>
                            </li>
                            <li className="nav-item">
                           
                                 <Link to={'/contact'} className="nav-link" style={{color:'white'}}>Contact</Link>
                            
                            </li>
                            
                            <li className="nav-item">
                            
                            <img src='/shopping-cart.png' height={'40px'} width={'auto'}></img>
                          
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>





        </>
    )
}

export default Navbar;