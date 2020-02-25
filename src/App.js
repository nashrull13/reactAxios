// import React from "react";
// // import logo from "./logo.svg";
// import "./App.css";
// import { Container, Row, Col } from "reactstrap";

// import Userprofile from "./component/userprofile";
// function App() {
//   return (
//     //<center>
//     <Container>
//       <Row>
//         <Col></Col>
//         <Col>
//           <Userprofile />
//         </Col>
//         <Col></Col>
//       </Row>
//     </Container>
//   );
// }
// export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/layouts/Main";
import UpdateBook from "./components/crudBooksAuth/UpdateBook";
import GetBook from "./components/crudBooksAuth/GetBook";
import PostBook from "./components/crudBooksAuth/PostBook";
//import LoginForm from "./components/crudBooksAuth/LoginForm";
import Register from "./components/crudBooksAuth/Register";
import Login from "./components/crudBooksAuth/LoginForm";
// import Home from "./components/Home";
// import Profile from "./components/UserProfile";
// import About from "./components/About";
// import Notfound from "./components/NotFound";
// import Main from "./components/layouts/Main";
// import NameForm from "./components/NameForm";
// import MultiInputForm from "./components/MultiInputForm";
// import Validasi from "./validationHook/Validasi";

// const App = props => {
//   return (
//         <Router>
//           <Switch>
//             <Main>
//               <Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route path="/home" component={Home} />
//                 <Route path="/profile" component={Profile} />
//                 <Route path="/about" component={About} />
//                 <Route path="/form" component={NameForm} />
//                 <Route path="/multiform" component={MultiInputForm} />
//                 <Route path="/validateform" component={Validasi} />
//                 <Route path="/getbook" component={FetchUsingHook} />
//                 <Route component={Notfound} />
//               </Switch>
//             </Main>
//           </Switch>
//         </Router>
//       );
//     };

//     export default App;

const App = props => {
  return (
    <Router>
      <Switch>
        <Main>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/getbook" component={GetBook} />
            <Route path="/postbook" component={PostBook} />
            <Route path="/updatebook/:id" component={UpdateBook} />           
          </Switch>
        </Main>
      </Switch>
    </Router>
  );
    };

    export default App;

