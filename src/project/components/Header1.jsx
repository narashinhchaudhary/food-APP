import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

function Header1(cart) {
    
    const [isActive, setIsActive] = useState(false);
    const redirect=useNavigate();
    const userlogout=()=>{
        localStorage.removeItem('uid');
        localStorage.removeItem('uname');
        redirect('/');
        return false; 
           
    }
    const handleClick = () => {
        setIsActive((current) => !current);
      };
  return (
    <div>
       <div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap" rel="stylesheet" />
    {/* Icon Font Stylesheet */}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
    {/* Libraries Stylesheet */}
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
    {/* Customized Bootstrap Stylesheet */}
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    {/* Template Stylesheet */}
    <link href="css/style.css" rel="stylesheet" />
</div>




 
        <div className="container-fluid fixed-top">
            <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="/" className="text-white">123 Street, New York</a></small>
                        <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a href="/" className="text-white">Email@Example.com</a></small>
                        {(
                                () => {
                                    if (localStorage.getItem('uid')) {
                                        return (
                                            <small className="text-light"><i className="fa fa-user ms-5 me-2" />Hi.. {localStorage.getItem('uname')}</small>
                                        )
                                    }
                                }
                            )()}
                    </div>
                    <div className="top-link pe-2">
                        <NavLink to="/" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</NavLink>
                        <NavLink to="/" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</NavLink>
                        <NavLink to="/" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></NavLink>
                    </div>
                </div>
            </div>
            <div className="container px-0">
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"  onClick={handleClick}>
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className={`collapse navbar-collapse bg-white  ${isActive ? 'show' : ''}`} id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <NavLink to="/" className="nav-item nav-link  active">Home</NavLink>
                            <NavLink to="/Shop" className="nav-item nav-link">Shop</NavLink>
                                    <NavLink to="/Cart" className="nav-item nav-link">Cart</NavLink>
                                    <NavLink to="/Cheakout" className="nav-item nav-link">Cheakout</NavLink>    
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>

                            {(
                            () => {
                                if (localStorage.getItem('uid')) {
                                    return (
                                             <>
                                             <NavLink href="javascript:void(0)"  onClick={userlogout} className="nav-item nav-link">LOGOUT</NavLink>
                          
                                            
                                             <NavLink to="/Profile" className=" nav-item nav-link nav-item nav-link">profile
                                             <i className="bi bi-people"></i></NavLink>
                          
                                    
                                   </>
                                        )
                                }
                                else {
                                    return (
                                        <NavLink to="/Login" className="nav-item nav-link">LOGIN</NavLink>
                          
                                        )
                                }
                            }
                         )()}
                           
                        </div>
                        <div className="d-flex m-3 me-0">
                            <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                            <a href="/" className="position-relative me-4 my-auto">
                                <i className="fa fa-shopping-bag fa-2x"></i>
                                <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: "-5px", left: "15px", height:"20px", minWidth:"20px"}}>4</span>
                            </a>
                           
                        </div>
                    </div>
                </nav>
            </div>
        </div> 
       


       
        <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center">
                        <div className="input-group w-75 mx-auto d-flex">
                            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
                            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


         

    </div>
  )
}

export default Header1