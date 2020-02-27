import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./crudBooksAuth/LoginForm";
import Register from "./crudBooksAuth/Register";
import Notfound from "./crudBooksAuth/NotFound";
import GetBook from "./crudBooksAuth/GetBook";
import HomeUser from "./crudBooksAuth/HomeUser";
import HomeAdmin from "./crudBooksAuth/HomeAdmin";
import PostBook from "./crudBooksAuth/PostBook";
import UpdateBook from "./crudBooksAuth/UpdateBook";
import Main from "./layouts/Main";
import GetUser from "./crudBooksAuth/GetUser";
import GetOrder from "./crudBooksAuth/GetOrder";
import GetOrderUser from "./crudBooksAuth/GetOrderUser";
import UpdateUser from "./crudBooksAuth/UpdateUser";

// console.log(token);

const token = JSON.parse(
    sessionStorage.getItem("persisted_state_hook:token")
);

const routing = (
  <Router>
    <Switch>
      <Main>
        {(() => {
          if (!token) {
            return (
              <>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route component={Notfound} />
                </Switch>
              </>
            );
          } else if (token.token.Role === "USER") {
            return (
              <>
                <Switch>
                  <Route exact path="/homeuser" component={HomeUser} />
                  <Route path="/getbook" component={GetBook} />
                  <Route path="/getorderuser" component={GetOrderUser} />
                  <Route path="/login" component={Login} />
                  <Route component={Notfound} />
                </Switch>
              </>
            );
          } else if (token.token.Role === "ADMIN") {
            return (
                <>
              <Switch>
                <Route exact path="/homeadmin" component={HomeAdmin} />
                <Route path="/getbook" component={GetBook} /> 
                <Route path="/getuser" component={GetUser} />           
                <Route path="/postbook" component={PostBook} />
                <Route path="/getorder/:id" component={GetOrder} /> 
                {/* <Route path="/getbyid" component={GETBYID} /> */}
                <Route path="/updatebook/:id" component={UpdateBook} />
                <Route path="/updateuser/:id" component={UpdateUser} />
                <Route path="/login" component={Login} />
                <Route component={Notfound} />
              </Switch>
                </>
            );
          }
        })()}
      </Main>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
