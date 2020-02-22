import React from "react";
import { Container, Col } from "reactstrap";
// import Navigation from "../components/Navigation";
import NavBooks from "../components/NavBooks";

const Main = props => {
  return (
    <>
      <NavBooks />
      <Container fluid={true} className="mt-2">
        <Col>{props.children}</Col>
        <Col></Col>
      </Container>
    </>
  );
};
export default Main;
