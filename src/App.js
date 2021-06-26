import logo from './logo.svg';
import React, { createContext, useState } from 'react'; 
import Home from './components/Home/Home';
import AddBlog from './components/AddBlog/AddBlog';
import Manage from './components/Manage/Manage';
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
 


 

 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import BlogDescription from './components/BlogDescription/BlogDescription';

 export const UserContext = createContext();

function App() {

  const [loggedInUser,setLoggedInUser] =useState ({});
 
  
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
  

    <Router>
     
    
      

      
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        
        <Route path="/home">
          <Home></Home>
        </Route>
        
       
         
        
        
 
         <PrivateRoute path="/addBlog">
           <AddBlog></AddBlog>
         </PrivateRoute>
         <Route path="/blog/:_id">
          <BlogDescription></BlogDescription>
         </Route>

         <PrivateRoute path="/manage">
         <Manage></Manage>
        </PrivateRoute>
        
        <Route path="/login">
          <Login></Login>
        </Route>
     

            
      </Switch>
 
  </Router>
  </UserContext.Provider>
  
  );
}

export default App;
