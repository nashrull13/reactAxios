import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css"



export default function Navigation() {
  const token = JSON.parse(
    sessionStorage.getItem("persisted_state_hook:token")
  );

  function logout() {
    sessionStorage.setItem("persisted_state_hook:token", "");
    sessionStorage.clear();
  }
   
    
     
if (!token) {  
  return (    
    <header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="./" class="navbar-brand">BOOKS</a>
        </div>
        <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
          <ul class="nav navbar-nav navbar-right">
            <Link to="/login">
              <li>
                Login
            </li>
            </Link>
            <Link to="/register">
              <li>
                Register
            </li>
            </Link>                       
          </ul>
        </nav>
      </div>
    </header>
  );
} else if (token.token.Role === "USER") {
    return (
      <header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
        <div class="container">
          <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="./" class="navbar-brand">BOOKS</a>
          </div>
          <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul class="nav navbar-nav navbar-right">
              <Link to="/homeuser">
                <li>
                  Home 
            </li>
              </Link>
              <Link to="/getbook">
                <li>
                  List Book
            </li>
              </Link>
              <Link to="/getorderuser">
                <li>
                  List Order
            </li>
              </Link>
              <Link onClick={logout} to="/login">
                <li>
                  Logout
               </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    );
} else if (token.token.Role === "ADMIN") {
  return (
       <header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
        <div class="container">
          <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="./" class="navbar-brand">BOOKS</a>
          </div>
          <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul class="nav navbar-nav navbar-right">
            <Link to="/homeadmin">
              <li>
                Home 
            </li>
            </Link>
            <Link to="/getbook">
              <li>
                List Book
            </li>
            </Link>
            <Link to="/postbook">
              <li>
                Add Book
            </li>
            </Link>
            <Link to="/getuser">
              <li>
                List User
            </li>
            </Link>            
            <Link onClick={logout} to="/login">
              <li>
                Logout
               </li>
            </Link>
            </ul>
          </nav>
        </div>
      </header>
          
    );
}
}




