import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// import About from "./components/about";
// import NotFound from "./components/NotFound";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./layouts/Main";
import FetchUsingHook from "./components/FetchUsingHook";
import PostUsingHook from "./components/PostUsingHook";
import UpdateBook from "./components/UpdateBook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

const routing = (
  <Router>
    <Switch>
      <Main>
        <Switch>
          <Route path="/postbook" component={PostUsingHook} />
          <Route path="/getbook" component={FetchUsingHook} />
          <Route path="/updatebook" component={UpdateBook} />
        </Switch>
      </Main>
    </Switch>
  </Router>
);
    

  
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
