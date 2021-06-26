import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }
    

    
    export default function Login() {
        const [newUser, setNewUser] = useState(false);
        const [user, setUser] = useState({
            isSignedIn: false,
            newUser:false,
            name: '',
            email: '',
            password: '',
            photo: '',
            error:'',
            success:false
          });
          const [loggedInUser,setLoggedInUser] = useContext (UserContext)
          const history = useHistory();
    const location = useLocation(); 
    const { from } = location.state || { from: { pathname: "/" } };
          const handleBlur = (e) => {
            let isFieldValid = true;
            if(e.target.name === 'email'){
              isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            }
            if(e.target.name === 'password'){
              const isPasswordValid = e.target.value.length > 6;
              const passwordHasNumber =  /\d{1}/.test(e.target.value);
              isFieldValid = isPasswordValid && passwordHasNumber;
            }
            if(isFieldValid){
              const newUserInfo = {...user};
              newUserInfo[e.target.name] = e.target.value;
              setUser(newUserInfo);
            }
          }
        
          const handleSubmit =(e) =>{
              console.log(user.email, user.password)
              if(newUser &&  user.email  && user.password){
console.log('submitting')

firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then(res => {
      const newUserInfo ={...user};
      newUserInfo.error= '';
      newUserInfo.success=true;
      setUser(newUserInfo);
      updateUserName(user.name)
    // Signed in 
 
    // ...
  })
  .catch((error) => {
   const newUserInfo ={...user};
   newUserInfo.error =error.message;
   newUserInfo.success=false;
   setUser(newUserInfo);
    // ..
  });
              }
              if(!newUser && user.email && user.password){
                firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                  // Signed in
                  const newUserInfo ={...user};
                  newUserInfo.error= '';
                  newUserInfo.success=true;
                  setUser(newUserInfo);
                  setLoggedInUser(newUserInfo);
                  history.replace(from);
                  // ...
                })
                .catch((error) => {
                    const newUserInfo ={...user};
                    newUserInfo.error =error.message;
                    newUserInfo.success=false;
                    setUser(newUserInfo);
                });
              }
              e.preventDefault();
        
          }
          const updateUserName =name =>{
            const user = firebase.auth().currentUser;

            user.updateProfile({
              displayName: name,
               
            }).then(() => {
              // Update successful
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });  

          }
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

<div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="card card0 border-0">
              <div className="row d-flex">
                <div className="col-lg-6">
                  <div className="card1 pb-5">
                    <div className="row"> <img src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg" className="logo" /> </div>
                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg" /> </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                      <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                      
                   
                   
                    </div>
                    <div className="row px-3 mb-4">
                      <div className="line" /> <small className="or text-center">Or</small>
                      <div className="line" />
                    </div> 
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">Click On CheckBox For New User Sign up</label>
      <form onSubmit={handleSubmit}>
         
        {newUser  &&  <input name="name" type="text" onBlur={handleBlur} placeholder="Your name"/>}
                    {/* <input type="checkbox" name="newUser" id="" />
                    <label htmlFor ="newUser"> New User SignUp</label>
                  <form onSubmit={handleSubmit}>
                <  user.newUser && <div className="row px-3"> <label className="mb-1">
                        <h6 className="mb-0 text-sm">Name</h6>
                      </label> <input  onBlur={handleBlur} className="mb-4" type="text" name="name" placeholder="Enter Your Name" /> </div> */} 
                  <div className="row px-3"> <label className="mb-1">
                        {/* <h6 className="mb-0 text-sm">Email Address</h6> */}
                      </label> <input  onBlur={handleBlur} className="mb-4" type="text" name="email" placeholder="Enter a valid email address" /> </div>
                    <div className="row px-3"> <label className="mb-1">
                        {/* <h6 className="mb-0 text-sm">Password</h6> */}
                      </label> <input onBlur={handleBlur}  type="password" name="password" placeholder="Enter password" /> </div>
                    {/* <div className="row px-3 mb-4">
                      <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                    </div> */}
                    <div className="row mb-3 px-3"> <input type="submit" value={newUser ? 'Sign Up' :'Sign In'} className="btn btn-blue text-center" Login /> </div>
                  </form>
                  <p style={{color:'red'}}>{user.error}</p>
                  { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
                     
                  </div>
                </div>
              </div>
              <div className="bg-blue py-4">
                <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright © 2019. All rights reserved.</small>
                  <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm" /> <span className="fa fa-google-plus mr-4 text-sm" /> <span className="fa fa-linkedin mr-4 text-sm" /> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm" /> </div>
                </div>
              </div>
            </div>
          </div>

            </div>
        )
    }
    
