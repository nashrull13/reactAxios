import React from "react";
import { Jumbotron } from "reactstrap";

const HomeUser = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome User!</h1>
        <p className="lead">The simple page with much effort</p>
        <hr className="my-2" />
        <p>just go to the next page</p>
      </Jumbotron>
    </div>
  );
};

export default HomeUser;


// import React, { Component } from "react";

// export default class nyob extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Selamat Datang di Perpustakaan</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
