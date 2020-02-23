import React from "react";
import { Jumbotron } from "reactstrap";

const Home = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to My Page</h1>
        <p className="lead">The simple page with much effort</p>
        <hr className="my-2" />
        <p>just go to the next page</p>
      </Jumbotron>
    </div>
  );
};

export default Home;
