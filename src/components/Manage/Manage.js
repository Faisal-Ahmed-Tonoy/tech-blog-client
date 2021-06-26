import React, { useContext } from 'react';
import logo from '../../images/logo.png';

import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { UserContext } from "../../App";

const Manage  = () => {
    const [items,setItems]= useState([]);
        
        const deleteItem =(_id) =>{
      
          fetch('https://young-basin-35516.herokuapp.com/delete/'+_id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((result) => {
         
           
      
          const newItems =items.filter((item) =>item._id !== _id);
          setItems(newItems);
        });
  
      }
            useEffect(() =>{ 
                fetch('https://blooming-beyond-10757.herokuapp.com/blogs')
                .then(res =>res.json())
                .then(data =>setItems(data))
         
                
            },[])


            const [loggedInUser,setLoggedInUser] =useContext(UserContext); 
            const [isAdmin, setIsAdmin] = useState(false);
            useEffect(() => {
              fetch("https://blooming-beyond-10757.herokuapp.com/isAdmin", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: loggedInUser.email }),
              })
                .then((res) => res.json())
                .then((data) => setIsAdmin(data));
            }, []);
    
   

   
   
    return (
     <section >  <h1> This page is  available for authorized individuals  </h1>
       
       { isAdmin &&  <div>
          
 
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
            <li className="nav-item">
              <Link style={{fontWeight: 700}} className="nav-link active  ms-1"  to="/login"> Login</Link>
            </li>
            <li className="nav-item">
              <Link style={{fontWeight: 700}} className="nav-link active  ms-1"  to="/addBlog"> Admin</Link>
            </li>
            
          
          </ul>
        </div>
      </div>
    </nav>

 <div className="row" style={{ background: 'rgb(63,94,251)', background:'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'}}  >
    {  
      
               
            
      items.map(item => <ItemList  key={item._id} deleteItem ={deleteItem } item={item}></ItemList>)
    }
    </div>
           
 
  
      
      
      </div>}
     </section>
        
    );
};

  export default  Manage ;
