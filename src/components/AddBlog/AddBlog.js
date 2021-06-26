import React, {useContext,useState ,useEffect } from "react";
import axios from 'axios';
import'./AddBlog.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Header from '../Header/Header';
import { UserContext } from "../../App";


export default function AddBlog() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL,setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData ={
            name: data.name,
            description: data.description,
            imageURL: imageURL
        };
        const url = `https://blooming-beyond-10757.herokuapp.com/addBlog`;
        console.log(eventData);
        fetch(url,{
          method: 'POST',
          headers:{ 
           'content-type': 'application/json'
          },
          body:JSON.stringify(eventData)
        })
        .then(res => console.log('server site response'))
        
    };
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
 

    const  handleImageUpload = event =>{ 
        console.log(event.target.files[0])
          const imageData =new FormData();
          imageData.set('key','f9ddb3dab982c8e822f3464eac3237d7');
          imageData.append('image',event.target.files[0]);
          
          axios.post('https://api.imgbb.com/1/upload', 
          imageData)
            .then(function (response) {
         
                setImageURL(response.data.data.display_url);
        
            })
            .catch(function (error) {
              console.log(error);
            });  
  
      }
    return (
      <section> <h1> This page is  available for authorized individuals  </h1> { isAdmin &&
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
            <li className="nav-item">
              <Link style={{fontWeight: 700}} className="nav-link active  ms-1"  to="/login"> Login</Link>
            </li>
            <li className="nav-item">
              <Link style={{fontWeight: 700}} className="nav-link active  ms-1"  to="/manage"> Delete Blog</Link>
            </li>
            
            
          
          </ul>
        </div>
      </div>
    </nav>
  
       
<div className="col-md-12 col-sm-12"
        style={{
          backgroundImage: 'linear-gradient(to right, #4776E6, #8E54E9)',
          height: "500px",
          padding: " 50px 10px 10px 10px",
        }}
        class="d-flex"
      > 
      
      <form    onSubmit={handleSubmit(onSubmit)}  style={{
              padding: "10px",
              width: "100%",
              height: "350px",
              background: "#FFFFFF",
              borderRadius: " 20px",
            }} >  
             <div class="col-md-6"  >
          <label  htmlFor="name" className="p-2" >
             Blog Name:
          </label>
          <input
          name="name"
          autoComplete="off"
          {...register("name", {
            required: "Required",
          })}
        />
          <br/>
          <label  htmlFor="description" className="p-2" >
             Description
          </label>

          <input
          description="description"
          autoComplete="off"
          {...register("description", {
            required: "Required",
          })}
        />
          </div>
          <br />
          <input name="imageURL"  type="file"  onChange ={handleImageUpload}/>
          <br />
      
      <input  type="submit" />  
      </form>
      
     
          </div>
</div>}
</section>
        
        
    )
}
