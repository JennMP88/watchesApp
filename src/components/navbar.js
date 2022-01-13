import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg pe-3 ps-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" >
            Kairos
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
 
      <ul class="nav subNav">
 
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#about-container" >
            About
          </a>
        </li>
        
      
        <li class="nav-item">
        <Link to="/watches">Watches</Link>
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
            hours
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
           
            <li>
              <a className="dropdown-item" href="#">
                Something else here
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
