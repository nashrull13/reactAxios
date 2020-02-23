import React, { Component } from "react";

export default class name extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }
  render() {
    return <div>{this.props.name}</div>;
  }
}
name.defaultProps = {
  name: "Muhammad Irfan Nashrullah"
};
