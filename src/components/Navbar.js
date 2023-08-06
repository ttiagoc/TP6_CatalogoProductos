import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        /*
        <div>
            <nav classNameName="navbar bg-light fixed-top shadow">
                <div classNameName="container-fluid container">
                    <button classNameName="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i classNameName="fa fa-bars"></i>
                    </button>
                    <NavLink to="/">
                        <img src="/FakeShop.png" alt="logo" style={{ height: "50px" }} />
                    </NavLink>
        
                    <button classNameName="navbar-toggler" type="button">
                        <i classNameName="fa fa-shopping-cart"></i>
                    </button>
                   
                    
                    <div classNameName="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div classNameName="offcanvas-header">
                            <NavLink to="/">
                                <img src="/FakeShop.png" alt="logo" style={{ height: "50px" }} />
                            </NavLink>
                            <button type="button" classNameName="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div classNameName="offcanvas-body">
                            <input classNameName="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                           
                            <Link to="/products" classNameName=''>
                    <button classNameName="navbar-toggler" style={{}} type="button">
                    <span>All Products</span> 
                    </button>
                    </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        */
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
                                <Link to={"/products"} className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                           
                                 <Link to={'/contact'} className="nav-link">Contact</Link>
                            
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