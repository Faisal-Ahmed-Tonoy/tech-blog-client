import React from 'react';
import logo from '../../images/logo.png';

import { Link } from 'react-router-dom';

 
import'./Header.css';
 

const Header = () => {
    return (

      <nav className="navbar nav-main navbar-expand-lg navbar-light bg-light navbar-color ">
      <div className="container-fluid">
      <Link className="nav-link navbar-brand" to="/"><img style={{height:"68px"}} src={logo} alt=""/></Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link style={{fontWeight: 700}} className="nav-link active ms-1"  to="/"> Home</Link>
            </li>
            {/* <li className="nav-item">
              <Link style={{fontWeight: 700}} className="nav-link active  ms-1"  to="/login"> Login</Link>
            </li> */}
            <li className="nav-item">
              <Link style={{fontWeight: 700}} className="nav-link active  ms-1"  to="/addBlog"> Admin</Link>
            </li>
            
          
          </ul>
        </div>
      </div>
    </nav>
      
      
      

        
    );
};

export default Header;