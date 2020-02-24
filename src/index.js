// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import * as serviceWorker from "./serviceWorker";
// import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from "./components/about";
// import NotFound from "./components/NotFound";
// import Main from "./components/layouts/Main";
// import UpdateBook from "./components/crudBooks/UpdateBook";
// import GetBook from "./components/crudBooks/GetBook";
// import PostBook from "./components/crudBooks/PostBook";

// const routing = (
//   <Router>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//         Nav
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <Link className="navbar-brand" to="/">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="navbar-brand" to="/about">
//               About
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//     <switch>
//       <Route exact path="/" component={App} />
//       <Route path="/about/:number" component={About} />
//       <Route component={NotFound} />
//     </switch>
//   </Router>
// );

// const routing = (
//   <Router>
//     <Switch>
//       <Main>
//         <Switch>
//           <Route path="/getbook" component={GetBook} />
//           <Route path="/postbook" component={PostBook} />          
//           <Route path="/updatebook/:id" component={UpdateBook} />
//         </Switch>
//       </Main>
//     </Switch>
//   </Router>
// );

import React, { useState } from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
import Counters from "./component/Counters";
import SearchForm from "./component/SearchForm";
import Repos from "./component/Repos";


function App() {  
  return (
    <div className="App">
      <h1>Search GitHub Repos</h1>
      <SearchForm />
      <Counters />
      <Repos />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



  
// ReactDOM.render(<App/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
