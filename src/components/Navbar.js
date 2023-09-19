import React, {useContext} from 'react'
import {Link } from 'react-router-dom';
import '../index.css';
import { CarritoContext } from "../context/CarritoContext";

const Navbar = () => {

    const { cantidadProductos } = useContext(CarritoContext);

    return (
       
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                    
                        <Link to={"/"}>
                            <img src="/Fakeshop.png" height="30" alt="" />
                        </Link>
                   
                  
                    <div className="collapse navbar-collapse" id="navbarResponsive" style={{justifyContent:'flex-end'}}>
                        <ul className="navbar-nav ml-auto">
                           
                            <li className="nav-item">
                                <Link to={"/products"} className="nav-link" style={{color:'white'}}>Products</Link>
                            </li>
                            <li className="nav-item">
                           
                                 <Link to={'/contact'} className="nav-link" style={{color:'white'}}>Contact</Link>
                            
                            </li>

                            
                            <div style={{width:'10px'}}></div>
                            
                            <li className="nav-item">

                            
                            <div style={{display:'flex', flexDirection:'row'}}>
                            <Link  to={"/carrito"}><img src='/shopping-cart2.png'  height={'40px'} width={'auto'} alt="carrito"></img></Link>
                            <div style={{backgroundColor:'#0a4275', borderRadius:10, height:'25px', width:25}}><p className='text-center ' style={{color:'white'}}>{cantidadProductos}</p></div>
                            </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>





        </>
    )
}

export default Navbar;