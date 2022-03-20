import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import { Link } from 'react-router-dom';
// const kairosLogo=require("../assets/kairosLogo.png");

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg pe-3 ps-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" >
            Kairos
          </a>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </nav>
 
      <ul class="nav subNav">
 
        <li class="nav-item">
          
        <Link to={{pathname:"/", hash:"#about-container"}}  className="nav-link">About</Link>
          {/* <a class="nav-link" aria-current="page" href="#about-container" > */}
            {/* About */}
          {/* </a> */}
        </li>
        
      
        <li class="nav-item ">
        <Link to="/watches"  className="nav-link">Watches</Link>
        </li>
   
       
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hours
          </a>

          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            
     
            <li>
              <a className="dropdown-item" href="#">
                M -Th  9am-6:00pm
              </a>
            </li>
            <hr/>
            <li>
              <a className="dropdown-item" href="#">
                F - Sat 10am-6:00pm
              </a>
            </li>
            <hr/>
            <li>
              <a className="dropdown-item" href="#">
                Sundays- closed
              </a> 
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};
export default Navbar;
