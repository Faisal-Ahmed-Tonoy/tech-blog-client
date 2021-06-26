import React, { useContext } from 'react';
import logo from '../../images/logo.png';

import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

 
 
const BlogDescription  = () => {
 
    
    const { _id }=  useParams();
    
    const [blog,setBlog]=useState([]);
    
   
    const {name,description,imageURL} =blog;

    
    
    

    useEffect(() =>{
fetch('https://blooming-beyond-10757.herokuapp.com/blog/'+_id)
.then(res =>res.json())
.then(data =>setBlog(data));

 
    },[_id])
    console.log(description);

   
   
    return (
      <div>
          
 
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
           
 
 <section  class="py-5 bg-primary text-center">
        <div class="container"></div>
      
        <h2 class="display-4"> {name} </h2>
        <div class="blog-image">
        <img class="img-fluid" src={imageURL} alt="" />
        </div>
        <p class="lead">{description }</p>
     
    </section>
      
      
      </div>
        
    );
};

  export default  BlogDescription  ;