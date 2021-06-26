 import React from 'react'
 import logo from '../../images/logo.png';
 import'./Home.css';
 import { Link } from 'react-router-dom';
 
 import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Blog from '../Blog/Blog';
 
 export default function Home() {
     return (
      <div >
        <Header></Header>
       <HeaderMain></HeaderMain>
       <Blog></Blog>
      </div>
  
     )
 }
 